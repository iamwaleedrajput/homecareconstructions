import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function GalleryHero() {
  return (
    <section className="gallery-hero">
      <div className="gallery-hero-media" aria-hidden="true" />
      <Container>
        <div className="gallery-hero-content">
          <p className="gallery-hero-brand">Home Care Constructions</p>
          <h1>
            Our
            <br />
            <span>Gallery</span>
          </h1>
          <p className="gallery-hero-lead">
            Spaces we&apos;ve designed, built, and refined — interiors and homes
            shaped with care.
          </p>
          <div className="gallery-hero-actions">
            <a href="#gallery-work" className="hero-btn hero-btn-primary">
              Browse work
            </a>
            <Link href="/contact-us" className="hero-btn hero-btn-ghost">
              Start a project
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
