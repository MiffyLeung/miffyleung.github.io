import { Hero } from "../components/Hero";
import { ProjectGallery } from "../components/ProjectGallery";
import { BehindTheWork } from "../components/BehindTheWork";
export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ProjectGallery />
      <BehindTheWork />
    </main>
  );
}
