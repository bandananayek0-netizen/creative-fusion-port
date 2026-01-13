import { Mail, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "bandana.uxdesign@gmail.com",
      href: "mailto:bandana.uxdesign@gmail.com"
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
      value: "behance.net/bandanauxdesign",
      href: "https://www.behance.net/bandanauxdesign"
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

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
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
