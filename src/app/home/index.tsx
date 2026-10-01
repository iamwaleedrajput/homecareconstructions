import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

export default function HomeView() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
