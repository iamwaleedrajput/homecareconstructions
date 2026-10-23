import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import Lines from "../components/Lines";
import type { ServicesContent } from "@/lib/site";

export default function ServicesSection({ content }: { content: ServicesContent }) {
  return (
    <div className="service-section">
      <Container>
        <div className="service-header">
          <div>
            <span className="section-eyebrow light">{content.eyebrow}</span>
            <Lines text={content.title} highlight={content.titleHighlight} />
          </div>
          <p>{content.intro}</p>
        </div>

        <Grid container spacing={0} className="service-grid">
          {content.items.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`${service.title}-${index}`}>
              <article className="service-item">
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </Grid>
          ))}
        </Grid>

        <div className="service-footer">
          <Link href={content.ctaHref} className="hero-btn hero-btn-primary">
            {content.ctaLabel}
          </Link>
        </div>
      </Container>
    </div>
  );
}
