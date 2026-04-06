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
              lines: ["09 72 73 32 78"],
            },
            {
              icon: Clock,
              title: "Horaires",
              lines: ["Tous les jours", "11h – 23h"],
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["contact@eldjaze.fr"],
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

        {/* Google Maps */}
        <div className="mt-12 rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4!2d2.3443!3d48.8508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e3a726f74d%3A0x0!2s43+Boulevard+Saint-Michel%2C+75005+Paris!5e0!3m2!1sfr!2sfr!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="El Djaze - 43 Boulevard Saint Michel, Paris 75005"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-body font-light mb-6">
            Pour réserver une table, appelez-nous ou envoyez-nous un email.
          </p>
          <a
            href="tel:0972733278"
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
