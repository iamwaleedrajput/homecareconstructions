import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

type BreadcrumbProps = {
  title: string;
  subtitle?: string;
  label?: string;
  imageUrl?: string | null;
};

export default function Breadcrumb({
  title,
  subtitle,
  label = "Home Care Constructions",
  imageUrl,
}: BreadcrumbProps) {
  return (
    <section
      className="page-hero"
      style={
        imageUrl
          ? ({ "--page-hero-image": `url("${imageUrl}")` } as React.CSSProperties)
          : undefined
      }
    >
      <div className="page-hero-overlay" aria-hidden="true" />
      <Container>
        <div className="page-hero-inner">
          <nav className="page-hero-trail" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="page-hero-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{title}</span>
          </nav>

          <p className="page-hero-label">{label}</p>
          <h1>
            {title}
            <span className="page-hero-mark">.</span>
          </h1>
          {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
        </div>
      </Container>
    </section>
  );
}
