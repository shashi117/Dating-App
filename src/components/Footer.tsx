
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Heart className="text-love-500" fill="#9b87f5" />
            <span className="bg-gradient-to-r from-love-500 to-secondary bg-clip-text text-transparent font-bold">
              DateGenius
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DateGenius. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/70 hover:text-love-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-foreground/70 hover:text-love-500 transition-colors">
              Terms
            </a>
            <a href="#" className="text-foreground/70 hover:text-love-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
