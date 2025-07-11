import { useState, useEffect } from "react";
// file updated
import {
  Menu,
  X,
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
import Sagar from "./sk.jpg";
import {projects , otherProj , experiences , skills, certificates } from './data/AllWebsiteData'
import cursorHook from "./hooks/hideCursor";
import scrollHooks from "./hooks/scrollHooks";
import Home from './pages/Home';

// Portfolio's
export default function Portfolio() {
  const [result, setResult] = useState("");
  const{hideCursor , setHideCursor} = cursorHook();
  console.log(hideCursor);
  
  const{activeSection ,isMenuOpen , setIsMenuOpen ,scrollToSection} = scrollHooks();
  
const fadeInUps = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const certificateCard = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    } 
  }
};


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

  // scroll

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
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
        <Home/>
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
                href="https://drive.google.com/file/d/1oIah83fJx0PeTtXdjVTsEVbnUsRo9kcO/view?usp=sharing"
                download="sagarchaurasia.pdf"
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
      <br />
      <br />



  {/* certificate sections              */}
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUps}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certificates
            </h2>
          </motion.div>
          <p className="text-gray-300 max-w-lg mx-auto text-lg">
            Professional certifications that showcase my expertise and commitment to continuous learning in web development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={certificateCard}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Certificate image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.heading}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                
                {/* Certificate content */}
                <div className="p-6 relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-gray-100 mb-2 group-hover:text-indigo-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {cert.heading}
                  </motion.h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Certified Developer
                    </span>
                    
                    <motion.div
                      className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom decorative line */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
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
