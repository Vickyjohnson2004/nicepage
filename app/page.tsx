import EcoTips from "./components/EcoTips";
import Hero from "./components/Hero";
import NatureSection from "./components/NatureSection";
import Projects from "./components/Projects";
import SaveTheWorldSection from "./components/SaveTheWorldSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <NatureSection />
      <EcoTips />
      <Projects />
      <SaveTheWorldSection  />
    </main>
  );
}
