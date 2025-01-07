import Image from "next/image";
import ContactForm from "src/components/molecule/contact";
import Hero from "src/components/molecule/hero";
import AboutMe from "src/components/organism/about";
import WorkHistory from "src/components/organism/employment";
import Projects from "./projects/page";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <WorkHistory />
      <Projects />
      <ContactForm />
    </main>
  );
}
