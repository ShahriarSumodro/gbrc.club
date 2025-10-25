import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

// Social link interface
interface SocialLink {
  icon: string; // ImgBB URL for icon
  url: string;
  label: string;
}

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string; // ImgBB URL for profile picture
  socialLinks?: SocialLink[];
}

const TeamPage = () => {
  // Team member card component
  const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
      <Card className="border-border bg-card hover:border-primary transition-all duration-300 w-64">
        <CardHeader className="flex flex-col items-center space-y-4 pb-4">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/5 flex items-center justify-center">
            {!imgError && member.imageUrl ? (
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <svg 
                className="w-20 h-20 text-primary/50" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            )}
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
            <p className="text-primary font-semibold">{member.role}</p>
          </div>
        </CardHeader>
        <CardContent className="flex justify-center gap-3 pb-6">
          {member.socialLinks?.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : "_blank"}
              rel={link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label={link.label}
            >
              {link.icon ? (
                <img 
                  src={link.icon} 
                  alt={link.label}
                  className="w-5 h-5"
                />
              ) : (
                <span className="text-xs font-bold text-primary">{link.label[0]}</span>
              )}
            </a>
          ))}
        </CardContent>
      </Card>
    );
  };

  // Section component
  const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );

  // ============================================
  // TEAM MEMBERS DATA
  // Replace empty strings with your ImgBB URLs
  // ============================================

  const leadership: TeamMember[] = [
    {
      name: "Md. Shohel",
      role: "President",
      imageUrl: "https://i.ibb.co.com/SWX0b91/1729018442598-Md-Sohel.jpg", // Replace with ImgBB URL: https://i.ibb.co/XXXXXXX/shohel.jpg
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // Replace with ImgBB URL for LinkedIn icon
          url: "https://www.linkedin.com/in/md-shohel-173754381/",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png", // Replace with ImgBB URL for Email icon
          url: "https://www.facebook.com/md.shohel.148111",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Rahat Hossain Rony",
      role: "Vice President",
      imageUrl: "https://i.ibb.co.com/5gtyHTwW/476162119-1818580485648409-2150846323838611297-n.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/sa.zim.31",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Rubaet Toha",
      role: "General Secretary",
      imageUrl: "https://i.ibb.co.com/39Dthdhj/495206230-3772905749677253-1096101009931580118-n.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/rubaettoha/",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/rubaettoha",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Md. Ridoy Hossen",
      role: "Asst. General Secretary",
      imageUrl: "https://i.ibb.co.com/ZtyMkgY/inbound7126104292500909030-garden-of-Choice.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/100013742806886/",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Habibur Rahman",
      role: "Treasurer",
      imageUrl: "https://i.ibb.co.com/xq8RLW88/468098241-1781054236056212-4640740213134868125-n.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/j.an.96387189",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Alimul Jisan",
      role: "Office Secretary",
      imageUrl: "https://i.ibb.co.com/fGqBncfk/inbound4970722682014605713-Alimul-Hassan.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/alimul-hassan-736b08349?trk=contact-info",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/share/16YipTy7v4/",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Jahid Hasan Sany",
      role: "Organizing Secretary",
      imageUrl: "https://i.ibb.co.com/235ZY7CL/IMG-20250808-145348-Jahid-Hasan-Sunny.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/jahid-hasan-sunny-5137a432b",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/share/1N7rzv4woi/",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Mehrab Hossain",
      role: "Media Secretary",
      imageUrl: "https://i.ibb.co.com/mrppT6t2/20250831-131738-Mehrab-hossain.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/mehrab-hossain-jishan-5ab32432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/share/15Hx5chZEGb/",
          label: "Facebook"
        }
      ]
    },
  ];

  const executives: TeamMember[] = [
    {
      name: "Sonjoy Paul",
      role: "Executive Member",
      imageUrl: "https://i.ibb.co.com/Ngbjs6B8/inbound8300385185992761600-Sonjoy-paul.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/share/1ag84P5RPt/",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Md. Ahsan Habib",
      role: "Executive Member",
      imageUrl: "https://i.ibb.co.com/VYVjr5pm/1761406711406-ah-Robi.png", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/robi.lio.bd",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Oli Ullah Fahad",
      role: "Executive Member",
      imageUrl: "https://i.ibb.co.com/bjHkfYR8/inbound24419383209899016-Fahad-Ullah.webp", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/fahad-ullah-fahad-ullah-855658390?trk=contact-info",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/share/1CDfbmxT4Y/",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Md. Mehedi Hasan",
      role: "Executive Member",
      imageUrl: "https://i.ibb.co.com/Cdcxprv/IMG20250120155244-Md-Mehedi-Hasan.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/mdmehedihasan",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/share/19iNUzJHiF/",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Mst. Anika Anjum Mim",
      role: "Executive Member",
      imageUrl: "https://i.ibb.co.com/PZKsYnmH/inbound8282683136419709577-Anika-Anjum.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/mst-anika-anjum-mim-424694394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/anikaanjum.mim.92",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Md. Shahriar Sumodro",
      role: "Executive Member",
      imageUrl: "https://i.ibb.co.com/KpJDBFnW/499969607-2084489555394378-720689542365571010-n.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          url: "https://www.linkedin.com/in/shahriar-sumodro/",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/shahriar.sumodro",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Zubaida Islam Zuhi",
      role: "Executive Member",
      imageUrl: "https://i.ibb.co.com/jvmSpXpZ/inbound1789560223511051039-Zubaida-Islam-Zuhi.jpg", // Replace with ImgBB URL
      socialLinks: [ 
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/share/1DJGCuJeT8/",
          label: "Facebook"
        }
      ]
    },
  ];

  const coordinators: TeamMember[] = [
    {
      name: "Md. Al-Amin Sarker",
      role: "Lecturer, Dept. of EEE",
      imageUrl: "https://i.ibb.co.com/Vpx2jvNk/download-5.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://i.ibb.co.com/N6SprHW4/browser.png",
          url: "https://gonouniversity.edu.bd/eee/employees/md-al-amin-sarker/",
          label: "Website"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/al.amin.sarker.233164",
          label: "Facebook"
        }
      ]
    },
    {
      name: "Sumon Ahmed",
      role: "Lecturer, Dept. of EEE",
      imageUrl: "https://i.ibb.co.com/r8xTCLF/Sumon.jpg", // Replace with ImgBB URL
      socialLinks: [
        {
          icon: "https://i.ibb.co.com/N6SprHW4/browser.png",
          url: "https://gonouniversity.edu.bd/eee/employees/sumon-ahmed/",
          label: "Website"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
          url: "https://www.facebook.com/sumonahamed.durjoy",
          label: "Facebook"
        }
      ]
    }
  ];

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
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight text-center">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto text-center">
            Meet the talented individuals who make our robotics vision a reality. Our diverse team brings together expertise from multiple disciplines.
          </p>

          <TeamSection title="Leadership & Project Leads" members={leadership} />
          <TeamSection title="Executive Members" members={executives} />
          <TeamSection title="Co-ordinator Panel" members={coordinators} />

          {/* Recruitment Section */}
          <div className="mt-24 mb-12 max-w-4xl mx-auto">
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardContent className="pt-12 pb-12 px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Want to Join Our Team?
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed text-center mb-8">
                  We welcome enthusiastic builders, coders, and designers. 
                  Whether you're a seasoned engineer or just starting out, there's a place for you on our team. 
                  Stop by our lab in the Engineering Building, Room 201, or reach out to our leadership.
                </p>
                <div className="flex justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default TeamPage;
