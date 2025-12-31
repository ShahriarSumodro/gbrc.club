import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Flame, Plane, Zap, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProjectsPage = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const projects = [
    {
      icon: Wrench,
      title: "Digital communication training kit",
      description: "Digital communication involves signal processing (like sampling and quantization via PCM), modulation/demodulation (e.g., Delta Modulation or ADM) for transmission, and system integration to ensure all parts work together effectively.",
      images: [
        "https://i.ibb.co.com/Y7Hqwjvz/20251027-151413.jpg"
      ],
    },
    {
      icon: Flame,
      title: "Human Following Robot",
      description: "This project involves an autonomous robot designed to help people with their work by following them. It uses ultrasonic and IR sensors for distance measurement and collision avoidance, with a microprocessor and controller handling all processing and motor control.",
      images: [
        "https://i.ibb.co.com/r2zkhckM/20251027-153018-1.jpg"
      ],
    },
    {
      icon: Plane,
      title: "Smart Parking System",
      description: "This automated system is a solution to parking problems, including congestion and theft, in urban areas. It utilizes infra-red (IR) sensors at the entry and exit points of a parking lot to automatically track vehicle movement. The core function is to count the cars and display the number of available parking spaces on an LCD screen, managed by an Arduino Nano microcontroller.",
      images: [
        "https://i.ibb.co.com/hJDn7NS2/20251027-151057.jpg"
      ],
    },
    {
      icon: Zap,
      title: "DC to DC setup boost voltage regulator",
      description: "This report focuses on designing a boost regulator to increase DC voltage, aiming to assist engineers in boosting DC voltage from 18 Volts to 76 Volts. The research documents the modification of a switching converter, including calculations and tests, with simulation results showing it can potentially boost the voltage up to 170 Volts.",
      images: [
        "https://i.ibb.co.com/rGmThtXG/20251027-151128.jpg"
      ],
    },
    {
      icon: Zap,
      title: "Distance locator for an underground cable fault",
      description: "This project presents a DISTANCE LOCATOR FOR AN UNDERGROUND CABLE FAULT, which aims to detect the precise location of a fault in underground cables from a base station. The prototype uses Ohm's law and measures the voltage across a series wire change to determine the fault distance, which is then displayed on a 16×2 LCD interfaced with an Arduino microcontroller.",
      images: [
        "https://i.ibb.co.com/m5F1Ncxr/20251027-152717.jpg"
      ],
    },
    {
      icon: Zap,
      title: "Thermoelectric Refrigerator",
      description: "This project describes a low-cost, lightweight thermoelectric refrigerator that uses no harmful CFCs. It operates on AC or DC power, making it an environmentally friendly solution ideal for remote or low-income communities.",
      images: [
        "https://i.ibb.co.com/bZBgqHj/20251027-1528461.jpg"
      ],
    },
    {
      icon: Zap,
      title: "Smart blind stick for visually impaired",
      description: "This project proposes an advanced blind stick to improve navigation for visually disabled people. It is integrated with an ultrasonic sensor, along with light and water sensing, to detect obstacles ahead using ultrasonic waves. If an obstacle is detected as being too close, the Atmega328 microcontroller processes the data and triggers a buzzer to alert the user.",
      images: [
        "https://i.ibb.co.com/23dMJdsV/20251027-152105.jpg"
      ],
    },
    {
      icon: Zap,
      title: "Upto 370V DC from AC",
      description: "This project investigates converting Alternating Current (AC) to High Voltage Direct Current (HVDC), up to 370 volts, using a multiplier circuit. It successfully generates HVDC but identifies the need for further optimization in circuit design and component selection to improve stability and efficiency.",
      images: [
        "https://i.ibb.co.com/PG5N6z7v/20251027-152800.jpg"
      ],
    }
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navigateImage = (itemIndex: number, direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    const item = projects[itemIndex];
    const currentIndex = currentImageIndex[itemIndex] || 0;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % item.images.length;
    } else {
      newIndex = currentIndex === 0 ? item.images.length - 1 : currentIndex - 1;
    }
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemIndex]: newIndex
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <a href="/" className="inline-block mb-8">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </a>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Explore the innovative robotics projects we're working on. Each project represents our commitment to pushing the boundaries of what's possible in robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const currentIndex = currentImageIndex[index] || 0;
              const hasMultipleImages = project.images.length > 1;
              
              return (
                <div 
                  key={index} 
                  className="h-[400px]"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    {/* Front Side - Image with Carousel */}
                    <Card 
                      className="absolute w-full h-full border-border bg-card hover:border-primary transition-colors duration-300 overflow-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={project.images[currentIndex]}
                          alt={`${project.title} - Image ${currentIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                        
                        {/* Compact Title at top */}
                        <div className="absolute top-3 left-3 right-3 bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/50">
                          <h3 className="text-sm font-semibold text-primary truncate">{project.title}</h3>
                        </div>

                        {/* Navigation arrows - only show if multiple images */}
                        {hasMultipleImages && (
                          <>
                            <button
                              onClick={(e) => navigateImage(index, 'prev', e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary p-2 rounded-full transition-colors z-10"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={(e) => navigateImage(index, 'next', e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary p-2 rounded-full transition-colors z-10"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </>
                        )}

                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {project.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full border border-foreground transition-all ${
                                imgIndex === currentIndex ? 'bg-foreground' : 'bg-transparent'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </Card>

                    {/* Back Side - Description */}
                    <Card 
                      className="absolute w-full h-full bg-card border-primary overflow-hidden flex flex-col"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="p-6 overflow-y-auto flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                          {project.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-left text-sm">
                          {project.description}
                        </p>
                      </div>
                      <div className="p-4 text-center text-muted-foreground text-xs border-t border-border/50">
                        Tap to flip back
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default ProjectsPage;
