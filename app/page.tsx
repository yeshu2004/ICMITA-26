import HeroCarousel from "@/components/Hero";
import About from "@/components/About";
import Line from "@/components/Line";
import ThematicAreas from "@/components/ThematicAreas";
import Speakers from "@/components/Speakers";


export default function Home() {
  return (
    <div className="h-full w-full">
      <HeroCarousel />
      <About/>
      <Line/>
      <ThematicAreas/>
      <Line/>
      <Speakers/>
    </div>
  );
}
