import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import FeaturedSection from "./FeaturedSection";
import HaveAnyProject from "./HaveAnyPRoject";
import ProcessSection from "./ProcessSection";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSection from "./TestimonialsSection";
import { getHomePage } from "@/lib/site";

export default async function HomeView() {
  const home = await getHomePage();

  return (
    <div>
      <Hero content={home.hero} />
      <AboutSection content={home.about} />
      <ProcessSection content={home.process} />
      <ServicesSection content={home.services} />
      <FeaturedSection content={home.featured} />
      <WhyChooseUs content={home.why} />
      <TestimonialsSection content={home.testimonials} />
      <HaveAnyProject content={home.cta} />
    </div>
  );
}
