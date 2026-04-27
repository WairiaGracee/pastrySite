import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Placeholder gallery items with emoji + label
// Replace with real <img> tags pointing to your photos when ready
const items = [
  { emoji: "🍞", label: "Sourdough", span: "col-span-1 row-span-2" },
  { emoji: "🥐", label: "Croissants", span: "col-span-1 row-span-1" },
  { emoji: "🎂", label: "Celebration Cake", span: "col-span-1 row-span-1" },
  { emoji: "🧁", label: "Cupcakes", span: "col-span-1 row-span-1" },
  { emoji: "🍫", label: "Brownies", span: "col-span-1 row-span-1" },
  { emoji: "🥧", label: "Lemon Tart", span: "col-span-1 row-span-1" },
];

const Gallery: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="section-pad bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-xs text-blush uppercase tracking-widest mb-3">— Our Work</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-espresso leading-tight">
            Made to be<br /><span className="italic text-blush">admired first.</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {items.map((item, i) => (
            <div key={i}
              className={`group relative bg-cream rounded-2xl overflow-hidden border border-cream-dark hover:border-blush/40 transition-all duration-300 hover:shadow-md ${
                i === 0 ? "row-span-2" : ""
              }`}
              style={{
                minHeight: i === 0 ? "280px" : "130px",
                transitionDelay: `${i * 60}ms`
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className={`${i === 0 ? "text-6xl" : "text-4xl"} group-hover:scale-110 transition-transform duration-500`}>
                  {item.emoji}
                </span>
                <p className="font-body text-xs text-espresso/50 font-medium">{item.label}</p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blush/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        <p className={`text-center mt-6 font-body text-sm text-espresso/40 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          📸 Follow us on Instagram{" "}
          <a href="#" className="text-blush hover:text-espresso transition-colors duration-300 font-medium">@sweetcrumbbakery</a>{" "}
          for daily updates
        </p>
      </div>
    </section>
  );
};

export default Gallery;