import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  // {
  //   id: 2,
  //   title: "Services",
  //   newTab: false,
  //   path: "/#services",
  // },

  {
    id: 5,
    title: "Blog",
    newTab: true,
    path: "/blog",
  },
  {
    id: 6,
    title: "Template",
    newTab: false,
    path: "/template",
  },
  {
    id: 7,
    title: "Software",
    newTab: false,
    path: "/software",
  },
  {
    id: 4,
    title: "Careers",
    newTab: false,
    path: "/careers",
  },
  {
    id: 8,
    title: "Workflow",
    newTab: false,
    path: "/workflow",
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
