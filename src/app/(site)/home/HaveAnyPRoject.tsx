import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import type { CtaContent } from "@/lib/site";

export default function HaveAnyProject({ content }: { content: CtaContent }) {
  return (
    <div
      className="have-any-project"
      style={
        content.backgroundUrl
          ? ({ "--cta-image": `url("${content.backgroundUrl}")` } as React.CSSProperties)
          : undefined
      }
    >
      <Container>
        <span className="section-eyebrow light">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p>{content.body}</p>
        <Link href={content.ctaHref} className="hero-btn hero-btn-primary">
          {content.ctaLabel}
        </Link>
      </Container>
    </div>
  );
}
