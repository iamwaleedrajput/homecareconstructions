import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="home-hero-title">
      <div className="hero-image-caption" aria-hidden="true">
      A HOME, MADE PERSONAL
      </div>
      <Container>
        <div className="hero-layout">
          <div className="hero-content">
            <p className="hero-brand">Home Care Constructions <span>·</span> Rawalpindi</p>
            <h1 id="home-hero-title">
              Spaces made
              <br />
              <span>for living.</span>
            </h1>
            <p className="hero-script">Built with purpose.</p>
            <p className="hero-lead">
              Thoughtful interiors, bespoke kitchens, and lasting builds —
              brought to life with care from the first sketch to the final
              finish.
            </p>
            <div className="hero-actions">
              <Link href="/contact-us" className="hero-btn hero-btn-primary">
                Start a project <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/pricing" className="hero-btn hero-btn-ghost">
                Explore kitchen pricing
              </Link>
            </div>
            <div className="hero-trust-note">
              <span className="hero-trust-mark" aria-hidden="true">HC</span>
              <span>Designed with intention.<br /><strong>Made to last.</strong></span>
            </div>
          </div>

          <div className="hero-side-note" aria-label="Design, build, and transform">
            <span className="hero-side-rule" />
            <span>DESIGN</span>
            <span>BUILD</span>
            <span>TRANSFORM</span>
          </div>
        </div>
        <div className="hero-bottomline" aria-hidden="true">
          <span>Considered details. Enduring spaces.</span>
          <span className="hero-scroll-cue">SCROLL TO EXPLORE <i>↓</i></span>
        </div>
      </Container>
    </section>
  );
}
