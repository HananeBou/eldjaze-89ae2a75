import aboutImage from "@/assets/about-restaurant.jpg";

const AboutSection = () => {
  return (
    <section id="histoire" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Terrasse du restaurant Olivea"
              className="w-full rounded-sm shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-secondary/30 rounded-sm -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
              Notre Histoire
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Une tradition <br />
              <span className="italic text-primary">de saveurs</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                Depuis 2010, Olivea célèbre les richesses culinaires de la Méditerranée. 
                Notre chef, formé entre la Grèce, l'Italie et le Maroc, compose une carte 
                qui voyage au fil des saisons et des rivages.
              </p>
              <p>
                Chaque plat raconte une histoire : celle de producteurs passionnés, 
                d'ingrédients sourcés avec soin et de recettes transmises de génération 
                en génération. Chez nous, la fraîcheur n'est pas un argument — c'est une promesse.
              </p>
              <p>
                Notre terrasse, baignée de lumière dorée, vous invite à partager un moment 
                d'exception, entre amis ou en famille, autour de plats généreux et sincères.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
