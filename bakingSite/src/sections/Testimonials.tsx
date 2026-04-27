import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Amina W.", role: "Regular Customer", review: "I've tried nearly every bakery in Nairobi. Nothing comes close to SweetCrumb's sourdough. It's the first thing I think about on Saturday mornings.", rating: 5 },
  { name: "David K.", role: "Wedding Client", review: "They made our 3-tier wedding cake and it was stunning — looked exactly like the reference photo and tasted even better. Our guests were obsessed.", rating: 5 },
  { name: "Grace M.", role: "Corporate Client", review: "We ordered pastry boxes for a client breakfast and everyone asked where they were from. Now it's our go-to for all company events. Highly recommend.", rating: 5 },
  { name: "Brian O.", role: "Birthday Order", review: "Ordered a custom cake for my daughter's 5th birthday with 48 hours notice. They delivered a masterpiece. Will absolutely order again.", rating: 5 },
];

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);
  const prev = () => setActive(a => a === 0 ? testimonials.length - 1 : a - 1);
  const next = () => setActive(a => a === testimonials.length - 1 ? 0 : a + 1);

  return (
    <section id="testimonials" className="section-pad bg-cream overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-xs text-blush uppercase tracking-widest mb-3">— Happy Customers</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-espresso leading-tight">
            Don't take<br /><span className="italic text-blush">our word for it.</span>
          </h2>
        </div>

        {/* Card */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div key={active} className="bg-white rounded-3xl p-7 md:p-12 border border-cream-dark shadow-sm relative overflow-hidden">
            {/* Decorative quote mark */}
            <span className="absolute top-4 right-8 font-display text-[7rem] text-cream-dark leading-none select-none">"</span>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} size={15} className="text-blush" fill="#F2A7A7" />
              ))}
            </div>

            <p className="font-display text-xl md:text-2xl italic font-medium text-espresso leading-relaxed mb-7 relative z-10">
              "{testimonials[active].review}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blush-pale border border-blush/30 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-espresso text-lg font-semibold">{testimonials[active].name[0]}</span>
              </div>
              <div>
                <p className="font-body font-semibold text-espresso text-sm">{testimonials[active].name}</p>
                <p className="font-body text-espresso/40 text-xs">{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} aria-label="Previous"
              className="w-11 h-11 rounded-full border border-cream-dark bg-white flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream hover:border-espresso transition-all duration-300">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Go to ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === active ? "w-7 h-2 bg-espresso" : "w-2 h-2 bg-cream-mid hover:bg-espresso/30"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next"
              className="w-11 h-11 rounded-full border border-cream-dark bg-white flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream hover:border-espresso transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;