import menuImage from "@/assets/menu-spread.jpg";

const menuItems = [
  {
    category: "Entrées",
    items: [
      { name: "Mezze Méditerranéen", description: "Houmous, baba ganoush, taboulé, pain pita chaud", price: "14€" },
      { name: "Salade de Poulpe Grillé", description: "Poulpe tendre, tomates cerises, câpres, citron confit", price: "18€" },
      { name: "Burrata des Pouilles", description: "Burrata crémeuse, tomates anciennes, basilic, huile d'olive vierge", price: "16€" },
    ],
  },
  {
    category: "Plats",
    items: [
      { name: "Daurade Royale Grillée", description: "Poisson entier, légumes du soleil, sauce vierge aux herbes", price: "28€" },
      { name: "Agneau Confit 12h", description: "Épaule d'agneau, légumes racines, jus au romarin", price: "32€" },
      { name: "Risotto aux Fruits de Mer", description: "Gambas, moules, encornets, safran, parmesan", price: "26€" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Baklava Maison", description: "Pâte filo, pistaches, miel de thym, glace fleur d'oranger", price: "12€" },
      { name: "Panna Cotta au Citron", description: "Crème onctueuse, coulis de citron de Menton, meringue", price: "11€" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="carte" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
            Nos Saveurs
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Notre Carte
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Menu items */}
          <div className="space-y-12">
            {menuItems.map((category) => (
              <div key={category.category}>
                <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6 italic">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-heading text-xl text-foreground font-medium">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1 font-body font-light">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-primary font-heading text-xl font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <img
              src={menuImage}
              alt="Mezze méditerranéen"
              className="w-full rounded-sm shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-primary/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
