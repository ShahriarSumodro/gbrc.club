import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-card transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Get Involved
          </h2>
          <p className="text-xl text-foreground/90 mb-12 leading-relaxed">
            Whether you're a beginner or experienced engineer, there's a place for you in our team.
            Join us to build the future of robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">gbroboticsclub2025@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+880 1602-156195</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">6th Floor, A Block, EEE, Robotics Club,<br/> 
              Nolam, P.O. Mirzanagar via Savar Cantonment, Ashulia, Savar, Dhaka-1344.</p>
            </div>
          </div>

          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-12"
            >
              Join Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
