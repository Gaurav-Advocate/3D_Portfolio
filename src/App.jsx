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

  return (
    <>
      <div className="relative z-0 bg-primary">
          <Navbar />            
        <div className="flex bg-hero-pattern bg-cover bg-center bg-no-repeat pointer-events-none">
          <Hero 
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
