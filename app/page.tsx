import HeroSection from "./components/pages/home/hero-section";
import KnownTechs from "./components/pages/home/know-techs";
import WorkExperience from "./components/pages/home/work-experience";
import SchoolHistory from "./components/pages/home/school";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <WorkExperience />
      <SchoolHistory />
    </>
  );
}
