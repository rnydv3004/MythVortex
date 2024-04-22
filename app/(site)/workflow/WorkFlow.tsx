"use client";
import React from "react";
import SidebarLink from "@/components/Docs/SidebarLink";
import { useState } from "react";

const workFlow = [
  {
    title: "Overview",
    description:
      "Initiate your web application or website journey with a personalized free Consultation Call, where we'll discuss your needs and goals. Following this, receive a detailed proposal outlining the timeline and costs tailored to your requirements. Upon agreement, proceed with payment and receive a clear invoice for your records. Our dedicated Development Period ensures your vision is meticulously brought to life, with thorough testing and debugging to guarantee functionality and security. Once completed, your web application is launched, backed by a 7-Day Free Support Period for any immediate assistance. Additionally, take advantage of our discounted 60-Day Change Period for further customization (as per t&c). Our transparent and professional approach ensures a seamless experience from start to finish, delivering a tailored web application/website perfectly suited to your needs.",
  },
  {
    title: "Consultation Call",
    description:
      "In the beginning stages, clients can set up a Free Consultation Call to chat about what they want for their website or application. This call is like a friendly talk where clients can share their ideas and needs for their web development. Our team, who knows a lot about building websites and apps, will be there to listen and understand each project. This open and clear conversation helps us all get on the same page and sets the groundwork for a successful collaboration. This first chat is a chance for clients to learn about how we work, and for us to figure out how we can best help them achieve their goals.",
  },
  {
    title: "Choose Plan",
    description:
      'Select your plan from the available options to get started. Pick the package that suits your needs and goals. Make your choice based on the features and benefits that align with your preferences. This step allows you to tailor your experience and ensures you receive the services that best fit your requirements. Whether it\'s a basic plan or a more comprehensive package, the "Choose Plan" option empowers you to take control and move forward with the solution that meets your specific needs. This simple yet crucial decision-making process sets the stage for a customized and effective experience tailored to your preferences.',
  },
  {
    title: "Pay the Fees",
    description:
      "Upon choosing to proceed, clients are required to make the necessary payment to initiate the development process. This financial commitment is a pivotal step, signaling the formal commencement of our collaborative journey. By completing the payment, clients not only demonstrate their dedication to moving forward but also enable our dedicated team to allocate resources and expertise towards the seamless development of their project. This transaction marks a critical transition from decision-making to active engagement, propelling the project forward and ensuring a smooth progression towards the realization of their web development goals.",
  },
  {
    title: "Choose Templates",
    description:
      "Upon payment confirmation, clients are presented with two distinct development pathways. Option 1 empowers clients to choose a preferred template or site, allowing our skilled development team to replicate it. Alternatively, Option 2 invites clients to provide input through a form, enabling the development team to offer tailored template options, initiating the site-building process based on the client's unique preferences.",
  },
  {
    title: "Development Period",
    description:
      "With the chosen template or design in place, the actual development phase kicks off. Our dedicated team begins translating concepts into a tangible, functional website, ensuring a seamless and efficient process toward bringing the client's vision to life.",
  },
  {
    title: "Debugging Period",
    description:
      "Following the initial development, a critical debugging phase commences. This stage is dedicated to meticulously identifying and rectifying any issues or bugs that may have arisen during the development process. This thorough quality assurance ensures a polished and error-free final product.",
  },
  {
    title: "Final Deployment",
    description:
      "Upon successful development and debugging, the completed website is deployed to the online sphere. This marks the official launch, making the website accessible to the intended audience and bringing the client's digital presence to life.",
  },
  {
    title: "Support Period",
    description:
      "Clients enjoy a 7-day FREE complimentary support period post-deployment. This window allows clients to seek assistance and guidance in addressing any issues that may arise, providing a safety net as they navigate the early stages of their newly launched website.",
  },
  {
    title: "Change Period Starts",
    description:
      "Adding an extra layer of flexibility, clients benefit from a 60-day change period during which they can request modifications at a discounted rate. This post-deployment phase ensures that clients have the opportunity to refine and adjust their website to evolving needs, maintaining a dynamic and responsive digital presence.",
  },
];

export default function WorkFlow() {
  const [workFlowPage, setWorkFlowPage] = useState(0);

  return (
    <section className="mx-auto min-h-screen max-w-c-1235 bg-slate-50 pb-16 pt-24 dark:bg-transparent md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          <div className="w-full px-4 lg:w-1/4">
            <div className="sticky top-[74px] rounded-sm border bg-white p-4 shadow-md transition-all dark:border-slate-700 dark:bg-blacksection">
              <ul className="space-y-2 font-medium ">
                <SidebarLink changePage={setWorkFlowPage} page={workFlowPage} />
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:w-3/4 ">
            <div id={workFlow[workFlowPage].title} className="w-full px-4">
              <div className="dark:bg-gray-dark rounded-sm border bg-white px-6 py-5 shadow-md dark:border-slate-700 dark:bg-blacksection sm:p-[55px] lg:mb-5 lg:px-8 lg:py-11 lg:pt-10 xl:p-[45px] xl:py-10 min-h-[60vh]">
                <div className="mb-5 hidden justify-between md:flex">
                  <button
                    disabled={workFlowPage === 0}
                    onClick={() => {
                      setWorkFlowPage(workFlowPage - 1);
                    }}
                    className={`${workFlowPage === 0 ? "bg-slate-400 text-white dark:bg-slate-700" : "bg-primary text-white"} min-w-[100px] rounded-sm px-4 py-2 text-xs `}
                  >
                    Previous
                  </button>
                  <button
                    disabled={workFlowPage === 9}
                    onClick={() => {
                      setWorkFlowPage(workFlowPage + 1);
                    }}
                    className={`${workFlowPage === 9 ? "bg-slate-400 text-white dark:bg-slate-700" : "bg-primary text-white"} min-w-[100px] rounded-sm px-4 py-2 text-xs `}
                  >
                    Next
                  </button>
                </div>

                <h1 className="mb-4 text-xl font-semibold text-slate-600 dark:text-slate-300 lg:text-4xl">
                  {workFlow[workFlowPage].title}
                </h1>

                <p className="text-justify text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 lg:text-base lg:font-medium lg:leading-7">
                  {workFlow[workFlowPage].description}
                </p>
              </div>
            </div>

            <div className="mx-4 flex justify-between md:hidden mt-5">
              <button
                disabled={workFlowPage === 0}
                onClick={() => {
                  setWorkFlowPage(workFlowPage - 1);
                }}
                className={`${workFlowPage === 0 ? "bg-slate-400 text-white dark:bg-slate-700" : "bg-primary text-white"} min-w-[100px] rounded-sm px-4 py-2 text-xs `}
              >
                Previous
              </button>
              <button
                disabled={workFlowPage === 9}
                onClick={() => {
                  setWorkFlowPage(workFlowPage + 1);
                }}
                className={`${workFlowPage === 9 ? "bg-slate-400 text-white dark:bg-slate-700" : "bg-primary text-white"} min-w-[100px] rounded-sm px-4 py-2 text-xs `}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
