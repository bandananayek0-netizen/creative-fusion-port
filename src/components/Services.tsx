import { Palette, Layout, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Crafting human-centered, intuitive digital interfaces that users love.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Palette,
      title: "Prototyping & UX Research",
      description: "Turning insights into interactive, testable prototypes that validate ideas.",
      gradient: "from-primary/15 to-primary/5"
    },
    {
      icon: Sparkles,
      title: "3D Animation",
      description: "Using motion and storytelling to enhance digital experiences.",
      gradient: "from-primary/20 to-primary/10"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          My <span className="text-primary">Services</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I offer a range of design services to help bring your digital products to life
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
