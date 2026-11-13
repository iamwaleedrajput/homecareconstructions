import type { Field, GlobalConfig } from "payload";
import { refreshSite } from "../payload/revalidate";

const text = (name: string): Field => ({ name, type: "text" });
const area = (name: string): Field => ({ name, type: "textarea" });
const image = (name: string): Field => ({
  name,
  type: "upload",
  relationTo: "media",
});

const list = (name: string, fields: Field[]): Field => ({
  name,
  type: "array",
  fields,
});

const section = (name: string, fields: Field[]): Field => ({
  name,
  type: "group",
  fields,
});

const links = (name: string): Field => list(name, [text("label"), text("href")]);
const lines = (name: string): Field => list(name, [text("text")]);
const titled = (name: string): Field =>
  list(name, [text("title"), text("subtitle"), area("description")]);

const seo = (): Field =>
  section("seo", [
    text("metaTitle"),
    area("metaDescription"),
    text("ogTitle"),
    area("ogDescription"),
    text("ogHeadline"),
    text("ogHighlight"),
    text("ogCaption"),
    text("ogFooter"),
  ]);

const heading = [text("eyebrow"), area("title"), text("titleHighlight")];

const cta = (withImage = false): Field =>
  section("cta", [
    text("eyebrow"),
    text("title"),
    area("body"),
    text("ctaLabel"),
    text("ctaHref"),
    ...(withImage ? [image("background")] : []),
  ]);

const why = (): Field => section("why", [...heading, titled("items")]);

function defineGlobal(slug: string, label: string, group: string, fields: Field[]): GlobalConfig {
  return {
    slug,
    label,
    access: { read: () => true },
    admin: { group },
    hooks: {
      afterChange: [
        ({ doc }) => {
          refreshSite();
          return doc;
        },
      ],
    },
    fields,
  };
}

export const siteGlobal = defineGlobal("site", "Site settings", "Settings", [
  text("siteName"),
  text("brandLine1"),
  text("brandLine2"),
  text("locationShort"),
  text("locationFull"),
  text("phoneDisplay"),
  text("whatsappNumber"),
  { name: "email", type: "email" },
  text("address"),
  area("footerBlurb"),
  text("footerTagline"),
  text("footerExploreHeading"),
  text("footerContactHeading"),
  text("copyrightSuffix"),
  text("splashTagline"),
  text("navCtaLabel"),
  text("navCtaHref"),
  links("navLinks"),
  links("footerLinks"),
  image("logo"),
  seo(),
]);

export const homePage = defineGlobal("home-page", "Home page", "Pages", [
  section("hero", [
    text("eyebrow"),
    area("title"),
    text("titleHighlight"),
    text("script"),
    area("lead"),
    text("primaryCtaLabel"),
    text("primaryCtaHref"),
    text("secondaryCtaLabel"),
    text("secondaryCtaHref"),
    text("trustMark"),
    text("trustText"),
    text("trustEmphasis"),
    text("imageCaption"),
    text("bottomLine"),
    text("scrollCue"),
    lines("sideWords"),
    image("background"),
  ]),
  section("about", [
    text("eyebrow"),
    area("title"),
    text("titleHighlight"),
    area("paragraphOne"),
    area("paragraphTwo"),
    text("linkLabel"),
    text("linkHref"),
    text("badgeValue"),
    text("badgeLabel"),
    text("mainImageAlt"),
    text("insetImageAlt"),
    titled("facts"),
    image("mainImage"),
    image("insetImage"),
  ]),
  section("process", [...heading, titled("steps")]),
  section("services", [
    ...heading,
    area("intro"),
    text("ctaLabel"),
    text("ctaHref"),
    titled("items"),
  ]),
  section("featured", [
    ...heading,
    text("linkLabel"),
    text("linkHref"),
    list("projects", [text("title"), area("description"), text("alt"), image("image")]),
  ]),
  why(),
  section("testimonials", [
    ...heading,
    list("items", [area("quote"), text("name"), text("role")]),
  ]),
  cta(true),
]);

export const aboutPage = defineGlobal("about-page", "About page", "Pages", [
  text("breadcrumbTitle"),
  area("breadcrumbSubtitle"),
  image("heroImage"),
  section("story", [
    text("eyebrow"),
    area("title"),
    text("titleHighlight"),
    area("paragraphOne"),
    area("paragraphTwo"),
    text("captionStrong"),
    text("captionSpan"),
    text("mainImageAlt"),
    text("secondaryImageAlt"),
    text("accentImageAlt"),
    lines("points"),
    image("mainImage"),
    image("secondaryImage"),
    image("accentImage"),
  ]),
  text("valuesEyebrow"),
  area("valuesTitle"),
  text("valuesHighlight"),
  titled("values"),
  titled("stats"),
  why(),
  cta(true),
  seo(),
]);

