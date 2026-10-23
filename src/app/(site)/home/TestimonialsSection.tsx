import { Container, Grid } from "@mui/material";
import React from "react";
import Lines from "../components/Lines";
import type { TestimonialsContent } from "@/lib/site";

export default function TestimonialsSection({
  content,
}: {
  content: TestimonialsContent;
}) {
  return (
    <div className="testimonials-section">
      <Container>
        <div className="section-intro centered">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <Lines text={content.title} highlight={content.titleHighlight} />
        </div>
        <Grid container spacing={4}>
          {content.items.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={`${item.name}-${index}`}>
              <blockquote className="testimonial-card">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
