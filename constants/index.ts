

import {
  car,
  // contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  // linkedin,
  mongodb,
  
  nodejs,
  pricewise,
  react,
   
  snapgram,
  summiz,
  tailwindcss,
  threads,
  
} from "../public/icons";
import { SidebarLink } from "@/types";

export const themes = [
    { value: "light", label: "Light", icon: "/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/icons/moon.svg" },
    { value: "system", label: "System", icon: "/icons/computer.svg" },
  ];


  export const skills = [
    {
      imageUrl: css,
      name: "CSS",
      type: "Frontend",
    },
    {
      imageUrl: express,
      name: "Express",
      type: "Backend",
    },
    {
      imageUrl: git,
      name: "Git",
      type: "Version Control",
    },
    {
      imageUrl: github,
      name: "GitHub",
      type: "Version Control",
    },
    {
      imageUrl: html,
      name: "HTML",
      type: "Frontend",
    },
    {
      imageUrl: javascript,
      name: "JavaScript",
      type: "Frontend",
    },
    {
      imageUrl: mongodb,
      name: "MongoDB",
      type: "Database",
    },
    {
      imageUrl: nodejs,
      name: "Node.js",
      type: "Backend",
    },
    {
      imageUrl: react,
      name: "React",
      type: "Frontend",
    },
    
    {
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
      type: "Frontend",
    },
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


  export const projects = [
    {
      iconUrl: pricewise,
      theme: "btn-back-red",
      name: "InnovatED",
      description:
        "InnovateED is an advanced e-learning platform designed to offer a seamless learning experience. With a blend of user-centric features and a rich interface, it caters to both students and teachers, providing a conducive environment for learning and teaching.",
       link: "https://innavated.web.app/",
    },
    {
      iconUrl: threads,
      theme: "btn-back-green",
      name: "Bistro Boss",
      description:
        'Developed a restaurant website using React, Tailwind CSS, Node.js, Express, and MongoDB. The platform provides a seamless experience for users to explore the restaurants menu, place orders, and discover special offers. Implemented secure payment features for online transactions.',
      link: "https://bistro-boss-c.web.app/",
    },
    {
      iconUrl: car,
      theme: "btn-back-blue",
      name: "Automotive Gearup",
      description:
        "Welcome to our automotive website, where you can explore a wide range of car brands, view car details, update car listings, and shop for your dream car.",
      link: "https://automotive-gearup.web.app/",
    },
    {
      iconUrl: snapgram,
      theme: "btn-back-pink",
      name: "FitZen",
      description:
        "FitZen is a dynamic Yoga and Fitness Retreats event management website, offering users the ability to discover, book, and review wellness retreats, all with a best user experience and secure authentication",
      link: "https://bespoke-tulumba-33a298.netlify.app/",
    },
    {
      iconUrl: estate,
      theme: "btn-back-black",
      name: "Food Unity",
      description:
        "Food Unity is a platform aimed at connecting individuals or organizations with surplus food to those in need. The project focuses on reducing food waste and addressing hunger by providing a user-friendly interface to share and request food items.",
      link: "https://food-unity-client.web.app/",
    },
    {
      iconUrl: summiz,
      theme: "btn-back-yellow",
      name: "Skillify",
      description:
        "Skillify is an advanced e-learning platform designed to offer a seamless learning experience. With a blend of user-centric features and a rich interface, it caters to both students and teachers, providing a conducive environment for learning and teaching.",
      link: "https://skillify-client.web.app/",
    },
  ];