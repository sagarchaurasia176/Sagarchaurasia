import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  User,
  Briefcase,
  Github,
  Linkedin,
  Code,
  Server,
  Database,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import logo from "../Code.png";
import logos from "../src/logos.jpg";
import Sagar from "./sk.png";
// Type definitions
import DrBuddy from "./chrs.png";
import CodeAna from "./chr.png";
import Dboard from "./db.png";
import Tc from "./tc.png";
import detector from "./detector.png";
import learnify from "./learnify.png";
import certificate from "./Certificate.png";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  LiveUrl: string;
  githubUrl?: string;
};

type Projects = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  LiveUrl: string;
  githubUrl?: string;
};

type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  techStack?: string[];
  image: string;
};

type Skill = {
  category: string;
  items: string[];
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY);
  const [result, setResult] = useState("");


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "581ba174-9e93-4c24-8f00-fbdcd49d944f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you so much for your message! I'll get back to you soon.");

      event.currentTarget.reset(); // safer than event.target
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample projects data
  const projects: Project[] = [
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
      tags: ["Html", "Css", "Js", "Tailwind CSS"],
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
  const otherProj: Projects[] = [
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
  const experiences: Experience[] = [
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
  const skills: Skill[] = [
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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideCursor(true);
    }, 2500); // Same as typing duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className=" bg-slate-950 text-gray-100 font-sans">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-slate-900/80 backdrop-blur-sm shadow-sm z-50 border-b border-slate-800"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* ;ogo */}
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2 inline-block" />
          </motion.a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["home", "projects", "skills", "experience", "contact"].map(
            (item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium ${
                  activeSection === item
                    ? "text-indigo-400"
                    : "text-gray-400 hover:text-indigo-300"
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            )
          )}
        </nav>
           {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 hover:text-indigo-300 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-900 shadow-lg border-b border-slate-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {["home", "projects", "skills", "experience", "contact"].map(
                (item) => (
                  <motion.button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false); // Close menu after selection
                    }}
                    className={`text-sm font-medium py-2 text-left ${
                      activeSection === item
                        ? "text-indigo-400"
                        : "text-gray-400"
                    } transition-colors`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

     {/* Hero Section */}
     <section
      id="home"
      className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-base md:text-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md font-semibold">
                Hello World! My name is
              </span>
              <br />
              <span className="text-gray-100 drop-shadow-lg font-sans">
                Sagar Chaurasia
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-6 leading-snug tracking-wide text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span
                className={`typing-effect block w-fit ${
                  hideCursor ? "cursor-hidden" : ""
                }`}
              >
                I love to explore & code!
              </span>
            </motion.p>

            <motion.div
              className="text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              An aspiring software engineer with the ability to grow as an
              individual and learn in the surrounding of talented people. I am
              always open for discussions. &nbsp;
              <a
                href="https://www.linkedin.com/in/sagarchaurasia74/"
                target="_blank"
                className="text-orange-200 underline font-bold"
              >
                @Linkedin
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center shadow-lg hover:shadow-indigo-500/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work <ChevronRight size={18} className="ml-2" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 py-3 px-8 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logos}
                  alt="Portfolio Owner"
                  className="w-full h-full object-cover opacity-90"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-slate-800 shadow-lg rounded-lg p-3 sm:p-4 w-28 sm:w-32 text-center border border-slate-700"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="font-bold text-indigo-400">Software</p>
                <p className="text-sm text-gray-400">Developer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


    {/* about section */}
                  

    <section
      id="about"
      className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 border-t border-slate-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        ></motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full h-64 sm:h-80 bg-slate-800 rounded-xl overflow-hidden shadow-lg border-4 border-indigo-500/30">
                <img
                  src={Sagar}
                  alt="Sagar Chaurasia"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-indigo-400 font-medium">Sagar Chaurasia</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-2/3 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-6">
              About me : <code>Passionate Developer & Problem Solver</code>
            </h3>

            <div className="gap-12 space-y-4 sm:space-y-6 text-gray-400">
              <p className="text-base sm:text-lg">
                Hello! Interestingly, I completed my diploma in 2023, and
                shortly after, I embarked on my B.Tech journey. It was during
                my diploma years that I discovered my passion for coding and
                entered the world of programming. Since then, I've been
                dedicated to learning various programming languages and
                solving complex problems related to data structures and
                algorithms. Above all, I consider myself a Problem Solver.
              </p>

              <p className="text-base sm:text-lg">
                Currently, I'm pursuing my Bachelors in Computer Science and
                Engineering (2023-2026) with an 8.49 GPA aggregate.
              </p>

              <p className="text-base sm:text-lg">
                During this journey, I've developed strong skills in Web
                Development, having built a full-stack project and created two
                Chrome extensions, each receiving a{" "}
                <b className="text-white bg-red-400 rounded-b-xl p-1">
                  4.5
                </b>{" "}
                rating on the Chrome Web Store.
              </p>

              <p className="text-base sm:text-lg mt-4">My project tech stack includes:</p>
              <div className="flex flex-wrap text-xs sm:text-sm mt-2 gap-2 sm:gap-3">
                <span className="bg-teal-500 text-white px-2 py-1 rounded-md">
                  HTML
                </span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-md">
                  CSS
                </span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-md">
                  JavaScript
                </span>
                <span className="bg-indigo-600 text-white px-2 py-1 rounded-md">
                  React.js
                </span>
                <span className="bg-green-600 text-white px-2 py-1 rounded-md">
                  Node.js
                </span>
                <span className="bg-orange-500 text-white px-2 py-1 rounded-md">
                  Express.js
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-md">
                  Docker
                </span>
                <span className="bg-orange-500 text-white px-2 py-1 rounded-md">
                  Cloudflare
                </span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
                  Animation Libraries
                </span>
              </div>
            </div>
            {/* GitHub Button */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/sagarchaurasia176?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  className="bg-indigo-600 w-full cursor-pointer hover:bg-indigo-500 text-white border border-indigo-500 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  View My GitHub
                </motion.button>
              </a>

              <a
                href="/resume.pdf"
                download="Sagar_Chaurasia_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  className="bg-green-600 w-full cursor-pointer hover:bg-green-500 text-white border border-green-500 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Download Resume
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>


        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-100">
            Crafted Solutions
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Each project represents a unique challenge solved with innovative
            thinking and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-indigo-500 transform hover:-translate-y-2"
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-700 text-indigo-300 px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.LiveUrl}
                    className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center transition-colors hover:translate-x-1"
                  >
                    Live
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-gray-300 font-medium flex items-center transition-colors hover:translate-x-1"
                    >
                      GitHub <Github size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


         
         {/* stop */}
          <div className="text-center mt-12">
            <p className=" text-indigo-400 text-3xl  py-3 px-8 rounded-lg   font-semibold transition-colors">
              Other Noteworthy All Projects <br />
            </p>
            <code>View Complete List of Projects/Codes</code>
          </div>
          <br />

          {/* nexet other project card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProj.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-indigo-500 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-700 text-indigo-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.LiveUrl}
                      target="_blank"
                      className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center transition-colors hover:translate-x-1"
                    >
                      Live
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-gray-400 hover:text-gray-300 font-medium flex items-center transition-colors hover:translate-x-1"
                      >
                        GitHub <Github size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-100">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              A blend of languages, frameworks, and tools that fuel my
              development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-slate-800 rounded-lg shadow-md p-6 border border-slate-700 hover:border-indigo-500/30 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  {categoryIndex === 0 && (
                    <Code className="text-indigo-400 mr-3" size={24} />
                  )}
                  {categoryIndex === 1 && (
                    <Server className="text-indigo-400 mr-3" size={24} />
                  )}
                  {categoryIndex === 2 && (
                    <Database className="text-indigo-400 mr-3" size={24} />
                  )}
                  {categoryIndex === 3 && (
                    <Terminal className="text-indigo-400 mr-3" size={24} />
                  )}
                  <h3 className="text-xl font-bold text-gray-100">
                    {skillCategory.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="text-gray-400 flex items-center hover:text-indigo-300 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + skillIndex * 0.05 }}
                    >
                      <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-slate-800 rounded-lg shadow-md overflow-hidden border border-slate-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                Development Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-lg font-bold text-indigo-400 mb-2">
                    Clean Architecture
                  </h4>
                  <p className="text-gray-400">
                    Building maintainable applications with clear separation of
                    concerns and testable components.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-lg font-bold text-indigo-400 mb-2">
                    Performance First
                  </h4>
                  <p className="text-gray-400">
                    Creating efficient applications with optimized loading
                    times, memory usage, and user interactions.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-lg font-bold text-indigo-400 mb-2">
                    User-Centric
                  </h4>
                  <p className="text-gray-400">
                    Developing with a focus on usability, accessibility, and
                    delivering exceptional user experiences.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-100">
              Internship & Experience
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              A journey through diverse roles, each contributing to my growth as
              a developer and problem solver.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col md:flex-row ${index !== experiences.length - 1 ? "mb-16" : ""
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <motion.h3
                    className="text-xl font-bold text-indigo-400"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {exp.company}
                  </motion.h3>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-medium mb-2 text-gray-200">
                    {exp.role}
                  </h4>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="text-xs bg-slate-800 text-indigo-300 px-3 py-1 rounded-full border border-slate-700"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}
                  {/* image */}
                  <div className=" ">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-32 object-cover rounded-lg mt-4"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-100">
              Let's Build Something Great
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Have a project in mind? I'd love to hear about it and explore how
              we can work together.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-slate-900 p-8 border-b md:border-b-0 md:border-r border-slate-700">
                <h3 className="text-xl font-bold mb-6 text-gray-100">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-indigo-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <User size={20} className="mr-3 text-indigo-400" />
                    <span>SagarChaurasia</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center text-gray-400 hover:text-indigo-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Briefcase size={20} className="mr-3 text-indigo-400" />
                    <span>Available for projects</span>
                  </motion.div>
                </div>
                <div className="mt-8">
                  <p className="mb-4 text-gray-400">Connect with me</p>
                  <div className="flex space-x-4">
                    <motion.button
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 text-gray-400 hover:text-indigo-300 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a href="https://www.linkedin.com/in/sagarchaurasia74" target="_blank">
                        <Linkedin size={18} />
                      </a>
                    </motion.button>

                    <motion.button
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 text-gray-400 hover:text-indigo-300 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a href="https://github.com/sagarchaurasia176" target="_blank">
                        <Github size={18} />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-bold text-gray-100 mb-6">
                  Send a Message
                </h3>
                {/* form with w3 combinations */}

                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-gray-400 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-200 placeholder-gray-500"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-200 placeholder-gray-500"
                        placeholder="Your email"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-400 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-200 placeholder-gray-500"
                      placeholder="Subject"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-200 placeholder-gray-500"
                      placeholder="Your message"
                    ></textarea>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.button
                      type="submit"
                      className=" cursor-pointer w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-indigo-500/20 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>

                    {/* ✅ Add this below the button */}
                    {result && (
                      <p className="text-green-400 text-center font-medium mt-2">
                        {result}
                      </p>
                    )}
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Sagar❤️Chaurasia
              </h3>
              <p className="max-w-md">
                A passionate developer with a knack for creating innovative
                solutions. Let's connect and build something amazing together!
              </p>
            </motion.div>
            <motion.div
              className="mt-8 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-medium mb-4 text-gray-300">
                Quick Links
              </h4>
              <div className="flex flex-col space-y-2">
                {[
                  "home",
                  "about",
                  "projects",
                  "skills",
                  "experience",
                  "contact",
                ].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left hover:text-indigo-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="mt-8 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-medium mb-4 text-gray-300">
                Connect
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/sagarchaurasia176"
                  target="_blank"
                  className="hover:text-indigo-300 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sagarchaurasia74"
                  target="_blank"
                  className="hover:text-indigo-300 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin size={20} />
                </motion.a>

              </div>
            </motion.div>
          </div>
          <motion.div
            className="border-t border-slate-800 mt-12 pt-8 text-center text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p>© {new Date().getFullYear()} DevCraft. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
