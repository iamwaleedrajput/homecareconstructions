import { Container, Grid } from "@mui/material";
import React from "react";
import Lines from "../components/Lines";
import type { TitledItem } from "@/lib/site";

export default function ValuesSection({
  eyebrow,
  title,
  highlight,
  values,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  values: TitledItem[];
}) {
  return (
    <div className="values-section">
      <Container>
        <div className="section-intro centered">
          <span className="section-eyebrow">{eyebrow}</span>
          <Lines text={title} highlight={highlight} />
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
