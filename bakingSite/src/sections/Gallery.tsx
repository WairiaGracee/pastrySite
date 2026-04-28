import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import sourdough from "../assets/sourdough.jpg";
import lemonTart from "../assets/lemonTart.jpg";
import croissant from "../assets/butterCroissant.jpg";
import celebrationCake from "../assets/celebrationCake.jpg";
import brownie from "../assets/brownie.jpg";
import custom from "../assets/custom.jpg";

const items = [
  { image: sourdough, label: "Sourdough" },
  { image: croissant, label: "Croissants" },
  { image: celebrationCake, label: "Celebration Cake" },
  { image: custom, label: "Cupcakes" },
  { image: brownie, label: "Brownies" },
  { image: lemonTart, label: "Lemon Tart" },
];

// Reusable image card with blur-up loading
const GalleryCard: React.FC<{ image: string; label: string; tall?: boolean; delay: number }> = ({
  image, label, tall = false, delay,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group relative bg-cream-dark rounded-2xl overflow-hidden border border-cream-dark hover:border-blush/40 hover:shadow-md transition-all duration-300 ${
        tall ? "row-span-2" : ""
      }`}
      style={{
        minHeight: tall ? "320px" : "150px",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Skeleton shimmer — shown while image loads */}
      <div
        className={`absolute inset-0 bg-cream-dark transition-opacity duration-500 ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{
          background: "linear-gradient(90deg, #E8DDD0 25%, #F0EAE0 50%, #E8DDD0 75%)",
          backgroundSize: "200% 100%",
          animation: loaded ? "none" : "shimmer 1.5s infinite",
        }}
      />

      {/* Actual image — blurred until loaded */}
      <img
        src={image}
        alt={label}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />

      {/* Dark gradient at bottom for label readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="font-body text-xs sm:text-sm text-white font-medium">{label}</p>
      </div>

      {/* Blush hover overlay */}
      <div className="absolute inset-0 bg-blush/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

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

        {/* Grid — 2 col mobile, 3 col md+ */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ gridAutoRows: "150px" }}
        >
          {items.map((item, i) => (
            <GalleryCard
              key={i}
              image={item.image}
              label={item.label}
              tall={i === 0}
              delay={i * 60}
            />
          ))}
        </div>

        <p className={`text-center mt-6 font-body text-sm text-espresso/40 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          📸 Follow us on Instagram{" "}
          <a href="#" className="text-blush hover:text-espresso transition-colors duration-300 font-medium">
            @sweetcrumbbakery
          </a>{" "}
          for daily updates
        </p>
      </div>
    </section>
  );
};

export default Gallery;