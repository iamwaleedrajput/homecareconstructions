import { Container, Grid } from "@mui/material";
import React from "react";
import Lines from "../components/Lines";
import type { WhyContent } from "@/lib/site";

export default function WhyChooseUs({ content }: { content: WhyContent }) {
  return (
    <div className="why-section">
      <Container>
        <div className="section-intro">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <Lines text={content.title} highlight={content.titleHighlight} />
        </div>
        <Grid container spacing={3}>
          {content.items.map((reason, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={`${reason.title}-${index}`}>
              <div className="why-card">
                <span className="why-number">0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
