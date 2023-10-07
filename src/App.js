import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Qualification from "./Components/Qualification";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="appbg">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 10,
          background: "#67ff45",
          transformOrigin: "0%",
          zIndex: 50,
        }}
      ></motion.div>
      <About />
      <Navbar />
      <Skills />
      <Project />
      <Qualification />
      <Contact />
      <div className="h-[100px] lg:h-[400px]"></div>
    </div>
  );
}

export default App;
