import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutIntro from "./AboutIntro";
import StatsSection from "./StatsSection";
import WhyChooseUs from "../home/WhyChooseUs";
import HaveAnyProject from "../home/HaveAnyPRoject";
import ValuesSection from "./ValuesSection";

export default function page() {
  return (
    <div>
      <Breadcrumb
        title="About"
        subtitle="Designers and builders shaping spaces that last."
      />
      <AboutIntro />
      <ValuesSection />
      <StatsSection />
      <WhyChooseUs />
      <HaveAnyProject />
    </div>
  );
}
