import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import Lines from "../components/Lines";
import type { HeroContent } from "@/lib/site";

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      className="hero-section"
      aria-labelledby="home-hero-title"
      style={
        content.backgroundUrl
          ? ({ "--hero-image": `url("${content.backgroundUrl}")` } as React.CSSProperties)
          : undefined
      }
    >
      <div className="hero-image-caption" aria-hidden="true">
        {content.imageCaption}
      </div>
      <Container>
        <div className="hero-layout">
          <div className="hero-content">
            <p className="hero-brand">
              {content.eyebrow.includes("·") ? (
                <>
                  {content.eyebrow.split("·")[0].trim()} <span>·</span>{" "}
                  {content.eyebrow.split("·").slice(1).join("·").trim()}
                </>
              ) : (
                content.eyebrow
              )}
            </p>
            <Lines
              as="h1"
              id="home-hero-title"
              text={content.title}
              highlight={content.titleHighlight}
            />
            <p className="hero-script">{content.script}</p>
            <p className="hero-lead">{content.lead}</p>
            <div className="hero-actions">
              <Link href={content.primaryCtaHref} className="hero-btn hero-btn-primary">
                {content.primaryCtaLabel} <span aria-hidden="true">↗</span>
              </Link>
              <Link href={content.secondaryCtaHref} className="hero-btn hero-btn-ghost">
                {content.secondaryCtaLabel}
              </Link>
            </div>
            <div className="hero-trust-note">
              <span className="hero-trust-mark" aria-hidden="true">
                {content.trustMark}
              </span>
              <span>
                {content.trustText}
                <br />
                <strong>{content.trustEmphasis}</strong>
              </span>
            </div>
          </div>

          <div className="hero-side-note" aria-label={content.sideWords.join(", ")}>
            <span className="hero-side-rule" />
            {content.sideWords.map((word, index) => (
              <span key={`${word}-${index}`}>{word}</span>
            ))}
          </div>
        </div>
        <div className="hero-bottomline" aria-hidden="true">
          <span>{content.bottomLine}</span>
          <span className="hero-scroll-cue">
            {content.scrollCue} <i>↓</i>
          </span>
        </div>
      </Container>
    </section>
  );
}
