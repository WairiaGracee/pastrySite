import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Clock, Package, Smile, Star, Truck, UtensilsCrossed } from "lucide-react";

const reasons = [
  { icon: <Clock size={20} className="text-blush" />, title: "Fresh daily by 6am", desc: "We bake through the night so everything is ready at sunrise." },
  { icon: <UtensilsCrossed size={20} className="text-blush" />, title: "No preservatives", desc: "Real ingredients only. What you see on the label is what's in the loaf." },
  { icon: <Smile size={20} className="text-blush" />, title: "Custom orders welcome", desc: "Birthday, wedding, corporate — we'll create something just for you." },
  { icon: <Star size={20} className="text-blush" />, title: "Consistently 5-star", desc: "Rated highly by hundreds of customers across Nairobi." },
  { icon: <Package size={20} className="text-blush" />, title: "Beautiful packaging", desc: "Gift-ready boxes for every order. Perfect for gifting." },
  { icon: <Truck size={20} className="text-blush" />, title: "Delivery available", desc: "We deliver across Nairobi. Order before 8pm for next-morning delivery." },
];

const WhyUs: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="section-pad bg-espresso overflow-hidden relative">
      {/* Decorative blush blob */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blush/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blush/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-xs text-blush uppercase tracking-widest mb-3">— Why geePastries</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight">
            More than a bakery.<br />
            <span className="italic text-blush">A tradition.</span>
          </h2>
          <p className="font-body text-cream/50 text-base max-w-xl mx-auto mt-4 leading-relaxed">
            We know you have options. Here's why our customers keep coming back.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((r, i) => (
            <div key={i}
              className={`flex items-start gap-4 p-5 md:p-6 rounded-2xl border border-espresso-soft/30 bg-espresso-light hover:border-blush/40 group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${80 + i * 70}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-blush/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blush/20 transition-colors duration-300">
                {r.icon}
              </div>
              <div>
                <h3 className="font-body font-semibold text-cream text-sm mb-1">{r.title}</h3>
                <p className="font-body text-cream/40 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className={`mt-12 bg-blush-pale rounded-3xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-espresso mb-1">Ready to order?</h3>
            <p className="font-body text-espresso/60 text-sm">Tell us what you need — we'll make it happen.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 w-full md:w-auto text-center px-7 py-3.5 bg-espresso text-cream font-body font-medium text-sm rounded-full hover:bg-espresso-mid transition-all duration-300 shadow-md">
            Place an Order →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;