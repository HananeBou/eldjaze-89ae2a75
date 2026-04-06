import { useState } from "react";
import menuImage from "@/assets/menu-spread.jpg";

const menuItems = [
  {
    category: "Entrées",
    items: [
      { name: "Salade méchouia et galette maison", description: "Salade de légumes grillés et galette maison", price: "6,00€" },
      { name: "Chorba frik traditionnelle", description: "Soupe traditionnelle du Maghreb", price: "7,00€" },
      { name: "Brick (thon, viande ou poulet)", description: "Brick croustillante au choix : thon, viande ou poulet", price: "6,50€" },
    ],
  },
  {
    category: "Salades",
    items: [
      { name: "Salade César", description: "Salade César classique", price: "14,90€" },
      { name: "Salade Burrata", description: "Salade fraîche à la burrata", price: "14,90€" },
      { name: "Salade Chèvre chaud", description: "Salade au chèvre chaud fondant", price: "14,90€" },
      { name: "Salade Norvégienne", description: "Salade norvégienne au saumon", price: "14,90€" },
    ],
  },
  {
    category: "Couscous",
    items: [
      { name: "Couscous Royal", description: "Couscous royal aux viandes mélangées", price: "23,90€" },
      { name: "Couscous Méchoui", description: "Couscous à l'agneau rôti", price: "19,90€" },
      { name: "Couscous Poulet", description: "Couscous au poulet", price: "14,90€" },
      { name: "Couscous Merguez", description: "Couscous aux merguez grillées", price: "14,90€" },
      { name: "Couscous Végétarien", description: "Couscous végétarien", price: "12,90€" },
      { name: "Couscous Légumes à la vapeur", description: "Couscous aux légumes vapeur", price: "12,90€" },
    ],
  },
  {
    category: "Tajines",
    items: [
      { name: "Tajine d'agneau aux légumes ou pruneaux", description: "Tajine d'agneau aux légumes ou pruneaux", price: "17,90€" },
      { name: "Tajine de poulet aux olives citron confit", description: "Tajine de poulet aux olives et citron confit", price: "15,90€" },
      { name: "Tajine de boulettes de bœuf", description: "Tajine de boulettes de viande de bœuf", price: "15,90€" },
    ],
  },
  {
    category: "Grillades",
    items: [
      { name: "Côtes d'agneau (x3)", description: "Accompagnées de légumes de saison, purée maison, riz ou frites", price: "19,90€" },
      { name: "Entrecôte, légumes de saison", description: "Entrecôte grillée avec légumes de saison", price: "19,90€" },
      { name: "Brochettes de bœuf", description: "Brochettes de bœuf grillées", price: "18,90€" },
      { name: "Brochettes de poulet", description: "Brochettes de poulet grillées", price: "15,90€" },
      { name: "Pavé de saumon", description: "Pavé de saumon grillé", price: "17,90€" },
    ],
  },
  {
    category: "Burgers",
    items: [
      { name: "Burger Viande", description: "Burger viande, accompagné de frites et salade", price: "13,90€" },
      { name: "Burger Poulet", description: "Burger poulet, accompagné de frites et salade", price: "12,90€" },
      { name: "Burger Trois Fromages (avec steak)", description: "Burger triple fromage avec steak, frites et salade", price: "13,90€" },
      { name: "Burger Veggie", description: "Burger végétarien, accompagné de frites et salade", price: "12,90€" },
    ],
  },
  {
    category: "Pizzas",
    items: [
      { name: "Margherita", description: "Pizza Margherita classique", price: "9,50€" },
      { name: "Napolitaine", description: "Pizza Napolitaine", price: "11,90€" },
      { name: "Mergez", description: "Pizza aux merguez", price: "11,90€" },
      { name: "Viande", description: "Pizza à la viande", price: "13,90€" },
      { name: "Pizza Poulet", description: "Pizza au poulet", price: "12,90€" },
      { name: "Champignons", description: "Pizza aux champignons", price: "11,90€" },
      { name: "4 Fromages", description: "Pizza quatre fromages", price: "13,90€" },
      { name: "Poulet Fumé", description: "Pizza au poulet fumé", price: "12,90€" },
      { name: "Thon", description: "Pizza au thon", price: "11,90€" },
      { name: "Orientale", description: "Pizza orientale", price: "13,90€" },
      { name: "Royale", description: "Pizza royale", price: "15,90€" },
    ],
  },
  {
    category: "Pâtes",
    items: [
      { name: "Tagliatelles au saumon", description: "Tagliatelles au saumon frais", price: "14,90€" },
      { name: "Pâtes à la crème de truffe", description: "Pâtes à la crème de truffe", price: "13,90€" },
      { name: "Spaghettis Bolognaise", description: "Spaghettis à la sauce bolognaise", price: "14,90€" },
      { name: "Pâtes au poulet à l'espagnol", description: "Pâtes au poulet façon espagnole", price: "13,90€" },
    ],
  },
  {
    category: "Côté Snack",
    items: [
      { name: "Sandwich Kebab", description: "Sandwich kebab maison", price: "9,00€" },
      { name: "Sandwich Kebab + Boisson", description: "Sandwich kebab avec une boisson", price: "10,00€" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuItems[0].category);
  const activeCategoryData = menuItems.find((c) => c.category === activeCategory)!;

  return (
    <section id="carte" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
            Nos Saveurs
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Notre Carte
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuItems.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 text-sm font-body uppercase tracking-widest rounded-sm transition-all duration-300 ${
                activeCategory === cat.category
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary border border-border hover:border-primary"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Active category items */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-primary mb-8 italic">
              {activeCategoryData.category}
            </h3>
            <div className="space-y-6">
              {activeCategoryData.items.map((item) => (
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

          {/* Image */}
          <div className="relative hidden lg:block">
            <img
              src={menuImage}
              alt="Plats méditerranéens"
              className="w-full rounded-sm shadow-2xl sticky top-28"
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
