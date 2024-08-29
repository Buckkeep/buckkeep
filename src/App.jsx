import Intro from "./components/Intro";
import NavSection from "./components/NavSection";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <NavSection />
      <main>
        <Intro />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
