import { Briefcase, Code, GraduationCap, Globe, Lightbulb } from "lucide-react";

const Experience = () => {
  const skills = {
    uxui: ["UX Research & Strategy", "Wireframing & Prototyping", "Interaction & Visual Design", "Usability Testing & Iteration", "Design Systems & Accessibility", "Web & Mobile App Design"],
    tools: ["Figma", "Adobe Photoshop", "Blender 3D", "Autodesk Maya", "Canva", "GitHub Copilot (GenAI)", "Lovable (GenAI)", "Lottie files", "Relume AI"]
  };

  const projects = [
    {
      title: "EaseOut - Toilet Finder App",
      role: "Product Designer",
      period: "Sep 2025 - Nov 2025",
      description: [
        "Designed a complete mobile experience from UX research to high-fidelity prototype.",
        "Conducted user interviews to identify pain points around urgency, accessibility, and hygiene.",
        "Created user flows, wireframes, and a minimalist design system tailored for a public-utility service app.",
        "Designed intuitive UI screens optimized for quick scanning and real-time decision-making.",
        "Built interactive prototypes and conducted usability testing to refine user flow and reduce task friction."
      ]
    }
  ];

  const experiences = [
    {
      title: "Junior 3D Animator",
      company: "Xentrix Studios (Nickelodeon Wing), Bangalore",
      period: "May 2022 - Apr 2024",
      projects: "Monster High, Stan & Gran",
      description: [
        "Strengthened skills in high-detail, polished, and dynamic 3D animation for global broadcast standards.",
        "Worked on Nickelodeon IPs with strict visual quality, timing, and storytelling guidelines.",
        "Enhanced character acting, emotional performance, and movement realism.",
        "Collaborated closely with supervisors to refine animation quality and maintain production pipeline consistency."
      ]
    },
    {
      title: "Junior 3D Animator",
      company: "BYJU'S Pvt. Ltd., Bhubaneswar",
      period: "Dec 2019 - May 2022",
      projects: "Internal Projects",
      description: [
        "Produced 3D animations specifically for primary school children, focusing on engagement and clarity.",
        "Transformed complex educational topics into simple, visually appealing content.",
        "Delivered animations optimized for mobile and web-based learning experiences."
      ]
    },
    {
      title: "Trainee",
      company: "Giant Wheel Animation, Bhubaneswar",
      period: "Mar 2019 - Nov 2019",
      projects: "Leo Da Vinci, Gobindgarh Fort",
      description: [
        "Trained in character animation techniques focusing on posing, timing, spacing, and performance clarity.",
        "Assisted senior animators with blocking and polishing scenes.",
        "Gained experience working within a full animation production pipeline.",
        "Improved core animation skills through continuous feedback and mentoring."
      ]
    }
  ];

  const education = [
    "Diploma in Animation | Dishaapro, Bhubaneswar"
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Professional <span className="text-primary">Resume</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          UI/UX and Product Designer transitioning from a professional 3D animation background, with years of experience in motion, storytelling, composition, and timing. I apply this understanding to design intuitive, user-centered products, combining research, interaction design, and visual clarity to solve complex problems meaningfully.
        </p>

        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Technical Skills */}
          <div className="glass-card p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">UX/UI Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.uxui.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Tools & Software</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* UX Project Experience */}
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">UX Project Experience</h3>
            </div>
            
            {projects.map((project, index) => (
              <div key={index}>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-primary font-semibold mb-2">{project.role} - {project.period}</p>
                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Professional Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative glass-card p-6 ml-0 md:ml-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:-left-[3.75rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-1">{exp.title}</h4>
                        <p className="text-primary font-semibold mb-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                        {exp.projects && <p className="text-sm text-muted-foreground mb-3"><span className="text-primary">Projects:</span> {exp.projects}</p>}
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            
            <ul className="space-y-3">
              {education.map((edu, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Additional Information</h3>
            </div>
            
            <div>
              <p className="text-muted-foreground"><span className="text-primary font-semibold">Languages:</span> English, Hindi, Bengali, Odia</p>
              <p className="text-muted-foreground mt-2"><span className="text-primary font-semibold">Relevant Background:</span> 5.6 years of professional experience leveraging visual storytelling and composition in animation.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
