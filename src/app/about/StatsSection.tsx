import { Container, Grid } from "@mui/material";
import classNames from "classnames";
import React from "react";

export default function StatsSection() {
  const stats = [
    {
      title: "150",
      subTitle: "Happy Clients",
      description: "Building lasting relationships",
    },
    {
      title: "200",
      subTitle: "Projects Completed",
      description: "Ideas brought to life",
    },
    {
      title: "50",
      subTitle: "Skilled Workers",
      description: "Craftsmanship you can trust",
    },
  ];

  return (
    <div className="stats-section">
      <Container>
        <Grid container>
          {stats.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.subTitle}>
              <div
                className={classNames("process-card", {
                  borderNone: index === 2,
                })}
              >
                <h1>{item.title}+</h1>
                <h3>{item.subTitle}</h3>
                <p>{item.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
