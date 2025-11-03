import { Sparkles, Code, Palette } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Career Transition",
      description: "From 3D Animation to UI/UX Design"
    },
    {
      icon: Code,
      title: "Design Thinker",
      description: "User-centered problem solving"
    },
    {
      icon: Palette,
      title: "Storytelling through UI",
      description: "Visual narratives that engage"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Who <span className="text-primary">I Am</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in">
            I'm Bandana Nayek, a UI/UX Designer who transitioned from a background in 3D animation. 
            My experience in storytelling and visual design helps me craft interfaces that are both 
            visually engaging and effortless to use. I'm passionate about turning ideas into thoughtful 
            digital experiences that blend creativity with purpose.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
