import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import bandanaPortrait from "@/assets/bandana-profile.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.03, duration: 0.4, ease: "easeOut" as const },
    }),
  };

  const titleLine1 = "I'm Bandana,";
  const titleLine2 = "UI/UX & Product";
  const titleLine3 = "Designer";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold"
            >
              Hey! 👋
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">
                {titleLine1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="text-primary block">
                {titleLine2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + titleLine1.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="text-primary block">
                {titleLine3.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + titleLine1.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              I design simple, thoughtful digital experiences that blend creativity with purpose.
              Transforming ideas into beautiful, user-centered interfaces.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              <Button variant="hero" onClick={scrollToContact}>
                Hire Me <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Portrait with Circular Background */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <div className="relative">
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-br from-primary/30 to-primary/10 absolute -z-10 blur-2xl animate-pulse"></div>
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-primary/20 relative overflow-hidden border-4 border-primary/30 glow-orange">
                <img
                  src={bandanaPortrait}
                  alt="Bandana Nayek - UI/UX Designer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
