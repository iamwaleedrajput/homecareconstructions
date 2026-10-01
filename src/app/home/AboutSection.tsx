import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../@assets/images/misc/1.jpg";
import img2 from "../@assets/images/misc/2.jpg";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="about-section">
      <Container>
        <Grid container spacing={5}>
          <Grid size={{ md: 6 }}>
            <div className="image-section">
              <Image alt="" src={img} className="img1" />

              <div className="img2">
                <Image alt="" src={img2} />
              </div>
            </div>
          </Grid>
          <Grid size={{ md: 6 }}>
            <h2>
              Envision.
              <br />
              Create.
              <br />
              <span>Transform</span>
            </h2>
            <p>
              We transform spaces into thoughtfully designed environments that
              reflect your style, inspire everyday living, and stand the test of
              time.
            </p>
            <p className="tags">
              Interior Design • Architecture • Construction
            </p>
            <p>
              From concept to completion, we bring your vision to life with
              creativity, precision, and craftsmanship.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
