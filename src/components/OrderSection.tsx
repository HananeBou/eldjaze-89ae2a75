import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Uber Eats",
    url: "https://www.ubereats.com",
    description: "Commandez sur Uber Eats et faites-vous livrer chez vous.",
    color: "bg-[#06C167]",
  },
  {
    name: "Deliveroo",
    url: "https://deliveroo.fr",
    description: "Retrouvez-nous sur Deliveroo pour une livraison rapide.",
    color: "bg-[#00CCBC]",
  },
];

const OrderSection = () => {
  return (
    <section id="commander" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
            Livraison
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Commander en Ligne
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
          <p className="text-muted-foreground font-body font-light mt-6 max-w-xl mx-auto">
            Retrouvez nos plats sur vos plateformes de livraison préférées.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm border border-border p-8 text-center hover:border-primary transition-colors duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${platform.color} text-white mb-5`}
              >
                <ExternalLink size={22} />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">
                {platform.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm font-light mb-5">
                {platform.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                Commander <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
