import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhatWeDo = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-card transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">
          What we do
        </h2>
        
        <p className="max-w-4xl text-lg text-foreground/90 leading-relaxed">
          Our team gives students the opportunity to design, prototype, and compete with robots
          of all types. At a university with strong theoretical foundations, we believe hands-on
          experience is equally important in robotics education. We learn by building, testing,
          and iterating on real projects. Our workshop is where ideas transform from concepts
          to reality through collaborative engineering and creative problem-solving.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
