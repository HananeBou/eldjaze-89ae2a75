import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#accueil" className="font-heading text-2xl text-primary-foreground tracking-wider">
          El Djaze
        </a>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/eldjaze" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Instagram size={22} />
          </a>
          <a href="https://www.facebook.com/eldjaze" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Facebook size={22} />
          </a>
        </div>
        <p className="text-sm font-body font-light">
          © 2025 El Djaze — Restaurant Méditerranéen. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