export const galleryPage = defineGlobal("gallery-page", "Gallery page", "Pages", [
  text("breadcrumbTitle"),
  area("breadcrumbSubtitle"),
  image("heroImage"),
  text("eyebrow"),
  area("title"),
  text("titleHighlight"),
  area("intro"),
  list("meta", [text("title"), text("subtitle")]),
  list("items", [text("title"), text("alt"), image("image")]),
  seo(),
]);

export const pricingPage = defineGlobal("pricing-page", "Pricing page", "Pages", [
  text("breadcrumbTitle"),
  area("breadcrumbSubtitle"),
  image("heroImage"),
  text("eyebrow"),
  area("title"),
  text("titleHighlight"),
  area("intro"),
  text("unitNotePrimary"),
  text("unitNoteSecondary"),
  text("currency"),
  text("priceUnit"),
  area("pricingNote"),
  text("packageCtaLabel"),
  area("packageInquiryIntro"),
  text("includedEyebrow"),
  area("includedTitle"),
  text("includedHighlight"),
  area("includedBody"),
  lines("includedServices"),
  text("extrasEyebrow"),
  area("extrasTitle"),
  text("extrasHighlight"),
  area("extrasBody"),
  text("extrasLinkLabel"),
  text("extrasLinkHref"),
  lines("optionalItems"),
  text("whyEyebrow"),
  area("whyTitle"),
  text("whyHighlight"),
  lines("reasons"),
  list("packages", [
    text("name"),
    text("tier"),
    { name: "pricePerSqFt", type: "number", required: true, min: 0 },
    area("description"),
    area("calculatorDescription"),
    { name: "featured", type: "checkbox", defaultValue: false },
    area("note"),
    list("groups", [text("title"), lines("items")]),
  ]),
  seo(),
]);

export const quotePage = defineGlobal("quote-page", "Quote calculator", "Pages", [
  text("breadcrumbTitle"),
  area("breadcrumbSubtitle"),
  image("heroImage"),
  text("eyebrow"),
  area("title"),
  text("titleHighlight"),
  area("intro"),
  text("stepOneEyebrow"),
  text("stepOneTitle"),
  area("stepOneBody"),
  text("stepTwoEyebrow"),
  text("stepTwoLabel"),
  area("stepTwoHelp"),
  text("areaPlaceholder"),
  text("areaUnit"),
  text("popularBadge"),
  text("defaultPackage"),
  text("estimateEyebrow"),
  text("estimateTitle"),
  text("labelPackage"),
  text("labelRate"),
  text("labelArea"),
  text("labelTotal"),
  text("ctaLabel"),
  area("disclaimer"),
  area("whatsappIntro"),
  text("messagePackageLabel"),
  text("messageAreaLabel"),
  text("messageAreaMissing"),
  text("messageTotalLabel"),
  area("messageClosing"),
  seo(),
]);

export const contactPage = defineGlobal("contact-page", "Contact page", "Pages", [
  text("breadcrumbTitle"),
  area("breadcrumbSubtitle"),
  image("heroImage"),
  text("eyebrow"),
  area("title"),
  text("titleHighlight"),
  area("intro"),
  list("details", [text("label"), text("value"), text("href")]),
  text("hoursEyebrow"),
  area("hoursTitle"),
  text("hoursHighlight"),
  area("hoursIntro"),
  list("hours", [text("label"), text("value")]),
  text("formEyebrow"),
  text("nameLabel"),
  text("namePlaceholder"),
  text("emailLabel"),
  text("emailPlaceholder"),
  text("phoneLabel"),
  text("phonePlaceholder"),
  text("projectLabel"),
  text("projectPlaceholder"),
  text("messageLabel"),
  text("messagePlaceholder"),
  text("submitLabel"),
  area("successMessage"),
  area("honeypotMessage"),
  area("errorMessage"),
  text("nameError"),
  text("emailError"),
  text("projectError"),
  text("messageError"),
  area("whatsappIntro"),
  list("projectTypes", [text("value"), text("label")]),
  image("studioImage"),
  seo(),
]);

export const globals: GlobalConfig[] = [
  siteGlobal,
  homePage,
  aboutPage,
  galleryPage,
  pricingPage,
  quotePage,
  contactPage,
];
