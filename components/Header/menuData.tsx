import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 7,
    title: "Our Work",
    newTab: false,
    path: "/portfolio",
  },
  // {
  //   id: 3,
  //   title: "Track",
  //   newTab: false,
  //   path: "/track",
  // },
  {
    id: 5,
    title: "Blog",
    newTab: true,
    path: "/blog",
  },
  // {
  //   id: 6,
  //   title: "Template",
  //   newTab: false,
  //   path: "/template",
  // },
  
  {
    id: 4,
    title: "Careers",
    newTab: false,
    path: "/careers",
  },
  {
    id: 8,
    title: "Process",
    newTab: false,
    path: "/process",
  },
  {
    id: 9,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },
];

export default menuData;
