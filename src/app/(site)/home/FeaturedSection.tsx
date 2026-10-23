import { Container, Grid } from "@mui/material";
import React from "react";
import img1 from "../@assets/images/misc/1.jpg";
import img2 from "../@assets/images/misc/2.jpg";
import img3 from "../@assets/images/misc/3.jpg";
import Link from "next/link";
import Lines from "../components/Lines";
import CmsImage from "../components/CmsImage";
import type { FeaturedContent } from "@/lib/site";
import type { StaticImageData } from "next/image";

const fallbacks: StaticImageData[] = [img1, img2, img3];

export default function FeaturedSection({ content }: { content: FeaturedContent }) {
  return (
    <Container>
      <div className="featured-section">
        <div className="section-intro centered">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <Lines text={content.title} highlight={content.titleHighlight} />
        </div>
        <Grid container spacing={3}>
          {content.projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`${project.title}-${index}`}>
              <div className="featured-card">
                <CmsImage
                  src={project.imageUrl}
                  fallback={fallbacks[index % fallbacks.length]}
                  alt={project.alt || project.title}
                  fill
                  className="main-img"
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className="featured-footer">
          <Link href={content.linkHref} className="section-link">
            {content.linkLabel}
          </Link>
        </div>
      </div>
    </Container>
  );
}
