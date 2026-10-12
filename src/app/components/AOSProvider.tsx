"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const animatedSelectors = [
  ".page-hero-inner",
  ".gallery-hero-content",
  ".about-section",
  ".about-intro",
  ".process-section",
  ".service-section",
  ".featured-section",
  ".why-section",
  ".testimonials-section",
  ".have-any-project",
  ".values-section",
  ".stats-section",
  ".gallery-header",
  ".contact-layout-grid",
  ".contact-studio-grid",
  ".kitchen-included-section",
  ".kitchen-extras-section",
  ".kitchen-why-section",
  ".value-card",
  ".process-card",
  ".service-item",
  ".featured-card",
  ".why-card",
  ".testimonial-card",
  ".kitchen-package-card",
  ".kitchen-included-list li",
  ".kitchen-reasons-list li",
  ".MuiImageListItem-root",
].join(",");

export default function AOSProvider() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(animatedSelectors);

    elements.forEach((element, index) => {
      if (element.hasAttribute("data-aos")) return;

      const isCard = element.matches(
        ".value-card, .process-card, .service-item, .featured-card, .why-card, .testimonial-card, .kitchen-package-card, .kitchen-included-list li, .kitchen-reasons-list li, .MuiImageListItem-root",
      );

      element.setAttribute("data-aos", "fade-up");
      element.setAttribute("data-aos-duration", "750");

      if (isCard) {
        element.setAttribute("data-aos-delay", String((index % 4) * 90));
      }
    });

    if (!initialized.current) {
      AOS.init({
        duration: 750,
        easing: "ease-out-cubic",
        once: true,
        offset: 90,
        mirror: false,
        disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
      initialized.current = true;
    } else {
      AOS.refreshHard();
    }
  }, [pathname]);

  return null;
}
