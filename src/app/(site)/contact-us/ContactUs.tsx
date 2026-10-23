import { Container } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import Breadcrumb from "../components/Breadcrumb";
import Lines from "../components/Lines";
import { getContactPage, getGlobal, pageMetadata } from "@/lib/site";

export async function generateMetadata() {
  const contact = await getContactPage();
  return pageMetadata(contact.seo);
}

export default async function ContactUs() {
  const [contact, global] = await Promise.all([getContactPage(), getGlobal()]);

  return (
    <div>
      <Breadcrumb
        title={contact.breadcrumbTitle}
        subtitle={contact.breadcrumbSubtitle}
        label={global.siteName}
        imageUrl={contact.heroImageUrl}
      />

      <main className="contact-page">
        <section className="contact-layout">
          <Container>
            <div className="contact-layout-grid">
              <div className="contact-intro">
                <span className="contact-eyebrow">{contact.eyebrow}</span>
                <Lines text={contact.title} highlight={contact.titleHighlight} />
                <p>{contact.intro}</p>

                <ul className="contact-info-list">
                  {contact.details.map((detail) => (
                    <li key={detail.label}>
                      <small>{detail.label}</small>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p>{detail.value}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <ContactForm content={contact} whatsappNumber={global.whatsappNumber} />
            </div>
          </Container>
        </section>

        <section className="contact-studio">
          <Container>
            <div className="contact-studio-grid">
              <div className="contact-studio-copy">
                <span className="section-eyebrow light">{contact.hoursEyebrow}</span>
                <Lines as="h3" text={contact.hoursTitle} highlight={contact.hoursHighlight} />
                <p>{contact.hoursIntro}</p>
                <dl className="contact-hours">
                  {contact.hours.map((hour) => (
                    <div key={hour.label}>
                      <dt>{hour.label}</dt>
                      <dd>{hour.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div
                className="contact-studio-media"
                aria-hidden="true"
                style={
                  contact.studioImageUrl
                    ? ({ "--studio-image": `url("${contact.studioImageUrl}")` } as React.CSSProperties)
                    : undefined
                }
              />
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
