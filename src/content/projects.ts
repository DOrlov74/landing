import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/Project4.png";
import reactIcon from "../assets/react_icon.svg";
import typescriptIcon from "../assets/typescript.svg";
import materialUIIcon from "../assets/materialui.svg";
import firebaseIcon from "../assets/firebase_.svg";
import telegramIcon from "../assets/telegram.svg";
import javascriptIcon from "../assets/javascript.svg";
import csharpIcon from "../assets/c-sharp.svg";
import dotNetIcon from "../assets/dot_net_icon.svg";
import cssIcon from "../assets/css3.svg";
import jqueryIcon from "../assets/jquery.svg";
import umbracoIcon from "../assets/umbraco.svg";
import d3Icon from "../assets/d3.svg";
import { Project } from "../models/project";

export const images = {
  project1: project1,
  project2: project2,
  project3: project3,
  project4: project4,
};

export const icons = {
  reactIcon: reactIcon,
  typescriptIcon: typescriptIcon,
  materialUIIcon: materialUIIcon,
  firebaseIcon: firebaseIcon,
  telegramIcon: telegramIcon,
  javascriptIcon: javascriptIcon,
  csharpIcon: csharpIcon,
  dotNetIcon: dotNetIcon,
  cssIcon: cssIcon,
  jqueryIcon: jqueryIcon,
};

export const projects: Project[] = [
  {
    name: "project1",
    img: project1,
    href: "https://magia-5bd20.web.app/",
    description: [
      "Project was developed as a massage service booking system.",
      "It has user registration and bookings storing features powered by Firebase.",
      "Employee with admin privilegies may add available hours,",
      "users may book services and send messages through Telegram API.",
      "Logo, main design, architecture and functionality were developed from scratch.",
      "Technologies used in this project: React, Typescript, Material UI, Firebase.",
    ],
    icons: [
      { name: "React icon", href: reactIcon },
      { name: "Typescript icon", href: typescriptIcon },
      { name: "MaterialUI icon", href: materialUIIcon },
      { name: "Firebase icon", href: firebaseIcon },
      { name: "Yelegram icon", href: telegramIcon },
    ],
  },
  {
    name: "project2",
    img: project2,
    href: "",
    description: [
      "Admin panel with REST API requests of ASP.NET MVC project",
      "the UI was developed corresponding to the company style.",
      "User token is requested before any subsequent request to the remote service.",
      "Admin user can enter a terminal number and change corresponding parameters.",
      "Changed parameters status is displayed in the table.",
      "Technologies used in this project: Javascript, jQuery, ASP.NET MVC.",
    ],
    icons: [
      { name: "Javascript icon", href: javascriptIcon },
      { name: "C# icon", href: csharpIcon },
      { name: ".NET icon", href: dotNetIcon },
      { name: "CSS icon", href: cssIcon },
      { name: "JQuery icon", href: jqueryIcon },
    ],
  },
  {
    name: "project3",
    img: project3,
    href: "",
    description: [
      "Authorization system of ASP.NET MVC project made with Umbraco CMS,",
      "the project was developed with custom controllers",
      "and SOAP API requests to the remote backend server.",
      "On submit the page calls the remote WCF function.",
      "Technologies used in this project: Umbraco CMS, C#, ASP.NET MVC, WCF.",
    ],
    icons: [
      { name: "Umbraco icon", href: umbracoIcon },
      { name: "C# icon", href: csharpIcon },
      { name: ".NET icon", href: dotNetIcon },
    ],
  },
  {
    name: "project4",
    img: project4,
    href: "",
    description: [
      "Market trading backtesting system",
      "made as ASP.NET WebAPI project with frontend part in React,",
      "the project has user registration powered by Identity Server,",
      "market data is retrieved from the trading platform API, and stored in csv file.",
      "On user's request the system anlyses the data",
      "and displays the results according to the selected strategy.",
      "Technologies used in this project: React, C#, ASP.NET API, D3.js.",
    ],
    icons: [
      { name: "React icon", href: reactIcon },
      { name: "Typescript icon", href: typescriptIcon },
      { name: "MaterialUI icon", href: materialUIIcon },
      { name: "D3 icon", href: d3Icon },
      { name: "C# icon", href: csharpIcon },
      { name: ".NET icon", href: dotNetIcon },
    ],
  },
];
