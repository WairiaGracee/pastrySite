import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Heart, Leaf, ShieldCheck } from "lucide-react";

const values = [
  { icon: <Heart size={18} className="text-blush" />, title: "Made with love", desc: "Every item is shaped by hand. No shortcuts, no mass production." },
  { icon: <Leaf size={18} className="text-blush" />, title: "Fresh ingredients", desc: "We source locally where possible and bake in small batches daily." },
  { icon: <ShieldCheck size={18} className="text-blush" />, title: "Quality guaranteed", desc: "If it's not perfect, it doesn't leave our kitchen. Simple as that." },
];

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-pad bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Visual side */}
        <div className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          {/* Main card */}
          <div className="relative bg-cream rounded-3xl p-8 md:p-12 border border-cream-dark overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blush-pale rounded-bl-[4rem] pointer-events-none" />
            <p className="font-display text-5xl md:text-6xl font-semibold text-espresso leading-tight relative z-10 mb-4">
              "We bake<br />
              <span className="italic text-blush">with intention."</span>
            </p>
            <p className="font-body text-espresso/60 text-sm leading-relaxed">
              Founded in 2019 out of a tiny home kitchen, geePastries grew from weekend sourdough experiments into a full artisan bakery trusted by hundreds of families across Nairobi.
            </p>
          </div>

          {/* Floating stat */}
          <div className="absolute -bottom-5 -right-3 bg-espresso text-cream rounded-2xl px-5 py-3 shadow-xl">
            <p className="font-display text-3xl font-semibold">1000+</p>
            <p className="font-body text-xs text-cream/70 mt-0.5">Orders fulfilled</p>
          </div>
        </div>

        {/* Text side */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <p className="font-body text-xs text-blush uppercase tracking-widest mb-4">— Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso leading-tight mb-5">
            Small batch.<br />Big flavour.
          </h2>
          <p className="font-body text-espresso/60 text-base leading-relaxed mb-8">
            We believe that great baking doesn't need a factory — it needs patience, quality flour, and someone who genuinely cares about what ends up on your table. That's us. A small team, a small kitchen, and an outsized passion for the craft.
          </p>

          {/* Values */}
          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-cream-dark bg-cream hover:border-blush/40 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-blush-pale flex items-center justify-center flex-shrink-0">{v.icon}</div>
                <div>
                  <p className="font-body font-semibold text-espresso text-sm mb-0.5">{v.title}</p>
                  <p className="font-body text-espresso/50 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;