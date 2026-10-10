import { Container, Grid } from "@mui/material";
import React from "react";
import img1 from "../@assets/images/misc/1.jpg";
import img2 from "../@assets/images/misc/2.jpg";
import img3 from "../@assets/images/misc/3.jpg";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: img1,
    title: "Modern Living Suite",
    description: "Warm interiors with clean lines and lasting materials.",
  },
  {
    image: img2,
    title: "Open Kitchen Renovation",
    description: "A brighter, more functional heart of the home.",
  },
  {
    image: img3,
    title: "Full Home Remodel",
    description: "Design and build, coordinated end to end.",
  },
];

export default function FeaturedSection() {
  return (
    <Container>
      <div className="featured-section">
        <div className="section-intro centered">
          <span className="section-eyebrow">SELECTED WORK</span>
          <h2>
            Featured
            <br />
            <span>projects</span>
          </h2>
        </div>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
              <div className="featured-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="main-img"
                />
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className="featured-footer">
          <Link href="/gallery" className="section-link">
            Browse full gallery
          </Link>
        </div>
      </div>
    </Container>
  );
}
