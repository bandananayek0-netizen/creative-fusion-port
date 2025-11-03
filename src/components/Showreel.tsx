const Showreel = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            My Animation <span className="text-primary">Journey</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Before transitioning to UI/UX, I spent 5.6 years creating 3D animation for top studios — 
            shaping my eye for motion, composition, and visual storytelling.
          </p>

          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl glass-card animate-fade-in">
            <iframe
              src="https://player.vimeo.com/video/1010997764?h=0&title=0&byline=0&portrait=0"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Animation Showreel"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
