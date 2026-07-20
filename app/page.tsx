import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import ConstructionProcess from "../components/ConstructionProcess";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <ConstructionProcess />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}