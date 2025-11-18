import { Briefcase, Code, GraduationCap, Globe, Lightbulb } from "lucide-react";

const Experience = () => {
  const skills = {
    uxui: ["User Research", "Wireframing", "Prototyping", "Design Systems", "UI Design", "Data-driven UI Design", "Responsive Design", "Design Thinking"],
    tools: ["Figma", "Adobe XD", "Sketch", "Canva", "Adobe Photoshop", "Autodesk Maya", "Blender", "Flash", "HTML/CSS Basics"]
  };

  const projects = [
    {
      title: "EASEOUT - Toilet Finder App",
      role: "UI/UX Designer",
      period: "Present",
      description: [
        "Designed EaseOut, a mobile application to help users quickly locate clean, accessible toilets, complete with hygiene ratings and photos.",
        "Conducted primary user research, wireframing, and high-fidelity UI design using Figma.",
        "Applied design thinking methodologies to solve real-world challenges in hygiene and accessibility through thoughtful design.",
        "Focused on creating adaptable design systems for multi-screen and mobile application interfaces."
      ]
    }
  ];

  const experiences = [
    {
      title: "Junior 3D Animator",
      company: "Xentrix Studios (Nickelodeon Wing)",
      period: "May 2022 – Apr 2024",
      description: [
        "Collaborated with directors on the international animation project, Monster High (Nickelodeon), ensuring strong visual quality and consistent storytelling for a teenage audience.",
        "Developed a strong sense of motion flow, visual hierarchy, and composition—essential skills now applied to creating seamless and engaging digital interfaces."
      ]
    },
    {
      title: "Junior 3D Animator",
      company: "BYJU'S Pvt. Ltd.",
      period: "Mar 2019 – Apr 2022",
      description: [
        "Leveraged visual storytelling and compositional balance to simplify complex educational concepts, directly enhancing user perception and engagement for a child audience.",
        "Created and produced engaging educational animations specifically for children, partnering with creative teams to ensure the content strongly connected with the target student audience."
      ]
    },
    {
      title: "3D Animator Trainee",
      company: "Giantwheel Animation Pvt Ltd",
      period: "Oct 2018 – Mar 2019",
      description: [
        "Contributed animation to commercial projects, including the Leo Da Vinci TV series.",
        "Maintained strict visual and animation quality standards across 3D scenes, strengthening attention to detail and consistency in final output."
      ]
    }
  ];

  const education = [
    "Google UI/UX Professional Certificate | Coursera",
    "Diploma in Animation | Dishaapro, Bhubaneswar"
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Professional <span className="text-primary">Resume</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Highly empathetic and creative UI/UX Designer focused on crafting digital experiences that are natural, meaningful, and easy to use. Bringing 5.6 years of visual storytelling and animation expertise to UX design.
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
                        <p className="text-primary font-semibold mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
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
