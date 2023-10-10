import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Qualification from "./Components/Qualification";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { motion, useScroll } from "framer-motion";

import { rainbowCursor } from "cursor-effects";
new rainbowCursor({
  length: 10,
  colors: ["#FF0084", "#FF68D1","#F2A4FF", "#E1D8FF"],
  // colors: ["#00DED1", "#00B5CE","#008ABC", "#005F9B", "#2D366E"],
  // colors: ["#00E6E1", "#FFFADE","#D565D4"],
  size: 5,
  zIndex: 1000,
});

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
