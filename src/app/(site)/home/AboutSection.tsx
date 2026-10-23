import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../@assets/images/misc/1.jpg";
import img2 from "../@assets/images/misc/2.jpg";
import Link from "next/link";
import Lines from "../components/Lines";
import CmsImage from "../components/CmsImage";
import type { HomeAboutContent } from "@/lib/site";

export default function AboutSection({ content }: { content: HomeAboutContent }) {
  return (
    <div className="about-section">
      <Container>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="home-about-media">
              <div className="home-about-frame" aria-hidden="true" />

              <div className="home-about-main">
                <CmsImage
                  alt={content.mainImageAlt}
                  src={content.mainImageUrl}
                  fallback={img}
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                  className="home-about-img"
                />
              </div>

              <div className="home-about-inset">
                <CmsImage
                  alt={content.insetImageAlt}
                  src={content.insetImageUrl}
                  fallback={img2}
                  fill
                  sizes="(max-width: 900px) 70vw, 28vw"
                  className="home-about-img"
                />
              </div>

              <div className="home-about-badge">
                <strong>{content.badgeValue}</strong>
                <span>{content.badgeLabel}</span>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="home-about-copy">
              <span className="section-eyebrow">{content.eyebrow}</span>
              <Lines text={content.title} highlight={content.titleHighlight} />
              <p>{content.paragraphOne}</p>
              <p>{content.paragraphTwo}</p>

              <div className="home-about-facts">
                {content.facts.map((fact) => (
                  <div key={fact.title}>
                    <strong>{fact.title}</strong>
                    <span>{fact.subtitle}</span>
                  </div>
                ))}
              </div>

              <Link href={content.linkHref} className="section-link">
                {content.linkLabel}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
