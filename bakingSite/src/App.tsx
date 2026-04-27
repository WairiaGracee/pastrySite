import React from "react";
import Navbar from "./components/NavBar";
import FloatingContacts from "./components/FloatingContacts";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import WhyUs from "./sections/WhyUs";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import "./index.css";

const App: React.FC = () => (
  <div className="relative bg-cream text-espresso overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Menu />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <FloatingContacts />
  </div>
);

export default App;
