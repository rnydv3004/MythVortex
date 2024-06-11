"use client";
import React, { FormEvent, useEffect, useState } from "react";
// import Logo from "./../../public/png.png";
import Image from "next/image";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { DateTime } from "luxon";
import { addSubscription } from "@/helper/subscribe";
import AppointmentDetails from "./AppointmentDetails";

const timeZones = [
  "Asia/Kolkata",
  "America/Toronto",
  "America/New_York",
  "America/Vancouver",
  "America/Edmonton",
  "America/Winnipeg",
  "America/St_Johns",
  "America/Halifax",
];

export default function Formcomponent() {
  const [dateValue, setDateValue] = useState("yyyy-MM-dd");
  const [dialog, setDialog] = useState(false);
  const [initialLoader, setInitialLoader] = useState(true);
  const [loading, setLoading] = useState(true);
  const [bookingStatus, setBookingStatus] = useState(true);
  const [dateSlots, setDateSlots]: any = useState();
  const [allSlots, setAllSlots] = useState([]);
  const [availableSlot, setAvailableSlot] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [calenderLoader, setCalenderLoader] = useState(true);
  const [timeLoader, setTimeLoader] = useState(false);
  const [slotIdentifier, setSlotIdentifier] = useState(false);
  const [noSlotIdentifier, setNoSlotIdentifier] = useState(false);

  const [appointmentDetails, setAppointmentDetails] = useState({
    firstName: "",
    lastName: "",
    type: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    clienttime: "",
    timezone: "America/Toronto",
    eventId: "",
  });

  const handleTimeZoneChange = (event: { target: { value: any } }) => {
    setAppointmentDetails({
      ...appointmentDetails,
      timezone: event.target.value,
    });
  };

  function checkFields() {
    // console.log(appointmentDetails)
    if (
      appointmentDetails.firstName === "" ||
      appointmentDetails.lastName === "" ||
      appointmentDetails.phone === "" ||
      appointmentDetails.email === "" ||
      appointmentDetails.date === "" ||
      appointmentDetails.time === ""
    ) {
      toast.error("Please fill required details");
      console.log(appointmentDetails);
      return false;
    }
    return true;
  }

  async function bookAppointment() {
    try {
      // ADD GOOGLE EVENT
      const response = await fetch("/api/addevent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: appointmentDetails.firstName,
          lastName: appointmentDetails.lastName,
          date: appointmentDetails.date,
          time: appointmentDetails.time,
        }),
      });
      if (response.ok) {
        // Parse the response JSON data
        const responseData = await response.json();
        // Update the eventId in the appointmentDetails state
        setAppointmentDetails((prevDetails) => ({
          ...prevDetails,
          eventId: responseData.details,
        }));
      } else {
        // If the request was not successful, handle the error
        console.error("Error:", response.statusText);
      }
      // ADD DATA TO GOOGLESHEET
      const response2 = await fetch("/api/addgsheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: appointmentDetails.firstName,
          lastName: appointmentDetails.lastName,
          phone: appointmentDetails.phone,
          email: appointmentDetails.email,
          date: appointmentDetails.date,
          time: appointmentDetails.time,
        }),
      });
      // You can handle the response here if needed
      if (!response.ok) {
        // Handle non-successful response (e.g., error handling)
        console.error("Failed to add event:", response.statusText);
      } else if (!response2.ok) {
        // Handle non-successful response (e.g., error handling)
        console.error("Failed to add details in sheet:", response2.statusText);
      }
      {
        // Event added successfully
        toast.success("Confirmation email sent");
        console.log("Event added successfully");
      }
      // MAILER
      const mailResponse = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentDetails),
      });
      if (!mailResponse.ok) {
        // Handle error if the response status is not OK (e.g., 404, 500).
        toast.error(
          "Error in sending mail. Our team will connect you by phone"
        );
        throw new Error(`Error fetching data. Status: ${mailResponse.status}`);
      }
      // REMINDER MAIL SCHEDULER
      const reminderScheduler = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentDetails),
      });
      // BEEHIVE SUBSCRIPTION
      const subscription = await fetch("/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentDetails),
      });
      if (!subscription.ok) {
        // Handle error if the response status is not OK (e.g., 404, 500).
        toast.error(
          "Error in sending mail. Our team will connect you by phone"
        );
        throw new Error(`Error fetching data. Status: ${subscription.status}`);
      }
      return response;
    } catch (error) {
      // console.error("Error fetching data:", error);
      throw error;
    }
  }

  function chips(text: string, state: boolean, index: number) {
    const serverTimeZone = "America/Toronto";
    const ESTTimeZone = appointmentDetails.timezone;
    const inputTime = text;
    const fromTime = DateTime.fromFormat(inputTime, "HH:mm", {
      zone: serverTimeZone,
    });
    const toTime = fromTime.setZone(ESTTimeZone);
    const resultantTime = toTime.toFormat("HH:mm");
    return (
      <button
        key={index}
        type="button"
        disabled={state}
        className={`disabled:bg-slate-500 disabled:hover:scale-100
             ${
               selectedSlot === text ? "bg-green-600" : "bg-blue-500"
             } h-fit w-fit transform cursor-pointer select-none rounded-full px-5 py-1 text-sm text-white transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100`}
        onClick={(e) => {
          e.preventDefault();
          setSelectedSlot(text);
          setAppointmentDetails({
            ...appointmentDetails,
            time: text,
            clienttime: resultantTime,
          });
          // console.log("Seleted slot:", selectedSlot)
        }}
      >
        {resultantTime}
      </button>
    );
  }

  useEffect(() => {
    // const firebaseBook = async () => {
    //   try {
    //     const response = await fetch("/api/bookappointment", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(appointmentDetails),
    //     });
    //     if (!response.ok) {
    //       throw new Error(`Error fetching data. Status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     // Do something with the data if needed
    //   } catch (error: any) {
    //     console.error("Error:", error.message);
    //   }
    // };
    // if (!(appointmentDetails.phone === "")) {
    //   firebaseBook();
    // }
  }, [appointmentDetails.eventId]);

  async function fetchDates() {
    try {
      const myZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const today = DateTime.now().setZone(myZone).toFormat("yyyy-MM-dd");
      setAppointmentDetails({ ...appointmentDetails, timezone: myZone });

      console.log("Calling route getdate");
      const response = await fetch("/api/getdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
        body: JSON.stringify({
          checkdate: today,
        }),
      });

      console.log(response);

      if (!response.ok) {
        // Handle error if the response status is not OK (e.g., 404, 500).
        throw new Error(`Error fetching data. Status: ${response.status}`);
      }

      const data = await response.json(); // Parse the response JSON data
      return data; // Return the data if needed
    } catch (error) {
      // console.error("Error fetching data:", error);
      throw error; // Rethrow the error for higher-level error handling if needed
      console.log(error);
    }
  }

  useEffect(() => {
    const dates = fetchDates();

    dates.then((data) => {
      setDateSlots(data);
      setCalenderLoader(false);
    });

    const timeoutFunction: () => number = () => {
      setInitialLoader(false);
      return 0;
    };

    setTimeout(timeoutFunction, 1000);
  }, []);

  async function fetchSlots(checkDate: any) {
    try {
      const response = await fetch("/api/gettime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
        body: JSON.stringify({
          checkdate: checkDate,
        }),
      });
      if (!response.ok) {
        // Handle error if the response status is not OK (e.g., 404, 500).
        throw new Error(`Error fetching data. Status: ${response.status}`);
      }
      const data = await response.json(); // Parse the response JSON data
      // console.log("Time: ", data)
      return data; // Return the data if needed
    } catch (error) {
      // console.error("Error fetching data:", error);
      throw error; // Rethrow the error for higher-level error handling if needed
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (checkFields()) {
      // console.log('Booking Appointment')
      setDialog(true);
      try {
        // Call your bookAppointment function here
        const response:any = await bookAppointment();
        console.log("Response: ",response)
        if (response.status === 200) {
          setLoading(false);
          setBookingStatus(true);
        } else {
          setLoading(false);
          setBookingStatus(false);
        }
      } catch (error) {
        // console.error("Error in booing details form: Please try again later", error);
        // Handle the error here if needed
      }
    }
  };

  return (
    <div className=" w-full rounded-sm bg-opacity-20 shadow-sm md:h-[105%] md:w-[60%]">
      {initialLoader ? (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-slate-800">
          <div className="border-primary-500 h-14 w-14 animate-spin rounded-full border-t-4"></div>
        </div>
      ) : (
        ""
      )}

      {dialog ? (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-40 flex h-screen w-screen items-center justify-center">
          <div className="m-10 flex flex-col items-center justify-center gap-6 rounded-sm bg-white p-5 dark:bg-slate-800 md:p-10">
            {!loading ? (
              <div className="flex flex-col items-center justify-center gap-5 ">
                <div className="flex h-16 w-fit">
                  <Image
                    src={""}
                    alt={"Taxmechnaic Logo"}
                    className="h-16 w-auto"
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
                  />
                </div>
                {bookingStatus ? (
                  <h1 className="flex-wrap text-center text-sm font-medium text-slate-900 lg:w-[400px]">
                    Thank you for scheduling an appointment with TaxMechanic.
                    The meeting link will be shared with you via email.
                  </h1>
                ) : (
                  <h1 className="flex-wrap text-center text-xs font-bold text-red-700">
                    Booking Falied due to some technical error! Please try again
                    later.
                  </h1>
                )}
                <Link href={"https://www.taxmechanic.ca/"}>
                  <p className="z-40 w-fit rounded-sm bg-[#e1ac27] px-5 py-2.5 text-center text-sm font-semibold text-[#FFEBCD] shadow-sm hover:bg-[#bb8f22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-[#bb8f22]">
                    Visit us
                  </p>
                </Link>
              </div>
            ) : (
              <span className="loader"></span>
            )}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center ">
          <form
            onSubmit={handleSubmit}
            className=" grid h-[calc(100vh-96px)] w-full grid-cols-2 overflow-y-auto rounded-lg bg-opacity-50 bg-gradient-to-t from-slate-200 via-slate-100 px-6 pb-10 pt-10 dark:border-slate-600 dark:bg-opacity-40  dark:bg-gradient-to-t dark:from-black dark:via-slate-700 md:h-[65%] md:gap-5 lg:border-2 lg:px-0 lg:shadow-xl"
          >
            {/* User Details */}
            <div className="col-span-2 mx-auto flex w-full flex-col  gap-4 gap-x-8 gap-y-6 sm:grid-cols-2 md:col-span-1 md:max-w-[300px]">
              <div className="flex flex-col">
                <label
                  htmlFor="first-name"
                  className="rounded-sm bg-transparent py-0 text-xs font-medium text-slate-500 dark:text-slate-300"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={appointmentDetails.firstName}
                  autoComplete="given-name"
                  onChange={(e) => {
                    e.preventDefault();
                    setAppointmentDetails({
                      ...appointmentDetails,
                      firstName: e.target.value,
                    });
                  }}
                  className="rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#3e3e3e] outline-primary dark:border-slate-600  dark:bg-slate-800 dark:text-slate-200 dark:outline-none md:min-w-[280px] md:py-2"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="last-name"
                  className="rounded-sm bg-transparent py-0 text-xs font-medium text-slate-500 dark:text-slate-300"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={appointmentDetails.lastName}
                  onChange={(e) => {
                    e.preventDefault();
                    setAppointmentDetails({
                      ...appointmentDetails,
                      lastName: e.target.value,
                    });
                  }}
                  autoComplete="family-name"
                  className="rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#3e3e3e] outline-primary dark:border-slate-600  dark:bg-slate-800 dark:text-slate-200 dark:outline-none md:py-2"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="rounded-sm bg-transparent py-0 text-xs font-medium text-slate-500 dark:text-slate-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={appointmentDetails.email}
                  id="email"
                  onChange={(e) => {
                    e.preventDefault();
                    setAppointmentDetails({
                      ...appointmentDetails,
                      email: e.target.value,
                    });
                  }}
                  autoComplete="email"
                  className="rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#3e3e3e] outline-primary dark:border-slate-600  dark:bg-slate-800 dark:text-slate-200 dark:outline-none md:py-2"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone-number"
                  className="rounded-sm bg-transparent py-0 text-xs font-medium text-slate-500 dark:text-slate-300"
                >
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  value={appointmentDetails.phone}
                  onChange={(e) => {
                    e.preventDefault();
                    setAppointmentDetails({
                      ...appointmentDetails,
                      phone: e.target.value,
                    });
                  }}
                  autoComplete="tel"
                  className="rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#3e3e3e] outline-primary dark:border-slate-600  dark:bg-slate-800 dark:text-slate-200 dark:outline-none md:py-2"
                />
              </div>

              {/* Time Zone */}

              <div className="col-span-1">
                <div className="flex w-full flex-col">
                  <p className="rounded-sm bg-transparent py-0 text-xs font-medium text-slate-500 dark:text-slate-300 md:py-0">
                    Your Time Zone:
                  </p>
                  <select
                    id="timezoneDd"
                    value={appointmentDetails.timezone}
                    onChange={handleTimeZoneChange}
                    className="w-full rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#3e3e3e] outline-primary dark:border-slate-600  dark:bg-slate-800 dark:text-slate-200 dark:outline-none md:py-2"
                  >
                    {timeZones.map((zone, index) => (
                      <option key={index} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Slots */}
            <div className="col-span-2 mx-auto flex w-full flex-col gap-4 gap-x-8 gap-y-6 sm:grid-cols-2 md:col-span-1 md:max-w-[300px]">
              {/* Calender */}

              {/* Slots */}
              <div className="mx-auto mt-5 flex h-full w-full max-w-sm flex-col items-center justify-start gap-2 md:mt-0">
                {/* Appointment Date */}

                <div className="w-full rounded-sm p-0 text-black ">
                  <div className="relative mb-5 flex flex-col md:mb-0">
                    {dateSlots && dateSlots.first && (
                      <>
                        <label
                          htmlFor="appointmentDate"
                          className="rounded-sm bg-transparent py-0 text-xs font-medium text-slate-500 dark:text-slate-300"
                        >
                          Appointment Date{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative mb-10">
                          <input
                            type="date"
                            value={dateValue}
                            disabled={false}
                            onChange={(e) => {
                              const newValue = e.target.value;
                              setNoSlotIdentifier(true);
                              setTimeLoader(true);
                              setSlotIdentifier(true);
                              setAppointmentDetails({
                                ...appointmentDetails,
                                date: newValue,
                              });

                              setDateValue(e.target.value);

                              const timeInfo = fetchSlots(newValue);

                              timeInfo.then((data: any) => {
                                setAllSlots(data.value);
                                setAvailableSlot(data.bookedslots);
                                setTimeLoader(false);
                              });
                            }}
                            min={dateSlots.first}
                            max={dateSlots.second}
                            //   style={{ pointerEvents: "none" }}
                            className="absolute top-0 z-40  w-full rounded-sm border  bg-white px-4 py-3 text-sm font-medium text-[#3e3e3e] opacity-0  outline-primary dark:bg-slate-800 
                          dark:text-slate-200 dark:outline-none md:py-2"
                          />
                          <div
                            className="absolute top-0 -z-0 flex w-full justify-between rounded-sm bg-white px-4 py-3 text-sm border border-slate-200 dark:border-slate-600 font-medium text-[#3e3e3e] outline-primary dark:bg-slate-800
                         dark:text-slate-200 dark:outline-none md:py-2"
                          >
                            {" "}
                            <span className="h-full w-fit ">{dateValue}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              width={"16"}
                              height={"16"}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="absolute top-0 z-10 h-full w-[80%] bg-opacity-0"></div>
                  </div>
                </div>

                { dateValue && allSlots.length > 0 && 
                  (<div className=" flex w-fit flex-wrap items-center justify-center gap-2 rounded-sm bg-white p-4 text-black dark:text-slate-300 dark:bg-slate-800 md:mb-0 ">
                    <div className="flex items-center  justify-center gap-2 text-xs font-semibold">
                      <div className="h-2 w-2 rounded-full bg-slate-500"></div>{" "}
                      Booked
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>{" "}
                      Available
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>{" "}
                      Selected
                    </div>
                  </div>)
                }

                {dateValue === "yyyy-MM-dd" && (
                  <div className="🤚 mt-20">
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="🌴"></div>
                    <div className="👍"></div>
                  </div>
                )}

                <div
                  className={`flex w-full flex-col items-center justify-start   gap-4 pt-3 md:p-0 `}
                >
                  {timeLoader ? (
                    <div className="🤚 mt-14">
                      <div className="👉"></div>
                      <div className="👉"></div>
                      <div className="👉"></div>
                      <div className="👉"></div>
                      <div className="🌴"></div>
                      <div className="👍"></div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center justify-center gap-2 rounded-sm bg-white bg-opacity-70 py-4 dark:bg-slate-800  border-b border-slate-200 dark:border-slate-600">
                      {allSlots.map((time, index) => {
                        const isAvailable = availableSlot.includes(time);

                        return (
                          <div
                            key={index}
                            className="flex items-center justify-center gap-2"
                          >
                            {chips(time, isAvailable, index)}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {!calenderLoader ? (
                    !timeLoader ? (
                      <div
                        className={`${
                          noSlotIdentifier ? "" : "hidden"
                        } flex flex-wrap items-center justify-center gap-2`}
                      >
                        {allSlots.length === 0 ? (
                          <p className="flex-wrap rounded-sm bg-slate-100 p-2 text-xs font-semibold text-slate-500 dark:text-slate-300">
                            {" "}
                            No Available Slot
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="col-span-2 my-10 flex w-full justify-center md:fixed md:bottom-5 md:right-5 md:my-0 md:h-fit md:w-fit">
                <button
                  type="submit"
                  className="z-40 block w-full rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-[#bb8f22] "
                >
                  Book Appointment
                </button>
              </div>
            </div>
            {/* BOOKK APPOINTMENT BUTTON IN ABSOLUTE */}
          </form>
        </div>
      )}
    </div>
  );
}
