import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import logo from "../@assets/images/logo/logo2.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Image src={logo} alt="Home Care Constructions" />
            <p>
              Designers, builders, and craftsmen — turning ideas into lasting
              spaces with precision, care, and timeless detail.
            </p>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <h4>Get in touch</h4>
            <div className="footer-contact">
              <p>Rawalpindi, Pakistan</p>
              <p>
                <a href="mailto:hello@homecareconstructions.com">
                  hello@homecareconstructions.com
                </a>
              </p>
              <p>
                <a href="tel:+923435278887">+92 343 5278887</a>
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Home Care Constructions. All rights
            reserved.
          </p>
          <p>Design. Build. Transform.</p>
        </div>
      </Container>
    </div>
  );
}
