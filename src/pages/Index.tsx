import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Projects />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
