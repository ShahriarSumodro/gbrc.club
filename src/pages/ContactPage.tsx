import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxrXpFVB3cLQwc5NT5mDJX7MgpQWAK1OFZNTrRjPzCExM3c08cK6xBZGUG4Wxvu_sdL/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // With no-cors mode, we can't read the response
      // But if no error is thrown, it likely succeeded
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
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
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Have questions or want to join our team? We'd love to hear from you. Reach out through any of the methods below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <p className="text-muted-foreground">gbroboticsclub2025@gmail.com</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Phone</CardTitle>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Location</CardTitle>
                        <p className="text-muted-foreground">Engineering Building, Room 201</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send a Message</h2>
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <Input 
                        id="subject" 
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message..." 
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;