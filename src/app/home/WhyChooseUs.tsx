import { Container, Grid } from "@mui/material";
import React from "react";

const reasons = [
  {
    title: "One team, end to end",
    description:
      "Design and construction under one roof — fewer handoffs, clearer accountability, better results.",
  },
  {
    title: "Detail-driven craft",
    description:
      "Materials, finishes, and joinery chosen with care so every space feels considered and lasting.",
  },
  {
    title: "Transparent process",
    description:
      "Clear timelines, honest budgets, and regular updates so you always know where things stand.",
  },
  {
    title: "Built around how you live",
    description:
      "We design for real routines — not just photos — so your home works as beautifully as it looks.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="why-section">
      <Container>
        <div className="section-intro">
          <span className="section-eyebrow">WHY US</span>
          <h2>
            Built on trust,
            <br />
            <span>finished with care</span>
          </h2>
        </div>
        <Grid container spacing={3}>
          {reasons.map((reason, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={reason.title}>
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
