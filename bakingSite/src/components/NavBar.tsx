import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Order", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-cream-dark py-3"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold text-espresso tracking-wide">Gee~Pastries</span>
          <span className="font-body text-[10px] text-espresso-soft uppercase tracking-[0.2em]">Artisan Bakery</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="font-body text-sm text-espresso/60 hover:text-espresso transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blush group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden lg:inline-flex px-5 py-2.5 bg-espresso text-cream font-body font-medium text-sm rounded-full hover:bg-espresso-mid transition-all duration-300">
          Order Now
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden text-espresso p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-cream border-t border-cream-dark px-5 py-5 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="font-body text-espresso/70 hover:text-espresso py-1 transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-5 py-3 bg-espresso text-cream font-body font-medium text-sm rounded-full">
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;