import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/portfolio/NeuralBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education, Experience } from "@/components/portfolio/EducationExperience";
import { Certifications, Achievements } from "@/components/portfolio/Credentials";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/ContactFooter";
import {
  MouseGlow,
  ScrollProgress,
  ScrollToTop,
} from "@/components/portfolio/ScrollUtils";

const title = "Praveen Kumar Gopinath Manjula | AI Engineer Portfolio";
const description =
  "AI Master's student at BTU Germany specialising in machine learning, computer vision, IoT and cloud security. Explore projects, skills and experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Praveen Kumar Gopinath Manjula",
          jobTitle: "Artificial Intelligence Engineer",
          email: "praveenkumar111903@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
          alumniOf: "SRM University",
          sameAs: [
            "https://www.linkedin.com/in/praveenkumargopinathmanjula/",
            "https://github.com/GMP-19",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NeuralBackground />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
