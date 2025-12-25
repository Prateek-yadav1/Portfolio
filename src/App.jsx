import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
