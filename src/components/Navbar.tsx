
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Heart className="text-love-500" fill="#9b87f5" />
          <span className="bg-gradient-to-r from-love-500 to-secondary bg-clip-text text-transparent">
            DateGenius
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-love-500 transition-colors">
            Home
          </Link>
          
          <Link to="/tips" className="text-foreground/80 hover:text-love-500 transition-colors">
            Dating Tips
          </Link>
          
          <Link to="/advisor" className="text-foreground/80 hover:text-love-500 transition-colors">
            AI Advisor
          </Link>
          <Link 
            to="/advisor" 
            className="bg-gradient-love text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
