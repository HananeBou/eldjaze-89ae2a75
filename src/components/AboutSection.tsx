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
              alt="Restaurant El Djaze"
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
              Un voyage <br />
              <span className="italic text-primary">aux saveurs d'Algérie</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                El Djaze est né d'une passion profonde pour la cuisine algérienne, 
                héritée de générations de savoir-faire transmis avec amour. Notre restaurant 
                vous invite à découvrir les trésors culinaires d'une terre riche en saveurs, 
                entre mer Méditerranée et Sahara.
              </p>
              <p>
                L'Algérie, carrefour de civilisations berbères, arabes, ottomanes et 
                méditerranéennes, offre une gastronomie d'une diversité exceptionnelle. 
                Des couscous parfumés aux tajines mijotés, des grillades épicées aux 
                pâtisseries au miel et à la fleur d'oranger, chaque plat est un hommage 
                à cette culture généreuse et chaleureuse.
              </p>
              <p>
                Chez El Djaze, nous sélectionnons des produits frais et des épices 
                authentiques pour vous offrir une expérience culinaire fidèle aux traditions 
                algériennes, dans une ambiance conviviale au cœur de Paris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
