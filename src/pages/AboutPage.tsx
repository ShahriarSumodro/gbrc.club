import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            About Us
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6">
            <p className="text-xl">
              We are a passionate community of engineers, designers, and innovators dedicated to advancing the field of robotics through hands-on projects and collaborative learning.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-12 mb-4">Our Mission</h2>
            <p>
              To provide students with practical robotics experience through challenging projects, competitions, and real-world applications. We believe in learning by doing and pushing the boundaries of what's possible.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-12 mb-4">Our History</h2>
            <p>
              Founded over a decade ago, our team has grown from a small group of enthusiasts to one of the leading robotics organizations. We've competed nationally and internationally, earning recognition for our innovative designs and technical excellence.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-12 mb-4">What We Do</h2>
            <p>
              From combat robots to autonomous systems, we work on diverse projects that challenge our skills and expand our knowledge. Our members gain hands-on experience in mechanical design, electronics, programming, and project management.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-12 mb-4">Join Us</h2>
            <p>
              Whether you're a beginner or have years of experience, there's a place for you on our team. We welcome students from all backgrounds and skill levels who share our passion for robotics and innovation.
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default AboutPage;
