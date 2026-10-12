import { Container } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import Breadcrumb from "../components/Breadcrumb";

export default function ContactUs() {
  return (
    <div>
      <Breadcrumb
        title="Contact"
        subtitle="Share your vision — we’ll help bring it home."
      />

      <main className="contact-page">
        <section className="contact-layout">
          <Container>
            <div className="contact-layout-grid">
              <div className="contact-intro">
                <span className="contact-eyebrow">LET&apos;S TALK</span>
                <h2>
                  Let&apos;s create
                  <br />
                  <span>something lasting</span>
                </h2>
                <p>
                  Whether you&apos;re planning a renovation, a new build, or a
                  full interior redesign — tell us what you&apos;re imagining
                  and we&apos;ll take it from there.
                </p>

                <ul className="contact-info-list">
                  <li>
                    <small>01 — Email</small>
                    <a href="mailto:hello@homecareconstructions.com">
                      hello@homecareconstructions.com
                    </a>
                  </li>
                  <li>
                    <small>02 — Phone</small>
                    <a
                      href="https://wa.me/923181552274"
                      target="_blank"
                      rel="noreferrer"
                    >
                      03181552274
                    </a>
                  </li>
                  <li>
                    <small>03 — Studio</small>
                    <p>Rawalpindi, Pakistan</p>
                  </li>
                </ul>
              </div>

              <ContactForm />
            </div>
          </Container>
        </section>

        <section className="contact-studio">
          <Container>
            <div className="contact-studio-grid">
              <div className="contact-studio-copy">
                <span className="section-eyebrow light">VISIT</span>
                <h3>
                  Hours &amp;
                  <br />
                  <span>studio</span>
                </h3>
                <p>
                  Consultations by appointment. We typically reply within one
                  business day.
                </p>
                <dl className="contact-hours">
                  <div>
                    <dt>Mon — Fri</dt>
                    <dd>10:00 am – 6:00 pm</dd>
                  </div>
                  <div>
                    <dt>Saturday</dt>
                    <dd>By appointment</dd>
                  </div>
                  <div>
                    <dt>Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </div>
              <div className="contact-studio-media" aria-hidden="true" />
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
