"use client";

import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../@assets/images/logo/logo2.png";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <Link
            href="/"
            className="navbar-brand"
            aria-label="Home Care Constructions"
          >
            <Image src={logo} alt="" />
            <span className="navbar-wordmark">
              Home Care
              <small>Constructions</small>
            </span>
          </Link>

          <nav className={classNames("navbar-links", { isOpen: menuOpen })}>
            {links.map((link) => {
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
              <a href="tel:+923435278887">+92 343 5278887</a>
              <Link href="/contact-us" className="navbar-cta">
                Start a project
              </Link>
            </div>
          </nav>

          <div className="navbar-actions">
            <a href="tel:+923435278887" className="navbar-phone">
              +92 343 5278887
            </a>
            <Link href="/contact-us" className="navbar-cta">
              Start a project
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
