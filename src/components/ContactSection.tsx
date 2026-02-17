import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
            Nous Trouver
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Réservation & Contact
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: MapPin,
              title: "Adresse",
              lines: ["43 Boulevard Saint Michel", "75005 Paris"],
            },
            {
              icon: Phone,
              title: "Téléphone",
              lines: ["04 91 00 00 00"],
            },
            {
              icon: Clock,
              title: "Horaires",
              lines: ["Mar – Sam : 12h – 14h30", "19h – 22h30", "Dim : 12h – 15h"],
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["contact@olivea.fr"],
            },
          ].map((item) => (
            <div key={item.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-muted-foreground font-body text-sm font-light">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-body font-light mb-6">
            Pour réserver une table, appelez-nous ou envoyez-nous un email.
          </p>
          <a
            href="tel:0491000000"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-[0.2em] font-body hover:opacity-90 transition-opacity rounded-sm"
          >
            Appeler pour Réserver
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
