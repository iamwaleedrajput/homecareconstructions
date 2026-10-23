"use client";

import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../@assets/images/logo/logo2.png";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { GlobalContent } from "@/lib/site";
import { whatsappHref } from "@/lib/format";

export default function Navbar({ content }: { content: GlobalContent }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const phoneHref = whatsappHref(content.whatsappNumber);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={classNames("navbar", {
        isScrolled,
        menuOpen,
      })}
    >
      <Container>
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand" aria-label={content.siteName}>
            {content.logoUrl ? (
              <Image src={content.logoUrl} alt="" width={104} height={104} />
            ) : (
              <Image src={logo} alt="" />
            )}
            <span className="navbar-wordmark">
              {content.brandLine1}
              <small>{content.brandLine2}</small>
            </span>
          </Link>

          <nav className={classNames("navbar-links", { isOpen: menuOpen })}>
            {content.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={classNames({ isActive })}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="navbar-mobile-meta">
              <a href={phoneHref} target="_blank" rel="noreferrer">
                {content.phoneDisplay}
              </a>
              <Link href={content.navCtaHref} className="navbar-cta">
                {content.navCtaLabel}
              </Link>
            </div>
          </nav>

          <div className="navbar-actions">
            <a href={phoneHref} className="navbar-phone" target="_blank" rel="noreferrer">
              {content.phoneDisplay}
            </a>
            <Link href={content.navCtaHref} className="navbar-cta">
              {content.navCtaLabel}
            </Link>
          </div>

          <button
            type="button"
            className={classNames("navbar-toggle", { isOpen: menuOpen })}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
}
