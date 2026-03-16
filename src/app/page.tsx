import { SlideProvider } from "@/context/SlideContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SlideDeck from "@/components/SlideDeck";
import HeroSlide from "@/components/slides/HeroSlide";
import AboutSlide from "@/components/slides/AboutSlide";
import SkillsSlide from "@/components/slides/SkillsSlide";
import ProjectsSlide from "@/components/slides/ProjectsSlide";
import ContactSlide from "@/components/slides/ContactSlide";

const TOTAL_SLIDES = 5;

export default function Home() {
  return (
    <SlideProvider total={TOTAL_SLIDES}>
      <SiteHeader />
      <main className="min-h-screen">
        <SlideDeck>
          <HeroSlide />
          <AboutSlide />
          <SkillsSlide />
          <ProjectsSlide />
          <ContactSlide />
        </SlideDeck>
      </main>
      <SiteFooter />
    </SlideProvider>
  );
}
