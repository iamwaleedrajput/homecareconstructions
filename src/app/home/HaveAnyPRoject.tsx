import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function HaveAnyProject() {
  return (
    <div className="have-any-project">
      <Container>
        <span className="section-eyebrow light">NEXT STEP</span>
        <h1>Have a project in mind?</h1>
        <p>Tell us what you&apos;re envisioning — we&apos;ll help shape it into reality.</p>
        <Link href="/contact-us" className="hero-btn hero-btn-primary">
          Contact Us
        </Link>
      </Container>
    </div>
  );
}
