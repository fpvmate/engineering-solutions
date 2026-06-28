import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Services from "../components/Services";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Services />
      <Projects />
    </>
  );
}