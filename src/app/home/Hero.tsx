import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <div className="hero-content">
          <p className="hero-brand">Home Care Constructions</p>
          <h1>
            Designing Spaces
            <br />
          </h1>
          <h2>building dreams</h2>
          <p className="hero-lead">
            Thoughtful interiors and lasting builds — from first sketch to final
            finish.
          </p>
          <div className="hero-actions">
            <Link href="/contact-us" className="hero-btn hero-btn-primary">
              Start a project
            </Link>
            <Link href="/gallery" className="hero-btn hero-btn-ghost">
              View our work
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
