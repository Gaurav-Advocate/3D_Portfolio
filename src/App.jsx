import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Mouse } from "./components/canvas";

/**
 *
 * @returns
 * Todo~ Learn Responsiveness
 * Todo~ Folder structure (Proper die section )
 * Todo~ React Library ( Main CSS )
 * Todo~ CSS Framework (chose 1 and arrangement of design system )
 *
 */

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseModes, setMouseModes] = useState("default");

  const cusoreMove = {
    default: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
    text: {
      width: 160,
      height: 160,
      x: mousePosition.x - 80,
      y: mousePosition.y - 80,
    },
  };

  

  // useEffect(() => {

  //   function mouseEffect(e) {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   }

  //   addEventListener("mousemove", mouseEffect);

  //   return () => {
  //     removeEventListener("mousemove", mouseEffect);
  //   };
  // }, []);

  // const textInhance = () => setMouseModes("text");
  // const textNormal = () => setMouseModes("default");

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="flex bg-hero-pattern bg-cover bg-center bg-no-repeat pointer-events-none">
          <Navbar />
          <Mouse
            cursoreMove={cusoreMove}
            mouseModes={mouseModes}
          />
          
          <Hero 
          // textInhance={textInhance} textNormal={textNormal}
           />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

export default App;
