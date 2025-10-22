import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const GalleryPage = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const galleryItems = [
    {
      id: 1,
      title: "National Competition 2024",
      category: "Competition",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      details: "Our team secured first place at the National Robotics Championship with our innovative combat robot design. The competition featured 50+ teams from across the country.",
      date: "March 2024",
      location: "Tech Arena, Silicon Valley"
    },
    {
      id: 2,
      title: "Advanced Workshop Series",
      category: "Workshop",
      imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      details: "Intensive weekend workshop covering autonomous navigation systems, computer vision, and machine learning integration for robotics applications.",
      date: "February 2024",
      location: "Engineering Lab 3"
    },
    {
      id: 3,
      title: "Autonomous Drone Build",
      category: "Build",
      imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      details: "Complete build of our latest autonomous drone prototype featuring advanced stabilization and GPS navigation. Successful test flight achieved 30-minute flight time.",
      date: "January 2024",
      location: "Workshop Bay 2"
    },
    {
      id: 4,
      title: "Tech Expo Showcase",
      category: "Event",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      details: "Demonstrated our smart automation systems to over 1,000 visitors at the annual Tech Innovation Expo. Received outstanding feedback from industry professionals.",
      date: "April 2024",
      location: "Convention Center"
    },
    {
      id: 5,
      title: "Regional Battle Championship",
      category: "Competition",
      imageUrl: "https://images.unsplash.com/photo-1563191597-d23aa2f8da2f?w=800&h=600&fit=crop",
      details: "Our 30lb combat robot dominated the regional championship, winning all preliminary rounds and securing the championship title with an undefeated record.",
      date: "December 2023",
      location: "Battle Arena West"
    },
    {
      id: 6,
      title: "Beginner's Robotics Workshop",
      category: "Workshop",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      details: "Introduction to robotics workshop for new members covering basic electronics, mechanical design principles, and programming fundamentals.",
      date: "November 2023",
      location: "Student Center"
    },
    {
      id: 7,
      title: "Combat Robot V3 Assembly",
      category: "Build",
      imageUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=600&fit=crop",
      details: "Team collaboration on building our third-generation combat robot featuring improved weapon systems, reinforced armor, and enhanced mobility.",
      date: "October 2023",
      location: "Main Workshop"
    },
    {
      id: 8,
      title: "STEM Outreach Day",
      category: "Event",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      details: "Community outreach event where we introduced robotics to local high school students, inspiring the next generation of engineers and innovators.",
      date: "September 2023",
      location: "City High School"
    },
    {
      id: 9,
      title: "International RoboGames",
      category: "Competition",
      imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
      details: "Competed against teams from 15 countries at the prestigious International RoboGames. Earned bronze medal in the autonomous navigation category.",
      date: "August 2023",
      location: "Tokyo, Japan"
    },
    {
      id: 10,
      title: "Advanced Soldering Workshop",
      category: "Workshop",
      imageUrl: "https://images.unsplash.com/photo-1581092583537-20d51876f3ef?w=800&h=600&fit=crop",
      details: "Specialized workshop on advanced soldering techniques, PCB design, and circuit debugging for electronics enthusiasts and experienced members.",
      date: "July 2023",
      location: "Electronics Lab"
    },
    {
      id: 11,
      title: "Smart Home System Build",
      category: "Build",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
      details: "Completed our IoT-enabled smart home automation system project featuring voice control, motion sensors, and smartphone integration.",
      date: "June 2023",
      location: "Project Room 4"
    },
    {
      id: 12,
      title: "Alumni Reunion Showcase",
      category: "Event",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
      details: "Annual alumni reunion where past members shared their career journeys and current members showcased recent projects. Great networking and mentorship opportunities.",
      date: "May 2023",
      location: "Alumni Hall"
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Explore our journey through images. From intense competitions to late-night build sessions, these moments capture our passion for robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="h-[450px]"
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
                  {/* Front Side - Image */}
                  <Card
                    className="absolute w-full h-full border-border bg-card hover:border-primary transition-colors duration-300 overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                      
                      {/* Title at top */}
                      <div className="absolute top-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                        <h3 className="text-base font-bold text-primary line-clamp-2">{item.title}</h3>
                      </div>

                      {/* Hint at bottom */}
                      <div className="absolute bottom-4 right-4 text-muted-foreground text-xs bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        Click to view details
                      </div>
                    </div>
                  </Card>

                  {/* Back Side - Details */}
                  <Card
                    className="absolute w-full h-full bg-card border-primary overflow-hidden p-6 flex flex-col justify-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
                          {item.category}
                        </span>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed text-left text-sm">
                        {item.details}
                      </p>
                      
                      <div className="space-y-2 text-left pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Date:</span> {item.date}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Location:</span> {item.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center text-muted-foreground text-xs">
                      Click to flip back
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;