import { useState } from "react";
import menuImage from "@/assets/menu-spread.jpg";

const menuItems = [
  {
    category: "Entrées",
    items: [
      { name: "Salade Méchouia et galette maison", description: "Houmous, baba ganoush, taboulé, pain pita chaud", price: "14€" },
      { name: "Bourek au Fromage", description: "Feuilles de brick croustillantes, fromage fondant, herbes fraîches", price: "8€" },
      { name: "Brick à l'Œuf", description: "Brick croustillante, œuf coulant, thon, câpres, persil", price: "9€" },
    ],
  },
  {
    category: "Salades",
    items: [
      { name: "Salade Méditerranéenne", description: "Tomates, concombres, oignons, olives, feta, huile d'olive", price: "12€" },
      { name: "Salade Mechouia", description: "Poivrons grillés, tomates, ail, huile d'olive, thon", price: "11€" },
      { name: "Salade César", description: "Laitue romaine, poulet grillé, parmesan, croûtons, sauce César", price: "14€" },
    ],
  },
  {
    category: "Couscous",
    items: [
      { name: "Couscous Royal", description: "Agneau, merguez, poulet, légumes de saison, bouillon parfumé", price: "24€" },
      { name: "Couscous Agneau", description: "Épaule d'agneau confite, légumes, pois chiches, bouillon", price: "22€" },
      { name: "Couscous Poulet", description: "Cuisses de poulet, légumes du soleil, raisins secs", price: "18€" },
      { name: "Couscous Végétarien", description: "Légumes de saison, pois chiches, harissa maison", price: "16€" },
    ],
  },
  {
    category: "Tajines",
    items: [
      { name: "Tajine Agneau Pruneaux", description: "Agneau mijoté, pruneaux, amandes, miel, cannelle", price: "22€" },
      { name: "Tajine Poulet Citron Confit", description: "Poulet fermier, citron confit, olives vertes, coriandre", price: "19€" },
      { name: "Tajine Kefta", description: "Boulettes de viande épicées, sauce tomate, œuf poché", price: "18€" },
    ],
  },
  {
    category: "Grillades",
    items: [
      { name: "Brochettes Mixtes", description: "Agneau, poulet, merguez, légumes grillés, sauce harissa", price: "22€" },
      { name: "Côtelettes d'Agneau", description: "Côtelettes grillées, herbes de Provence, frites maison", price: "26€" },
      { name: "Poulet Grillé Entier", description: "Poulet fermier mariné, épices douces, semoule", price: "20€" },
    ],
  },
  {
    category: "Burgers",
    items: [
      { name: "Burger Méditerranéen", description: "Steak haché, feta, tomates séchées, roquette, sauce tzatziki", price: "16€" },
      { name: "Burger Classique", description: "Steak haché, cheddar, salade, tomate, oignon, sauce maison", price: "14€" },
      { name: "Burger Poulet Crispy", description: "Poulet pané croustillant, coleslaw, sauce miel-moutarde", price: "15€" },
    ],
  },
  {
    category: "Pizzas",
    items: [
      { name: "Pizza Margherita", description: "Sauce tomate, mozzarella, basilic frais, huile d'olive", price: "12€" },
      { name: "Pizza Méditerranéenne", description: "Merguez, poivrons, oignons, olives, mozzarella", price: "15€" },
      { name: "Pizza 4 Fromages", description: "Mozzarella, gorgonzola, chèvre, parmesan, miel", price: "14€" },
    ],
  },
  {
    category: "Pâtes",
    items: [
      { name: "Penne Arrabiata", description: "Sauce tomate pimentée, ail, basilic, parmesan", price: "13€" },
      { name: "Spaghetti Bolognaise", description: "Sauce viande mijotée, parmesan râpé, basilic", price: "14€" },
      { name: "Tagliatelles aux Fruits de Mer", description: "Gambas, moules, sauce crème safranée", price: "19€" },
    ],
  },
  {
    category: "Côté Snack",
    items: [
      { name: "Tacos Maison", description: "Viande au choix, frites, fromage fondu, sauce algérienne", price: "10€" },
      { name: "Panini Poulet", description: "Poulet grillé, fromage, crudités, sauce blanche", price: "9€" },
      { name: "Wrap Merguez", description: "Merguez grillée, salade, tomate, oignon, harissa", price: "9€" },
      { name: "Assiette Frites Merguez", description: "Frites maison, merguez grillées, sauce harissa", price: "11€" },
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
