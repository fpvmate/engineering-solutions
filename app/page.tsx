import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Industries from "../components/Industries";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Services />
      <Projects />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
}