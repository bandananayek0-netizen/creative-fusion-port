import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Globe } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "bandananayek@gmail.com",
      href: "mailto:bandananayek@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bandanayek",
      href: "https://linkedin.com/in/bandanayek"
    },
    {
      icon: Globe,
      label: "Behance",
      value: "behance.net/bandanayek",
      href: "https://behance.net/bandanayek"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Let's <span className="text-primary">Connect</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have an awesome project idea? Let's discuss and bring it to life!
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50"
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Let's Create Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a complete design overhaul or just want to discuss ideas, 
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border/50">
        <p className="text-center text-muted-foreground">
          © 2025 Bandana Nayek | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
