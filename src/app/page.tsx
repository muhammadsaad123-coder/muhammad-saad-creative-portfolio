import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import About from "@/components/About";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectGallery />
      <About />
      <Process />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
