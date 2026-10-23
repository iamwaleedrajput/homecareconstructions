import { Container, Grid } from "@mui/material";
import classNames from "classnames";
import React from "react";
import type { TitledItem } from "@/lib/site";

export default function StatsSection({ stats }: { stats: TitledItem[] }) {
  return (
    <div className="stats-section">
      <Container>
        <Grid container>
          {stats.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={`${item.subtitle}-${index}`}>
              <div
                className={classNames("process-card", {
                  borderNone: index === stats.length - 1,
                })}
              >
                <h1>{item.title.replace(/\+$/, "")}+</h1>
                <h3>{item.subtitle}</h3>
                <p>{item.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
