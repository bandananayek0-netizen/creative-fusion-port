import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", isLink: false },
    { name: "About", href: "#about", isLink: false },
    { name: "Services", href: "#services", isLink: false },
    { name: "Resume", href: "/Bandana_Resume.pdf", isLink: true },
    { name: "Projects", href: "#projects", isLink: false },
    { name: "Contact", href: "#contact", isLink: false },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-primary">Bandana</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              return link.isLink ? 
              <a 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium" 
                download 
                href={link.href}>
                  {link.name}
              </a> : 
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              return link.isLink ? 
              <a 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left" 
                download 
                href={link.href}>
                  {link.name}
              </a> : 
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                {link.name}
              </button>
            })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
