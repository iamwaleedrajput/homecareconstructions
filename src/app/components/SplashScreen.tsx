"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../@assets/images/logo/logo2.png";

export default function SplashScreen() {
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
      aria-label="Home Care Constructions is loading"
      aria-live="polite"
    >
      <div className="splash-content">
        <div className="splash-mark">
          <Image src={logo} alt="" priority />
        </div>
        <p className="splash-name">Home Care</p>
        <p className="splash-caption">Constructions</p>
        <span className="splash-rule" aria-hidden="true" />
        <p className="splash-tagline">Design · Build · Transform</p>
      </div>
    </div>
  );
}