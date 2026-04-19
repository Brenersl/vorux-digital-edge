import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Projects } from "@/components/Projects";
import { Differential } from "@/components/Differential";
import { Services } from "@/components/Services";
import { Offer } from "@/components/Offer";
import { Process } from "@/components/Process";
import { Rhythm } from "@/components/Rhythm";
import { WowMoment } from "@/components/WowMoment";
import { FinalCTA } from "@/components/FinalCTA";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

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
      <Offer />
      <Process />
      <Rhythm />
      <FinalCTA />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
