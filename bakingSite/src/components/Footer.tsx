import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-espresso text-cream py-10 border-t border-espresso-soft/20">
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-display text-2xl font-semibold">Gee~Pastries</p>
          <p className="font-body text-xs text-cream/40 tracking-widest uppercase mt-0.5">Artisan Bakery · Nairobi</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-5">
          {["Home", "About", "Menu", "Why Us", "Gallery", "Testimonials", "Order"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="font-body text-xs text-cream/40 hover:text-cream transition-colors duration-300">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          {["IG", "FB", "TK", "WA"].map(s => (
            <a key={s} href="#"
              className="w-8 h-8 rounded-full border border-espresso-soft/50 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/30 font-body text-xs transition-all duration-300">
              {s}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-5 border-t border-espresso-soft/20 text-center">
        <p className="font-body text-xs text-cream/25">© {new Date().getFullYear()} Gee Pastries. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;