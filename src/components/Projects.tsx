import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Wrench, Flame, Plane, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      icon: Wrench,
      title: "Combat Robots",
      description: "Design and build competitive fighting robots for tournaments and competitions.",
      details: "Our combat robotics team designs and fabricates robots that compete in various weight classes. We focus on weapon systems, armor design, and strategic combat tactics to create competitive machines that can withstand intense battles.",
    },
    {
      icon: Flame,
      title: "Autonomous Systems",
      description: "Develop self-navigating robots with advanced sensors and AI algorithms.",
      details: "Working on cutting-edge autonomous navigation systems using computer vision, LIDAR, and machine learning to create robots that can navigate complex environments independently and make intelligent decisions in real-time.",
    },
    {
      icon: Plane,
      title: "Aerial Drones",
      description: "Create innovative drone systems for various applications and research.",
      details: "From racing drones to research platforms, we develop custom aerial systems for various applications including aerial photography, surveying, and autonomous delivery. Our drones feature custom flight controllers and advanced stabilization systems.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Build intelligent automation solutions for real-world problems.",
      details: "Developing IoT-enabled automation systems that solve real-world problems, from smart home solutions to industrial automation prototypes. We integrate sensors, actuators, and intelligent control systems to create efficient automated solutions.",
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Our Focus
          </h2>
          <p className="text-xl text-muted-foreground">
            Projects we're working on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className="border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-105"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <DialogDescription className="text-base pt-4">
                      {project.details}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
