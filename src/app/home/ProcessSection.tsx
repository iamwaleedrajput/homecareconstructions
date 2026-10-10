import { Container, Grid } from "@mui/material";
import classNames from "classnames";
import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Consult",
      description:
        "We listen to your vision, understand how you live, and define goals that balance beauty, comfort, and budget.",
    },
    {
      title: "Design",
      description:
        "Concepts become detailed plans — layouts, materials, and finishes shaped with clarity and purpose.",
    },
    {
      title: "Build",
      description:
        "Expert execution, quality materials, and careful craftsmanship take every detail from foundation to final finish.",
    },
  ];

  return (
    <div className="process-section">
      <Container>
        <div className="section-intro">
          <span className="section-eyebrow">HOW WE WORK</span>
          <h2>
            A clear path
            <br />
            <span>from idea to home</span>
          </h2>
        </div>
        <Grid container>
          {steps.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <div
                className={classNames("process-card", {
                  borderNone: index === 2,
                })}
              >
                <div className="number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
