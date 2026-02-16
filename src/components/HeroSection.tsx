import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Restaurant méditerranéen Olivea"
          className="w-full h-full object-cover"
          loading="eager" />

        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p
          className="text-accent uppercase tracking-[0.35em] text-sm font-body mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}>

          Restaurant Méditerranéen
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}>El Djaze


        </h1>
        <p
          className="text-primary-foreground/80 font-body text-lg md:text-xl font-light max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}>

          Saveurs authentiques de la Méditerranée, servies avec passion dans un cadre chaleureux et élégant.
        </p>
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}>

          <a
            href="#carte"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-[0.2em] font-body hover:opacity-90 transition-opacity rounded-sm">

            Découvrir la Carte
          </a>
        </div>
      </div>
    </section>);

};

export default HeroSection;