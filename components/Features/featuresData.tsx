import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
        />
      </svg>
    ),
    title: "Websites",
    description:
      "Crafting visually stunning and functionally robust websites tailored to meet your business objectives.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    title: "Web Applications",
    description:
      "Building cutting-edge web applications with the latest technologies for seamless user experiences.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className=" fill-white"
      >
        <path d="M 9.6777344 1.515625 A 0.50005 0.50005 0 0 0 9.28125 2.3046875 L 10.759766 4.4414062 C 9.3401698 5.5292967 8.3458783 7.145415 8.0800781 9 L 21.919922 9 C 21.654122 7.145415 20.65983 5.5292967 19.240234 4.4414062 L 20.71875 2.3046875 A 0.50005 0.50005 0 0 0 20.306641 1.515625 A 0.50005 0.50005 0 0 0 19.896484 1.7363281 L 18.40625 3.8925781 C 17.398252 3.3277312 16.238794 3 15 3 C 13.761206 3 12.601748 3.3277312 11.59375 3.8925781 L 10.103516 1.7363281 A 0.50005 0.50005 0 0 0 9.6777344 1.515625 z M 12 5 C 12.552 5 13 5.448 13 6 C 13 6.552 12.552 7 12 7 C 11.448 7 11 6.552 11 6 C 11 5.448 11.448 5 12 5 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 5 11 C 4.448 11 4 11.448 4 12 L 4 20 C 4 20.552 4.448 21 5 21 C 5.552 21 6 20.552 6 20 L 6 12 C 6 11.448 5.552 11 5 11 z M 8 11 L 8 21 C 8 22.105 8.895 23 10 23 L 10 26.5 C 10 27.328 10.672 28 11.5 28 C 12.328 28 13 27.328 13 26.5 L 13 23 L 17 23 L 17 26.5 C 17 27.328 17.672 28 18.5 28 C 19.328 28 20 27.328 20 26.5 L 20 23 C 21.105 23 22 22.105 22 21 L 22 11 L 8 11 z M 25 11 C 24.448 11 24 11.448 24 12 L 24 20 C 24 20.552 24.448 21 25 21 C 25.552 21 26 20.552 26 20 L 26 12 C 26 11.448 25.552 11 25 11 z"></path>
      </svg>
    ),
    title: "Android Applications",
    description:
      "Developing feature-rich Android applications that stand out in the competitive mobile landscape.",
  },
  {
    id: 4,
    icon: <span className="font-inter text-sm font-bold">iOS</span>,
    title: "iOS Applications",
    description:
      "Crafting high-performance iOS applications that resonate with Apple's design standards.",
  },
  {
    id: 5,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
  </svg>
  ,
    title: "Custom Business Tool",
    description:
      "Develop and implement bespoke business strategies designed to optimize your operations, improve efficiency, and drive sustainable growth.",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
    title: "E-commerce Solutions",
    description:
      "Providing end-to-end e-commerce solutions for a seamless online shopping experience and business growth.",
  },
  // You can add more services as needed
];

export default featuresData;
