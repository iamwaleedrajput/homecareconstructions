import { Container } from "@mui/material";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Lines from "../components/Lines";
import { getGlobal, getPricingPage, pageMetadata } from "@/lib/site";
import { applyTemplate, formatPrice, whatsappHref } from "@/lib/format";

export async function generateMetadata() {
  const pricing = await getPricingPage();
  return pageMetadata(pricing.seo);
}

export default async function KitchenPackagesPage() {
  const [pricing, global] = await Promise.all([getPricingPage(), getGlobal()]);

  return (
    <div className="kitchen-packages-page">
      <Breadcrumb
        title={pricing.breadcrumbTitle}
        subtitle={pricing.breadcrumbSubtitle}
        label={global.siteName}
        imageUrl={pricing.heroImageUrl}
      />

      <main>
        <section className="kitchen-packages-intro">
          <Container>
            <div className="kitchen-packages-intro-copy">
              <span className="section-eyebrow">{pricing.eyebrow}</span>
              <Lines text={pricing.title} highlight={pricing.titleHighlight} />
              <p>{pricing.intro}</p>
            </div>
            <div className="kitchen-packages-unit-note">
              <span>{pricing.unitNotePrimary}</span>
              <span>{pricing.unitNoteSecondary}</span>
            </div>
          </Container>
        </section>

        <section className="kitchen-package-list" aria-label="Kitchen packages">
          <Container>
            <div className="kitchen-package-grid">
              {pricing.packages.map((kitchenPackage, index) => {
                const price = formatPrice(kitchenPackage.pricePerSqFt);
                const message = [
                  applyTemplate(pricing.packageInquiryIntro, {
                    name: kitchenPackage.name,
                    price,
                    currency: pricing.currency,
                  }),
                  `Price: ${pricing.currency} ${price} per sq. ft.`,
                  "Package details:",
                  ...kitchenPackage.groups.map(
                    (group) => `${group.title}: ${group.items.join(", ")}`,
                  ),
                ].join("\n");

                return (
                  <article
                    className={`kitchen-package-card${kitchenPackage.featured ? " is-featured" : ""}`}
                    key={`${kitchenPackage.name}-${index}`}
                  >
                    <div className="kitchen-package-topline">
                      <span className="kitchen-package-number">0{index + 1}</span>
                      <span className="kitchen-package-tier">{kitchenPackage.tier}</span>
                    </div>
                    <h3>{kitchenPackage.name}</h3>
                    <p className="kitchen-package-description">{kitchenPackage.description}</p>
                    <div className="kitchen-package-price">
                      <span className="kitchen-package-currency">{pricing.currency}</span>
                      <strong>{price}</strong>
                      <span className="kitchen-package-unit">{pricing.priceUnit}</span>
                    </div>

                    <div className="kitchen-package-details">
                      {kitchenPackage.groups.map((group) => (
                        <div className="kitchen-package-group" key={group.title}>
                          <h4>{group.title}</h4>
                          <ul>
                            {group.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <p className="kitchen-package-note">{kitchenPackage.note}</p>
                    <a
                      className="kitchen-package-cta"
                      href={whatsappHref(global.whatsappNumber, message)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pricing.packageCtaLabel} <span aria-hidden="true">↗</span>
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="kitchen-pricing-note">{pricing.pricingNote}</p>
          </Container>
        </section>

        <section className="kitchen-included-section">
          <Container>
            <div className="kitchen-included-layout">
              <div className="kitchen-included-heading">
                <span className="section-eyebrow light">{pricing.includedEyebrow}</span>
                <Lines text={pricing.includedTitle} highlight={pricing.includedHighlight} />
                <p>{pricing.includedBody}</p>
              </div>
              <ul className="kitchen-included-list">
                {pricing.includedServices.map((service, index) => (
                  <li key={service}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="kitchen-extras-section">
          <Container>
            <div className="kitchen-extras-grid">
              <div className="kitchen-extras-copy">
                <span className="section-eyebrow">{pricing.extrasEyebrow}</span>
                <Lines text={pricing.extrasTitle} highlight={pricing.extrasHighlight} />
                <p>{pricing.extrasBody}</p>
                <Link href={pricing.extrasLinkHref} className="kitchen-extras-link">
                  {pricing.extrasLinkLabel} <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <ul className="kitchen-extras-list">
                {pricing.optionalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="kitchen-why-section">
          <Container>
            <div className="kitchen-why-heading">
              <span className="section-eyebrow">{pricing.whyEyebrow}</span>
              <Lines text={pricing.whyTitle} highlight={pricing.whyHighlight} />
            </div>
            <ul className="kitchen-reasons-list">
              {pricing.reasons.map((reason, index) => (
                <li key={reason}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {reason}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </div>
  );
}
