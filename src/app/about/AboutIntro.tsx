import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../@assets/images/misc/1.jpg";
import img2 from "../@assets/images/misc/2.jpg";
import img3 from "../@assets/images/misc/3.jpg";
import Lines from "../components/Lines";
import CmsImage from "../components/CmsImage";
import type { StoryContent } from "@/lib/site";

export default function AboutIntro({ content }: { content: StoryContent }) {
  return (
    <div className="about-intro">
      <Container>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="about-media">
              <div className="about-media-frame" aria-hidden="true" />

              <div className="about-media-main">
                <CmsImage
                  alt={content.mainImageAlt}
                  src={content.mainImageUrl}
                  fallback={img}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="about-media-img"
                  priority
                />
              </div>

              <div className="about-media-secondary">
                <div className="about-media-secondary-inner">
                  <CmsImage
                    alt={content.secondaryImageAlt}
                    src={content.secondaryImageUrl}
                    fallback={img2}
                    fill
                    sizes="(max-width: 900px) 60vw, 28vw"
                    className="about-media-img"
                  />
                </div>
              </div>

              <div className="about-media-accent">
                <CmsImage
                  alt={content.accentImageAlt}
                  src={content.accentImageUrl}
                  fallback={img3}
                  fill
                  sizes="(max-width: 900px) 40vw, 18vw"
                  className="about-media-img"
                />
              </div>

              <div className="about-media-caption">
                <strong>{content.captionStrong}</strong>
                <span>{content.captionSpan}</span>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="about-intro-copy">
              <span className="section-eyebrow">{content.eyebrow}</span>
              <Lines text={content.title} highlight={content.titleHighlight} />
              <p>{content.paragraphOne}</p>
              <p>{content.paragraphTwo}</p>
              <ul className="about-intro-points">
                {content.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
