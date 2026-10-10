import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Interior Design",
    description:
      "Spaces shaped around your lifestyle — balanced, beautiful, and built to feel like home.",
  },
  {
    title: "Space Planning",
    description:
      "Smart layouts that improve flow, light, and everyday function before a single wall moves.",
  },
  {
    title: "3D Visualization",
    description:
      "See finishes, furniture, and proportions clearly so decisions feel confident, not guessed.",
  },
  {
    title: "Custom Furniture",
    description:
      "Bespoke pieces tailored to your rooms — measured, crafted, and finished to last.",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "From kitchens to full-home refreshes — thoughtful upgrades with careful site execution.",
  },
  {
    title: "Construction & Execution",
    description:
      "Quality build-out from foundation to final finish, managed with precision and care.",
  },
];

export default function ServicesSection() {
  return (
    <div className="service-section">
      <Container>
        <div className="service-header">
          <div>
            <span className="section-eyebrow light">WHAT WE OFFER</span>
            <h2>
              Services that
              <br />
              <span>shape every space</span>
            </h2>
          </div>
          <p>
            Design, planning, and construction — handled as one process so your
            project stays clear from first idea to final handover.
          </p>
        </div>

        <Grid container spacing={0} className="service-grid">
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.title}>
              <article className="service-item">
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </Grid>
          ))}
        </Grid>

        <div className="service-footer">
          <Link href="/contact-us" className="hero-btn hero-btn-primary">
            Discuss your project
          </Link>
        </div>
      </Container>
    </div>
  );
}
