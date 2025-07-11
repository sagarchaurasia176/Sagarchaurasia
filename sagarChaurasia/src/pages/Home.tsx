import { frame, motion } from "framer-motion";
import cursorHook from "../hooks/hideCursor";
// import ChevronRight from "lucide-react";
import {ChevronRight} from 'lucide-react'
import logos from '../logos.jpg';

import scrollHooks from "../hooks/scrollHooks";
export const Home = () => {
  const { hideCursor, setHideCursor } = cursorHook();
  const{scrollToSection} = scrollHooks()
  return (
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
  );
};

export default Home;
