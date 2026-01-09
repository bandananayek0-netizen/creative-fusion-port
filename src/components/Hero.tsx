import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bandanaPortrait from "@/assets/bandana-profile.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              Hey! 👋
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              I'm Bandana,
              <br />
              <span className="text-primary">UI UX Designer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              I design simple, thoughtful digital experiences that blend creativity with purpose.
              Transforming ideas into beautiful, user-centered interfaces.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="hero" onClick={scrollToContact}>
                Hire Me <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Portrait with Circular Background */}
          <div className="flex-1 flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 absolute -z-10 blur-2xl animate-pulse"></div>
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-primary/20 relative overflow-hidden border-4 border-primary/30 glow-orange">
                <img
                  src={bandanaPortrait}
                  alt="Bandana Nayek - UI/UX Designer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
