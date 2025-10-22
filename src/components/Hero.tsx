import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://gonouniversity.edu.bd/wp-content/uploads/2024/11/slider-img-5.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-primary">Gono Bishwabidyalay</span>{" "}
          <br />
          <span className="text-foreground">Robotics</span>{" "}

          <span className="text-foreground">Club</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
          We are a group of students committed to creating cutting-edge robots. 
          Our group of engineers and manufacturers turns concepts into functional devices. 
          Through experiential learning, we push the boundaries of autonomous systems and battle robots.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8"
            >
              Explore Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
