import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Target, Lightbulb, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Team = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to solve complex engineering challenges.",
      details: "Our team environment fosters collaboration across disciplines. Members work together on complex projects, sharing knowledge and skills to achieve common goals. We believe that the best solutions come from diverse perspectives working in harmony.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing boundaries with creative robotic solutions.",
      details: "We encourage innovative thinking and creative problem-solving. Our members are constantly exploring new technologies, experimenting with novel approaches, and pushing the boundaries of what's possible in robotics.",
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description: "Continuous skill development through hands-on projects.",
      details: "Learning is at the core of everything we do. Through workshops, mentorship, and hands-on projects, members develop skills in mechanical design, electronics, programming, and project management that will serve them throughout their careers.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Striving for the highest standards in everything we build.",
      details: "We maintain high standards in all our work, from initial design to final execution. Our commitment to excellence has earned us recognition in competitions and respect in the robotics community.",
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
            Why Join Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a community that transforms passion into practical robotics expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className="border-border bg-card text-center hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl">{value.title}</DialogTitle>
                    <DialogDescription className="text-base pt-4">
                      {value.details}
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

export default Team;
