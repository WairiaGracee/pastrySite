import React, { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImg from "../assets/heroImg.jpg";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream">

      {/* Decorative blush circles — purely visual, desktop only */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[32rem] md:h-[32rem] rounded-full bg-blush-light/40 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full bg-cream-dark/60 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(circle, #8B6347 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blush bg-blush-pale mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Sparkles size={13} className="text-blush" />
              <span className="font-body text-xs text-espresso-soft font-medium tracking-wider uppercase">Handcrafted with Love</span>
            </div>

            {/* Heading */}
            <h1 className={`font-display font-semibold leading-[1.05] mb-5 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="block text-espresso text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl">Baked Fresh,</span>
              <span className="block text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl italic text-blush">Every Single</span>
              <span className="block text-espresso text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl">Morning.</span>
            </h1>

            <p className={`font-body text-espresso/60 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              From sourdough loaves to celebration cakes — everything we make is crafted from scratch using quality ingredients, traditional techniques, and a whole lot of care.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <a href="#menu" className="w-full sm:w-auto text-center px-7 py-3.5 bg-espresso text-cream font-body font-medium text-sm rounded-full hover:bg-espresso-mid transition-all duration-300 shadow-md hover:shadow-lg">
                Browse Our Menu
              </a>
              <a href="#contact" className="w-full sm:w-auto text-center px-7 py-3.5 border border-espresso/30 text-espresso font-body font-medium text-sm rounded-full hover:bg-cream-dark transition-all duration-300">
                Place a Custom Order
              </a>
            </div>
          </div>

          {/* Visual card — hidden on smallest, shown sm+ */}
          <div className={`hidden sm:block flex-shrink-0 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blush/40 animate-float" />
                {/* Inner card */}
                <div className="absolute inset-6 rounded-full overflow-hidden shadow-xl border border-cream-mid">
                    <img
                        src={heroImg}
                        alt="Fresh pastry"
                        className="w-full h-full object-cover"
                    />
                    </div>
                                    {/* Floating tags */}
                <div className="absolute top-4 -right-4 bg-white rounded-2xl px-3 py-2 shadow-md border border-cream-dark animate-float" style={{ animationDelay: "0.5s" }}>
                    <p className="font-body text-xs text-espresso font-semibold">⭐ 4.9 Rating</p>
                </div>
                <div className="absolute bottom-6 -left-5 bg-blush-pale rounded-2xl px-3 py-2 shadow-md border border-blush/30 animate-float" style={{ animationDelay: "1.2s" }}>
                    <p className="font-body text-xs text-espresso font-semibold">Fresh Daily</p>
                </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className={`mt-14 grid grid-cols-3 divide-x divide-cream-mid border border-cream-mid rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { val: "5+", label: "Years Baking" },
            { val: "50+", label: "Menu Items" },
            { val: "1000+", label: "Happy Clients" },
          ].map((s, i) => (
            <div key={i} className="py-5 px-3 text-center hover:bg-cream transition-colors duration-300">
              <p className="font-display text-3xl sm:text-4xl font-semibold text-espresso">{s.val}</p>
              <p className="font-body text-[10px] sm:text-xs text-espresso/40 uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-espresso/30 hover:text-espresso transition-colors duration-300 animate-float">
        <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={15} />
      </a>
    </section>
  );
};

export default Hero;