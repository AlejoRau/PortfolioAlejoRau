import {cn} from "../lib/utils"
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];


export const NavBar = () => {
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return <nav className=
{cn("fixed w-full z-40 transition-all duration-300", 
scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
    
    <div className="container flex items-center justify-between"> 
        <a className="text-xl font-bold text-primary flex items-center">
            <span className="relative z-10">
                   <span className="text-glow text-foreground">Alejo Rau</span> My Portfolio
            </span>
        </a>
    </div>
</nav>
}