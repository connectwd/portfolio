import ContactForm from "src/components/molecule/contact";
import AboutMe from "src/components/organism/about";
import WorkHistory from "src/components/organism/employment";
import Projects from "src/components/organism/project";


export default function HomePage() {
  return (
    <main>
      <AboutMe />
      <WorkHistory />
      <Projects />
      <ContactForm />
    </main>
  );
}
