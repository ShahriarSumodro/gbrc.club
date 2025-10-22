import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

// Sponsor interface for type safety
interface Sponsor {
  name: string;
  tier: string;
  contribution: string;
  imageUrl: string; // URL to sponsor logo/image
  websiteUrl: string; // Sponsor's website URL
}

const SponsorsPage = () => {
  const sponsors: Sponsor[] = [
    /*{
    {
      name: "Tech Corp",
      tier: "Platinum",
      contribution: "Major funding support",
      imageUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop",
      websiteUrl: "https://techcorp.example.com"
    },*/
    /*
    {
      name: "Engineering Solutions",
      tier: "Gold",
      contribution: "Equipment and materials",
      imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop",
      websiteUrl: "https://engineeringsolutions.example.com"
    },*/
  ];

  // Reusable component for rendering a sponsor card
  const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
      <Card className="border-border bg-card hover:border-primary transition-all duration-300 w-full max-w-sm">
        <CardHeader>
          <a 
            href={sponsor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="w-full h-48 rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center mb-4 hover:opacity-90 transition-opacity cursor-pointer border-2 border-transparent hover:border-primary">
              {!imgError ? (
                <img 
                  src={sponsor.imageUrl} 
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-3xl font-bold text-primary">
                      {sponsor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">Click to visit website</p>
                </div>
              )}
            </div>
          </a>
          <CardTitle className="text-xl text-center">{sponsor.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-primary font-semibold mb-2">{sponsor.tier} Sponsor</p>
          <p className="text-muted-foreground text-sm">{sponsor.contribution}</p>
          <a 
            href={sponsor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
            Visit Website
          </a>
        </CardContent>
      </Card>
    );
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
            Our Sponsors
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            We're grateful for the support of our sponsors who make our projects possible. Their contributions help us push the boundaries of robotics innovation. Click on any sponsor logo to visit their website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Become a Sponsor</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in supporting our team? Contact us to learn about sponsorship opportunities and how your organization can help shape the future of robotics.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SponsorsPage;