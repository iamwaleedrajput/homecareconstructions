"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../@assets/images/logo/logo2.png";

type SplashContent = {
  siteName: string;
  brandLine1: string;
  brandLine2: string;
  splashTagline: string;
  logoUrl: string | null;
};

export default function SplashScreen({ content }: { content: SplashContent }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const exitDelay = reducedMotion ? 250 : 1900;
    const exitTimer = window.setTimeout(() => setIsLeaving(true), exitDelay);
    const removeTimer = window.setTimeout(
      () => setIsVisible(false),
      exitDelay + (reducedMotion ? 150 : 700),
    );

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`splash-screen${isLeaving ? " isLeaving" : ""}`}
      role="status"
      aria-label={`${content.siteName} is loading`}
      aria-live="polite"
    >
      <div className="splash-content">
        <div className="splash-mark">
          {content.logoUrl ? (
            <Image src={content.logoUrl} alt="" width={160} height={160} priority />
          ) : (
            <Image src={logo} alt="" priority />
          )}
        </div>
        <p className="splash-name">{content.brandLine1}</p>
        <p className="splash-caption">{content.brandLine2}</p>
        <span className="splash-rule" aria-hidden="true" />
        <p className="splash-tagline">{content.splashTagline}</p>
      </div>
    </div>
  );
}
