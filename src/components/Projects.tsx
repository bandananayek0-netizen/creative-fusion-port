import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Let's Have a Look at <span className="text-primary">My Work</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Featured projects showcasing my UI/UX design work
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Featured Project Card */}
          <div className="glass-card p-8 md:p-12 animate-fade-in group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                UI/UX Design
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                App Design
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                Wireframe
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                User Research
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">EaseOut – Toilet Finder App</h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A mobile app that helps users find clean, accessible toilets with hygiene ratings, photos, 
              and reviews. Designed from UX research to final prototype in Figma, focusing on improving 
              public hygiene and accessibility.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-primary">Key Features</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Real-time location-based toilet finder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hygiene ratings and user reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Photo uploads for transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Accessibility information and filters</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-primary">Design Process</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>User research and persona development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wireframing and information architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>High-fidelity prototyping in Figma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Usability testing and iterations</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button variant="default" size="lg">
              View Case Study <ExternalLink className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
