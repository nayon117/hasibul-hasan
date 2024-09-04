import { Blog } from "@/components/shared/Blog";
import Certificate from "@/components/shared/Certificate";
import ContactForm from "@/components/shared/ContactForm";
import { Education } from "@/components/shared/Education";
import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/constants";

const HomePage = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <Projects />
        <Certificate />
        <Education />
        <Blog />
        <ContactForm />
      </div>
    </section>
  );
};

export default HomePage;
