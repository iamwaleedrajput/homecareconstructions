import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../@assets/images/misc/1.jpg";
import img2 from "../@assets/images/misc/2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="about-section">
      <Container>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="home-about-media">
              <div className="home-about-frame" aria-hidden="true" />

              <div className="home-about-main">
                <Image
                  alt="Completed interior by Home Care Constructions"
                  src={img}
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                  className="home-about-img"
                />
              </div>

              <div className="home-about-inset">
                <Image
                  alt="Craftsmanship and finish detail"
                  src={img2}
                  fill
                  sizes="(max-width: 900px) 70vw, 28vw"
                  className="home-about-img"
                />
              </div>

              <div className="home-about-badge">
                <strong>15+</strong>
                <span>Years of craft</span>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="home-about-copy">
              <span className="section-eyebrow">ABOUT US</span>
              <h2>
                Envision.
                <br />
                Create.
                <br />
                <span>Transform</span>
              </h2>
              <p>
                We transform spaces into thoughtfully designed environments that
                reflect your style, inspire everyday living, and stand the test
                of time.
              </p>
              <p>
                From concept to completion, we bring your vision to life with
                creativity, precision, and craftsmanship.
              </p>

              <div className="home-about-facts">
                <div>
                  <strong>Design</strong>
                  <span>Interiors with intent</span>
                </div>
                <div>
                  <strong>Build</strong>
                  <span>Execution you can trust</span>
                </div>
              </div>

              <Link href="/about" className="section-link">
                Learn more about us
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
