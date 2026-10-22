import { Container, Grid } from "@mui/material";
import classNames from "classnames";
import React from "react";
import Lines from "../components/Lines";
import type { ProcessContent } from "@/lib/site";

export default function ProcessSection({ content }: { content: ProcessContent }) {
  return (
    <div className="process-section">
      <Container>
        <div className="section-intro">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <Lines text={content.title} highlight={content.titleHighlight} />
        </div>
        <Grid container>
          {content.steps.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={`${item.title}-${index}`}>
              <div
                className={classNames("process-card", {
                  borderNone: index === content.steps.length - 1,
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
