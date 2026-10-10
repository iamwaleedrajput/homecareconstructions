import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import FeaturedSection from "./FeaturedSection";
import HaveAnyProject from "./HaveAnyPRoject";
import ProcessSection from "./ProcessSection";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSection from "./TestimonialsSection";

export default function HomeView() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <FeaturedSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <HaveAnyProject />
    </div>
  );
}
