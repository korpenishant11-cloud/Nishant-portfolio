import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer>
        <p>
          © 2026 YOUR NAME. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;