import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

const GalleryPage = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const galleryItems = [
    {
      id: 1,
      title: "DUET TECHFEST 2025",
      category: "Competition",
      images: [
        "https://i.ibb.co.com/35XdNV2t/602388144-122157681812748860-4489416350140926295-n.jpg",
        "https://i.ibb.co.com/S4zs9NPj/600324911-122157681860748860-8982445572443848658-n.jpg",
        "https://i.ibb.co.com/qQ1q7Dd/600326447-122157681914748860-6395860665259358814-n.jpg"
      ],
      details: "Team Gono Bishwabidyalay Robotics Club participated in DUET TECHFEST 2025, representing the university on a national technology platform. The team showcased technical skills, innovation, and teamwork through competitive robotics events. This participation strengthened practical learning and reinforced the club’s commitment to technological excellence.",
      date: "December 2025",
      location: "DUET"
    },
    {
      id: 2,
      title: " Int'l Exhibition on Power Generation & Transmission, Energy & Renewable Energy, Solar Photovoltaic Lighting and Intelligent Applications for Bangladesh",
      category: "Event",
      images: [
        "https://i.ibb.co.com/TDnJgF8R/582782613-3951388565162303-2284220012966114736-n.jpg",
        "https://i.ibb.co.com/k6KNjcd2/582505542-3951390655162094-3953683210959631783-n.jpg",
        "https://i.ibb.co.com/CXJDnWb/583876943-3951391031828723-8889036355342701399-n.jpg"
      ],
      details: "Participated in the International Exhibition on Power Generation & Transmission, Energy & Renewable Energy, Solar Photovoltaic Lighting, and Intelligent Applications for Bangladesh. The event provided exposure to advanced energy technologies and emerging innovations in sustainable power solutions.",
      date: "November 2025",
      location: "ICCB, Dhaka, Bangladesh"
    },
    {
      id: 3,
      title: "2nd Executive Committee Announcement, GBRC",
      category: "Event",
      images: [
        "https://i.ibb.co.com/8gc6kFqf/92b9fb51-b327-43c6-99b6-92998329c68d.jpg",
      ],
      details: "The second executive committee of the Gono Bishwabidyalay Robotics Club was announced, marking a new phase of leadership and organizational growth. The event highlighted the club’s focus on technological innovation, leadership development, collaboration, and advancing robotics education.",
      date: "October 2025",
      location: "Gono Bishwabidyalay",
    },
    {
      id: 4,
      title: "EEE Fusion Fest 2025",
      category: "Project Showcasing",
      images: [
        "https://i.ibb.co.com/60b3RRJp/8dbaae13-bcfa-44b2-b9ba-0055f3b1a34f.jpg",
        "https://i.ibb.co.com/RG0vhKpS/539849131-3878688545765639-454773028350996331-n.jpg",
        "https://i.ibb.co.com/BK4vLXj0/fa632e66-d5aa-4399-8fdb-f53817734157.jpg",
        "https://i.ibb.co.com/1tbrV77M/536279927-3878689269098900-7283642465872615160-n.jpg"
      ],
      details: "Participated in the Project Showcasing Competition of EEE Fusion Fest 2025, presenting innovative engineering solutions.\nThe competition highlighted practical applications, technical creativity, and problem-solving skills in electrical and electronic engineering.",
      date: "August 2025",
      location: "Gono Bishwabidyalay"
    },
    {
      id: 5,
      title: "IEEE ICRPSET 2024",
      category: "Competition",
      images: [
        "https://i.ibb.co.com/7JRqp8Vp/494741804-3772970239670804-8967692306124702716-n.jpg",
        "https://i.ibb.co.com/KzSKqfFJ/494691523-3772970693004092-6202245074335226944-n.jpg",
        "https://i.ibb.co.com/bMtH8GkC/495269231-3772970496337445-2236748447988678661-n.jpg"
      ],
      details: "The International Conference on Recent Progress in Science, Engineering and Technology was organized by the IEEE Robotics and Automation Society University of Rajshahi SBC, Bangladesh Section.The conference was held at the University of Rajshahi, bringing together researchers and professionals from diverse fields.",
      date: "December 2024",
      location: "University of Rajshahi."
    }
  ];
    /*
    {
      id: 6,
      title: "Beginner's Robotics Workshop",
      category: "Workshop",
      images: [
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
      ],
      details: "Introduction to robotics workshop for new members covering basic electronics, mechanical design principles, and programming fundamentals.",
      date: "November 2023",
      location: "Student Center"
    },
    {
      id: 7,
      title: "Combat Robot V3 Assembly",
      category: "Build",
      images: [
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop"
      ],
      details: "Team collaboration on building our third-generation combat robot featuring improved weapon systems, reinforced armor, and enhanced mobility.",
      date: "October 2023",
      location: "Main Workshop"
    },
    {
      id: 8,
      title: "STEM Outreach Day",
      category: "Event",
      images: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
      ],
      details: "Community outreach event where we introduced robotics to local high school students, inspiring the next generation of engineers and innovators.",
      date: "September 2023",
      location: "City High School"
    },
    {
      id: 9,
      title: "International RoboGames",
      category: "Competition",
      images: [
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092583537-20d51876f3ef?w=800&h=600&fit=crop"
      ],
      details: "Competed against teams from 15 countries at the prestigious International RoboGames. Earned bronze medal in the autonomous navigation category.",
      date: "August 2023",
      location: "Tokyo, Japan"
    },
    {
      id: 10,
      title: "Advanced Soldering Workshop",
      category: "Workshop",
      images: [
        "https://images.unsplash.com/photo-1581092583537-20d51876f3ef?w=800&h=600&fit=crop"
      ],
      details: "Specialized workshop on advanced soldering techniques, PCB design, and circuit debugging for electronics enthusiasts and experienced members.",
      date: "July 2023",
      location: "Electronics Lab"
    },
    {
      id: 11,
      title: "Smart Home System Build",
      category: "Build",
      images: [
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
      ],
      details: "Completed our IoT-enabled smart home automation system project featuring voice control, motion sensors, and smartphone integration.",
      date: "June 2023",
      location: "Project Room 4"
    },
    {
      id: 12,
      title: "Alumni Reunion Showcase",
      category: "Event",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
      ],
      details: "Annual alumni reunion where past members shared their career journeys and current members showcased recent projects. Great networking and mentorship opportunities.",
      date: "May 2023",
      location: "Alumni Hall"
    },
  ];*/

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navigateImage = (itemIndex: number, direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    const item = galleryItems[itemIndex];
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
            {galleryItems.map((item, index) => {
              const currentIndex = currentImageIndex[index] || 0;
              const hasMultipleImages = item.images.length > 1;
              
              return (
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
                          src={item.images[currentIndex]}
                          alt={`${item.title} - Image ${currentIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
                        
                        {/* Compact Title at top */}
                        <div className="absolute top-3 left-3 right-3 bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/50">
                          <h3 className="text-sm font-semibold text-primary truncate">{item.title}</h3>
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
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {item.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full border border-foreground transition-all ${
                                imgIndex === currentIndex ? 'bg-foreground' : 'bg-transparent'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Hint at bottom */}
                        <div className="absolute bottom-4 right-4 text-muted-foreground text-xs bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
                          Tap for details
                        </div>
                      </div>
                    </Card>

                    {/* Back Side - Details */}
                    <Card
                      className="absolute w-full h-full bg-card border-primary overflow-hidden flex flex-col"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="p-6 overflow-y-auto flex-1">
                        <div className="space-y-4">
                          <div className="text-center">
                            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
                              {item.category}
                            </span>
                            <h3 className="text-xl font-bold text-primary mb-4">
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
      <Footer />
    </div>
  );
};

export default GalleryPage;
