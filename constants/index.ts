import { SidebarLink } from "@/types";

export const themes = [
    { value: "light", label: "Light", icon: "/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/icons/moon.svg" },
    { value: "system", label: "System", icon: "/icons/computer.svg" },
  ];

  export const sidebarLinks: SidebarLink[] = [
    {
      imgURL: "/icons/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/icons/users.svg",
      route: "/about",
      label: "About",
    },
    {
      imgURL: "/icons/star.svg",
      route: "/project",
      label: "Projects",
    },
    {
      imgURL: "/icons/suitcase.svg",
      route: "/blog",
      label: "Blogs",
    },
    {
      imgURL: "/icons/user.svg",
      route: "/contact",
      label: "Contact",
    },
     
  ];