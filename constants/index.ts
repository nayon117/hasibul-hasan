
import {
  car,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,

  nodejs,
  pricewise,
  react,
  typescript,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  mui,
  
} from "../public/icons";

import appwrite from '../public/icons/appwrite.png'
import shadcn from '../public/icons/shadcn.png'
import { SidebarLink } from "@/types";

export const themes = [
    { value: "light", label: "Light", icon: "/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/icons/moon.svg" },
    { value: "system", label: "System", icon: "/icons/computer.svg" },
  ];


  export const skills = [
    {
      imageUrl: html,
      name: "HTML",
      type: "Frontend",
    },
    {
      imageUrl: css,
      name: "CSS",
      type: "Frontend",
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
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
      type: "Frontend",
    },
    {
      imageUrl: javascript,
      name: "JavaScript",
      type: "Frontend",
    },
    {
      imageUrl: react,
      name: "React",
      type: "Frontend",
    },
    {
      imageUrl: nodejs,
      name: "Node.js",
      type: "Backend",
    },
    {
      imageUrl: express,
      name: "Express",
      type: "Backend",
    },
    {
      imageUrl: mongodb,
      name: "MongoDB",
      type: "Database",
    },
    {
      imageUrl: mui,
      name: "MUI",
      type: "Frontend",
    },
    {
      imageUrl: nextjs,
      name: "Next JS",
      type: "Frontend",
    },
    {
      imageUrl: typescript,
      name: "Typescript",
      type: "Frontend",
    },
    {
      imageUrl: shadcn,
      name: "Shadcn",
      type: "UI",
    },
    {
      imageUrl: appwrite,
      name: "Appwrite",
      type: "Backend",
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


export const blogsArray = [
  {   
      id:"1",
      image: "https://i.ibb.co/qBBwQt8/images.jpg",
      title: "Mongoose",
      description: "Unveiling the Magic of Mongoose: A Beginner’s Guide to Database Management",
      link: "https://medium.com/@hasibul.nayon1/unveiling-the-magic-of-mongoose-a-beginners-guide-to-database-management-8a958ec5822a"
  },
  {
      id:"2",
      image: "https://i.ibb.co/6WQDHwc/javascript-interview-questions.jpg",
      title: "JS Interview Questions",
      description: "JS Interview Questions and Answers for Beginners and Experienced Developers",
      link: "https://www.linkedin.com/posts/hasibulhasannayon_js-question-activity-7190617170299555840-Giau?utm_source=share&utm_medium=member_desktop"
  },
  {
      id:"3",
      image: "https://i.ibb.co/PFdLxMt/1714012124780.jpg",
      title: "Next/Image",
      description: "Next.js Performance Optimization Techniques for Better SEO and UX",
      link: "https://www.linkedin.com/posts/hasibulhasannayon_topic-boosting-performance-with-nextjs-activity-7189087917942673411-HaRC?utm_source=share&utm_medium=member_desktop"
  }
];
