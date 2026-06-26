import EcoTips from "./components/EcoTips";
import EnvironmentSection from "./components/EnvironmentSection";
import Hero from "./components/Hero";
import NatureStory from "./components/NatureStory";
import Projects from "./components/Projects";
import SaveTheWorldSection from "./components/SaveTheWorldSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <NatureStory />
      <EnvironmentSection/>
      <EcoTips />
      <Projects />
      <SaveTheWorldSection  />
    </main>
  );
}
