import { Container, Grid } from "@mui/material";
import React from "react";

const values = [
  {
    title: "Integrity",
    description:
      "Honest guidance on scope, cost, and timeline — no surprises along the way.",
  },
  {
    title: "Craft",
    description:
      "Every joint, finish, and detail is treated as part of the finished story.",
  },
  {
    title: "Collaboration",
    description:
      "Your taste and our expertise work together from the first conversation.",
  },
];

export default function ValuesSection() {
  return (
    <div className="values-section">
      <Container>
        <div className="section-intro centered">
          <span className="section-eyebrow">WHAT DRIVES US</span>
          <h2>
            Principles behind
            <br />
            <span>every build</span>
          </h2>
        </div>
        <Grid container spacing={4}>
          {values.map((value) => (
            <Grid size={{ xs: 12, md: 4 }} key={value.title}>
              <div className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
