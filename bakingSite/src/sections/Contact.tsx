import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  { icon: <Phone size={17} className="text-blush" />, label: "Phone", value: "+254 700 000 000", href: "tel:+254700000000" },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F2A7A7" className="w-[17px] h-[17px]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>,
    label: "WhatsApp", value: "+254 700 000 000", href: "https://wa.me/254700000000?text=Hi!%20I'd%20like%20to%20place%20an%20order."
  },
  { icon: <Mail size={17} className="text-blush" />, label: "Email", value: "hello@sweetcrumbbakery.com", href: "mailto:hello@sweetcrumbbakery.com" },
  { icon: <MapPin size={17} className="text-blush" />, label: "Location", value: "Westlands, Nairobi", href: null },
];

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", orderType: "", details: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.phone && form.details) setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Info side */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <p className="font-body text-xs text-blush uppercase tracking-widest mb-4">— Place an Order</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso leading-tight mb-5">
            Let's bake<br /><span className="italic text-blush">something special.</span>
          </h2>
          <p className="font-body text-espresso/60 text-base leading-relaxed mb-8">
            Whether it's a weekly bread order or a once-in-a-lifetime wedding cake — we'd love to hear from you. Fill in the form or reach out directly below.
          </p>

          <div className="flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-blush-pale border border-blush/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-body text-[10px] text-espresso/40 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="font-body text-espresso text-sm hover:text-blush transition-colors duration-300">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-espresso text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Opening hours */}
          <div className="mt-8 p-5 bg-cream rounded-2xl border border-cream-dark">
            <p className="font-body font-semibold text-espresso text-sm mb-3">🕕 Opening Hours</p>
            <div className="flex flex-col gap-1.5 font-body text-sm text-espresso/60">
              <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium text-espresso">6:00am – 7:00pm</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-espresso">6:00am – 5:00pm</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-espresso">7:00am – 2:00pm</span></div>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          {submitted ? (
            <div className="bg-cream border border-cream-dark rounded-3xl p-10 text-center">
              <div className="text-5xl mb-5">🥐</div>
              <h3 className="font-display text-3xl font-semibold text-espresso mb-3">Order Received!</h3>
              <p className="font-body text-espresso/60 text-sm leading-relaxed">
                Thank you! We'll be in touch within a few hours to confirm the details and discuss your order. Can't wait to bake for you!
              </p>
            </div>
          ) : (
            <div className="bg-cream border border-cream-dark rounded-3xl p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-body text-xs text-espresso/50 uppercase tracking-wider block mb-1.5">Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe"
                    className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 font-body text-espresso text-sm placeholder-espresso/25 focus:outline-none focus:border-blush transition-colors duration-300" />
                </div>
                <div>
                  <label className="font-body text-xs text-espresso/50 uppercase tracking-wider block mb-1.5">Phone / WhatsApp</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX"
                    className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 font-body text-espresso text-sm placeholder-espresso/25 focus:outline-none focus:border-blush transition-colors duration-300" />
                </div>
                <div>
                  <label className="font-body text-xs text-espresso/50 uppercase tracking-wider block mb-1.5">Order Type</label>
                  <select name="orderType" value={form.orderType} onChange={handleChange}
                    className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 font-body text-espresso text-sm focus:outline-none focus:border-blush transition-colors duration-300">
                    <option value="">Select an order type...</option>
                    <option>Regular / Weekly Order</option>
                    <option>Custom Cake</option>
                    <option>Wedding / Event Order</option>
                    <option>Corporate Catering</option>
                    <option>Pastry Box</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs text-espresso/50 uppercase tracking-wider block mb-1.5">Required Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 font-body text-espresso text-sm focus:outline-none focus:border-blush transition-colors duration-300" />
                </div>
                <div>
                  <label className="font-body text-xs text-espresso/50 uppercase tracking-wider block mb-1.5">Order Details</label>
                  <textarea name="details" value={form.details} onChange={handleChange} rows={3}
                    placeholder="Tell us what you'd like — flavours, sizes, dietary needs, design ideas..."
                    className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 font-body text-espresso text-sm placeholder-espresso/25 focus:outline-none focus:border-blush transition-colors duration-300 resize-none" />
                </div>
                <button onClick={handleSubmit}
                  className="group w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-espresso text-cream font-body font-medium text-sm rounded-xl hover:bg-espresso-mid transition-all duration-300 hover:shadow-lg">
                  <span>Send Order Request</span>
                  <Send size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;