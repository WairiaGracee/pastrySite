import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import sourdough from "../assets/sourdough.jpg";
import foccacia from "../assets/Foccacia.jpg";
import lemonTart from "../assets/lemonTart.jpg";
import croissant from "../assets/butterCroissant.jpg";
import celebrationCake from "../assets/celebrationCake.jpg";
import carrotCake from "../assets/carrotCake.jpg";
import brownie from "../assets/brownie.jpg";
import custom from "../assets/custom.jpg";


type Category = "All" | "Breads" | "Cakes" | "Pastries" | "Custom";

const categories: Category[] = ["All", "Breads", "Cakes", "Pastries", "Custom"];

const products = [
  { image: sourdough, name: "Classic Sourdough", desc: "Long-fermented, crusty outside, pillowy inside.", price: "KSh 550", category: "Breads", tag: "Bestseller" },
  { image: foccacia, name: "Rosemary Focaccia", desc: "Olive oil-drenched with sea salt and fresh herbs.", price: "KSh 480", category: "Breads", tag: null },
  {image: croissant, name: "Butter Croissant", desc: "72-hour laminated dough. Flaky, buttery, golden.", price: "KSh 200", category: "Pastries", tag: "Daily Fresh" },
  { image: lemonTart, name: "Lemon Tart", desc: "Sharp curd in a crisp shortcrust shell.", price: "KSh 350", category: "Pastries", tag: null },
  { image: celebrationCake, name: "Celebration Cake", desc: "Custom-designed layer cakes for any occasion.", price: "From KSh 3,500", category: "Cakes", tag: "Popular" },
  { image: carrotCake, name: "Carrot Cake", desc: "Moist, spiced, cream-cheese frosted.", price: "KSh 400 / slice", category: "Cakes", tag: null },
  { image: brownie, name: "Dark Chocolate Brownie", desc: "Dense, fudgy, 70% cocoa. No compromise.", price: "KSh 180", category: "Pastries", tag: "Fan Favourite" },
  { image: custom, name: "Custom Order", desc: "Corporate gifting, weddings, baby showers — let's talk.", price: "Quote on request", category: "Custom", tag: null },
];

const Menu: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  return (
    <section id="menu" className="section-pad bg-cream overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-xs text-blush uppercase tracking-widest mb-3">— What We Make</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-espresso leading-tight">
            Fresh from our<br /><span className="italic text-blush">oven to you.</span>
          </h2>
        </div>

        {/* Category filter — scrollable on mobile */}
        <div className={`flex gap-2 overflow-x-auto pb-2 justify-start sm:justify-center mb-10 transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-espresso text-cream shadow-md"
                  : "bg-white text-espresso/60 border border-cream-dark hover:border-espresso/30"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid — 1 col → 2 col sm → 3 col lg → 4 col xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((p, i) => (
            <div key={i}
              className={`group relative bg-white rounded-2xl border border-cream-dark hover:border-blush/50 hover:shadow-md transition-all duration-300 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${100 + i * 60}ms` }}
            >
              {p.tag && (
                <span className="absolute top-3 right-3 text-[10px] font-body font-semibold bg-blush-pale text-espresso-soft px-2.5 py-1 rounded-full border border-blush/30">
                  {p.tag}
                </span>
              )}
              {/* Image display */}
              <div className="h-32 sm:h-36 overflow-hidden">
                <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-xl font-semibold text-espresso mb-1">{p.name}</h3>
                <p className="font-body text-espresso/50 text-sm leading-relaxed mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-espresso text-sm">{p.price}</span>
                  <a href="#contact" className="text-xs font-body font-medium text-blush hover:text-espresso transition-colors duration-300">
                    Order →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;