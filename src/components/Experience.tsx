import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Career Transition",
      period: "Present",
      description: "Designed EaseOut, a toilet-finder app improving hygiene and accessibility.",
      color: "primary"
    },
    {
      title: "Junior 3D Animator",
      company: "Xentrix Studios (Nickelodeon Wing)",
      period: "May 2022 – Apr 2024",
      description: "Created engaging 3D animations for children's entertainment content.",
      color: "primary/70"
    },
    {
      title: "Junior 3D Animator",
      company: "BYJU'S Pvt. Ltd.",
      period: "Mar 2019 – Apr 2022",
      description: "Developed educational 3D animations for interactive learning experiences.",
      color: "primary/50"
    },
    {
      title: "3D Animator Trainee",
      company: "Giantwheel Animation Pvt. Ltd.",
      period: "Oct 2018 – Mar 2019",
      description: "Learned foundations of 3D animation and production workflows.",
      color: "primary/30"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          My Work <span className="text-primary">Experience</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A journey from 3D animation to user experience design
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative glass-card p-6 ml-0 md:ml-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:-left-[3.75rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
