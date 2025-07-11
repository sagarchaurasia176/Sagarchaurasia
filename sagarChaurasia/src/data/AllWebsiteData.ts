  // Sample projects data
  import type {Project , Projects , Skill , Experience,Certificates} from '../types/Project';
// Type definitions
import DrBuddy from "../chr.png";
import CodeAna from "../chr.png";
import Dboard from "../db.png";
import Tc from "../tc.png";
import detector from "../detector.png";
import learnify from "../learnify.png";
import certificate from "../Certificate.png";
import mern from '../mern.png';
import js from '../Screenshot 2025-07-11 232300.png';


  export const projects: Project[] = [
    {
      id: 1,
      title: "Dr-Buddy – DSA Revision Buddy (Chrome Extension)",
      description:
        "Dr-Buddy is a productivity-focused Chrome extension designed to help you track your DSA (Data Structures & Algorithms) progress. It reminds you at the right time with Chrome notifications, making it perfect for consistent daily practice and preparing for coding interviews! 💻🔔",
      tags: [
        "React",
        "TypeScript",
        "Firebase",
        "Chrome Extension APIs",
        "Tailwind CSS",
        "Webpack",
      ],
      imageUrl: DrBuddy,
      LiveUrl: "https://drbuddy.dev-saga.in",
      githubUrl: "https://github.com/sagarchaurasia176/DRB_ChromeExtension",
    },
    {
      id: 2,
      title: "Code-Analyzer–(Chrome Extension)",
      description:"The (Code-Analyzer) Chrome Extension is designed to help developers optimize their algorithms by providing instant insights into time and space complexity. Whether you are browsing coding platforms, reviewing code snippets, or working on your own projects, this extension simplifies complexity analysis, allowing you to write more efficient and optimized code.",
      tags: ["Typescript","React","Tailwind CSS","Node.Js,","Express.js","MongoDB" , "Firebase" , "Docker" , "Cloudflare"],
      imageUrl: Dboard,
      LiveUrl: "https://canalyzer.dev-saga.in",
      githubUrl:
        "https://github.com/sagarchaurasia176/Code-Analyzer-chrome-extension",
    },
    {
      id: 3,
      title: "Dashcraft – Dashboard Template",
      description:
        "Dashcraft is a powerful dashboard template built with React and Tailwind CSS, designed to help developers quickly kickstart their projects with a modern and responsive UI. It includes various components, charts, and layouts to assist you in creating stunning web applications in no time.",
      tags: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
        "Firebase",
        "GSAP",
      ],
      imageUrl: CodeAna,
      LiveUrl: "https://dashcraft.manishlal.live",
      githubUrl: "https://github.com/sagarchaurasia176/DashboardUI",
    },
  ];

  // other project
  export const otherProj: Projects[] = [
    {
      id: 1,
      title: "Code-Analyzer|Frontend using Gemini AI",
      description:
        "A Time Complexity Analyzer is a tool or program that helps determine how efficiently an algorithm or piece of code runs.",
      tags: [
        "Html",
        "Css",
        "Js",
        "React",
        "Tailwind CSS",
        "Gemini AI",
        "Firebase",
      ],
      imageUrl: Tc,
      LiveUrl: "https://tcanalyzer.dev-saga.in",
      githubUrl: "https://github.com/sagarchaurasia176/TcAnalyzer",
    },
    {
      id: 2,
      title: "Github Profile Previewer",
      description:
        "Github Profile Previewer is a web application that allows users to view and analyze GitHub profiles. It provides insights into repositories, contributions, and other relevant information about GitHub users.",
      tags: ["Html", "Css", "Js", "Tailwind CSS"],
      imageUrl: detector,
      LiveUrl: "https://github-detectors.vercel.app",
      githubUrl: "https://github.com/sagarchaurasia176/GithubDetector",
    },

    {
      id: 3,
      title: "Learnify – Online Learning Platform (Pure Backend)",
      description:
        " Learnify is an online learning and teaching platform that offers a wide range of courses on various subjects, including technology, business, personal development, students can purchase and access these courses on-demand.",
      tags: ["Node.js", "Express.js", "MongoDB", "Cloudflare"],
      imageUrl: learnify,
      LiveUrl: "https://github.com/sagarchaurasia176/Learnify---Backend",
      githubUrl: "https://github.com/sagarchaurasia176/Learnify---Backend",
    },
  ];

  // Sample work experience
export  const experiences: Experience[] = [
    {
      id: 1,
      company: "A2IT - Tech Solutions",
      role: "Frontend Developer Intern",
      period: "July 2021 - Sep 2021",
      description:
        "In this internship, I learned HTML, CSS, JS, and PHP, and did several projects like e-commerce, travel, food website, and several UI to learn to make websites responsive.  ",
      techStack: ["Html", " Css", "Js", "PHP"],
      image: certificate,
    },
  ];

  // Skills data
 export const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "REST API Design",
        "Authentication",
        "Security",
        "firebase",
      ],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL (familiar)"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Nginx", "Cloudflare"],
    },
  ];
  //my certificates stuffs
  export const certificates:Certificates[]=[
  {
    heading:"Frontend Dev",
    image:certificate, 
  },
  {
    heading:"Mern Stack",
    image:mern,
  },
  {
    heading:"Advanced Js",
    image:js,
  },
]

  