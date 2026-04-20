import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Projects } from "@/components/Projects";
import { Differential } from "@/components/Differential";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Rhythm } from "@/components/Rhythm";
import { WowMoment } from "@/components/WowMoment";
import { FinalCTA } from "@/components/FinalCTA";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";

const Index = () => {
  return (
    <main className="relative overflow-x-clip">
      <Nav />
      <Hero />
      <Impact />
      <Projects />
      <WowMoment />
      <Differential />
      <Services />
      <Process />
      <Rhythm />
      <FinalCTA />
      <About />
      <Footer />
      <FloatingChat />
    </main>
  );
};

export default Index;
