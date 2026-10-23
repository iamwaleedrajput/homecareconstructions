import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import logo from "../@assets/images/logo/logo2.png";
import Image from "next/image";
import type { GlobalContent } from "@/lib/site";
import { whatsappHref } from "@/lib/format";

export default function Footer({ content }: { content: GlobalContent }) {
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            {content.logoUrl ? (
              <Image src={content.logoUrl} alt={content.siteName} width={120} height={48} />
            ) : (
              <Image src={logo} alt={content.siteName} />
            )}
            <p>{content.footerBlurb}</p>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <h4>{content.footerExploreHeading}</h4>
            <ul>
              {content.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <h4>{content.footerContactHeading}</h4>
            <div className="footer-contact">
              <p>{content.address}</p>
              <p>
                <a href={`mailto:${content.email}`}>{content.email}</a>
              </p>
              <p>
                <a href={whatsappHref(content.whatsappNumber)} target="_blank" rel="noreferrer">
                  {content.phoneDisplay}
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {content.siteName}. {content.copyrightSuffix}
          </p>
          <p>{content.footerTagline}</p>
        </div>
      </Container>
    </div>
  );
}
