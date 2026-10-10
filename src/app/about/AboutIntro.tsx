import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../@assets/images/misc/1.jpg";
import img2 from "../@assets/images/misc/2.jpg";
import img3 from "../@assets/images/misc/3.jpg";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <div className="about-intro">
      <Container>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="about-media">
              <div className="about-media-frame" aria-hidden="true" />

              <div className="about-media-main">
                <Image
                  alt="Completed home interior by Home Care Constructions"
                  src={img}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="about-media-img"
                  priority
                />
              </div>

              <div className="about-media-secondary">
                <div className="about-media-secondary-inner">
                  <Image
                    alt="Detail of craftsmanship and finishes"
                    src={img2}
                    fill
                    sizes="(max-width: 900px) 60vw, 28vw"
                    className="about-media-img"
                  />
                </div>
              </div>

              <div className="about-media-accent">
                <Image
                  alt="Architectural interior detail"
                  src={img3}
                  fill
                  sizes="(max-width: 900px) 40vw, 18vw"
                  className="about-media-img"
                />
              </div>

              <div className="about-media-caption">
                <strong>Est. craft</strong>
                <span>Design to build</span>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="about-intro-copy">
              <span className="section-eyebrow">OUR STORY</span>
              <h2>
                Building homes
                <br />
                with purpose
                <br />
                <span>&amp; precision</span>
              </h2>
              <p>
                Home Care Constructions began with a simple belief: a well-built
                space should feel as considered as it looks. We bring design and
                construction together so every decision — from layout to finish —
                serves how you live.
              </p>
              <p>
                Our team works closely with homeowners and businesses across the
                region, turning ideas into spaces that are durable, beautiful, and
                uniquely yours.
              </p>
              <ul className="about-intro-points">
                <li>Design &amp; build under one roof</li>
                <li>Clear communication at every stage</li>
                <li>Craftsmanship that stands the test of time</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
