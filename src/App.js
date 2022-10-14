import Home from "./components/Home";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Service from "./components/Service";
import Review from "./components/Review";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <Header />
      <Home />
      <br></br>
      <Aboutus />
      <Service />
      <Project />
      <br></br>
      <Review />
      <Contact />
    </div>
  );
}

export default App;
