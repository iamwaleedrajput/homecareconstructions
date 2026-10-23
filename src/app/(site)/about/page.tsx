import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutIntro from "./AboutIntro";
import StatsSection from "./StatsSection";
import WhyChooseUs from "../home/WhyChooseUs";
import HaveAnyProject from "../home/HaveAnyPRoject";
import ValuesSection from "./ValuesSection";
import { getAboutPage, getGlobal, pageMetadata } from "@/lib/site";

export async function generateMetadata() {
  const about = await getAboutPage();
  return pageMetadata(about.seo);
}

export default async function page() {
  const [about, global] = await Promise.all([getAboutPage(), getGlobal()]);

  return (
    <div>
      <Breadcrumb
        title={about.breadcrumbTitle}
        subtitle={about.breadcrumbSubtitle}
        label={global.siteName}
        imageUrl={about.heroImageUrl}
      />
      <AboutIntro content={about.story} />
      <ValuesSection
        eyebrow={about.valuesEyebrow}
        title={about.valuesTitle}
        highlight={about.valuesHighlight}
        values={about.values}
      />
      <StatsSection stats={about.stats} />
      <WhyChooseUs content={about.why} />
      <HaveAnyProject content={about.cta} />
    </div>
  );
}
