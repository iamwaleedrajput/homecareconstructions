import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { Metadata } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import fallbackSite from "../content/site.json";

export type LinkItem = { label: string; href: string };

export type SeoContent = {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogHeadline: string;
  ogHighlight: string;
  ogCaption: string;
  ogFooter: string;
};

export type GlobalContent = {
  siteName: string;
  brandLine1: string;
  brandLine2: string;
  locationShort: string;
  locationFull: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  address: string;
  footerBlurb: string;
  footerTagline: string;
  footerExploreHeading: string;
  footerContactHeading: string;
  copyrightSuffix: string;
  splashTagline: string;
  navCtaLabel: string;
  navCtaHref: string;
  navLinks: LinkItem[];
  footerLinks: LinkItem[];
  logoUrl: string | null;
  seo: SeoContent;
};

export type TitledItem = {
  title: string;
  subtitle: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type CtaContent = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundUrl: string | null;
};

export type WhyContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: TitledItem[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  script: string;
  lead: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  trustMark: string;
  trustText: string;
  trustEmphasis: string;
  imageCaption: string;
  bottomLine: string;
  scrollCue: string;
  sideWords: string[];
  backgroundUrl: string | null;
};

export type HomeAboutContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  paragraphOne: string;
  paragraphTwo: string;
  linkLabel: string;
  linkHref: string;
  badgeValue: string;
  badgeLabel: string;
  mainImageAlt: string;
  insetImageAlt: string;
  mainImageUrl: string | null;
  insetImageUrl: string | null;
  facts: TitledItem[];
};

export type ProcessContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  steps: TitledItem[];
};

export type ServicesContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  items: TitledItem[];
};

export type FeaturedProject = {
  title: string;
  description: string;
  alt: string;
  imageUrl: string | null;
};

export type FeaturedContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  linkLabel: string;
  linkHref: string;
  projects: FeaturedProject[];
};

export type TestimonialsContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: Testimonial[];
};

export type HomeContent = {
  hero: HeroContent;
  about: HomeAboutContent;
  process: ProcessContent;
  services: ServicesContent;
  featured: FeaturedContent;
  why: WhyContent;
  testimonials: TestimonialsContent;
  cta: CtaContent;
};

export type StoryContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  paragraphOne: string;
  paragraphTwo: string;
  captionStrong: string;
  captionSpan: string;
  mainImageAlt: string;
  secondaryImageAlt: string;
  accentImageAlt: string;
  mainImageUrl: string | null;
  secondaryImageUrl: string | null;
  accentImageUrl: string | null;
  points: string[];
};

export type AboutContent = {
  breadcrumbTitle: string;
  breadcrumbSubtitle: string;
  heroImageUrl: string | null;
  story: StoryContent;
  valuesEyebrow: string;
  valuesTitle: string;
  valuesHighlight: string;
  values: TitledItem[];
  stats: TitledItem[];
  why: WhyContent;
  cta: CtaContent;
  seo: SeoContent;
};

export type GalleryItem = {
  title: string;
  alt: string;
  imageUrl: string | null;
};

export type GalleryContent = {
  breadcrumbTitle: string;
  breadcrumbSubtitle: string;
  heroImageUrl: string | null;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  meta: { title: string; subtitle: string }[];
  items: GalleryItem[];
  seo: SeoContent;
};

export type PackageGroup = { title: string; items: string[] };

export type KitchenPackage = {
  name: string;
  tier: string;
  pricePerSqFt: number;
  description: string;
  calculatorDescription: string;
  featured: boolean;
  note: string;
  groups: PackageGroup[];
};

export type PricingContent = {
  breadcrumbTitle: string;
  breadcrumbSubtitle: string;
  heroImageUrl: string | null;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  unitNotePrimary: string;
  unitNoteSecondary: string;
  currency: string;
  priceUnit: string;
  pricingNote: string;
  packageCtaLabel: string;
  packageInquiryIntro: string;
  includedEyebrow: string;
  includedTitle: string;
  includedHighlight: string;
  includedBody: string;
  includedServices: string[];
  extrasEyebrow: string;
  extrasTitle: string;
  extrasHighlight: string;
  extrasBody: string;
  extrasLinkLabel: string;
  extrasLinkHref: string;
  optionalItems: string[];
  whyEyebrow: string;
  whyTitle: string;
  whyHighlight: string;
  reasons: string[];
  packages: KitchenPackage[];
  seo: SeoContent;
};

export type QuoteContent = {
  breadcrumbTitle: string;
  breadcrumbSubtitle: string;
  heroImageUrl: string | null;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  stepOneEyebrow: string;
  stepOneTitle: string;
  stepOneBody: string;
  stepTwoEyebrow: string;
  stepTwoLabel: string;
  stepTwoHelp: string;
  areaPlaceholder: string;
  areaUnit: string;
  popularBadge: string;
  defaultPackage: string;
  estimateEyebrow: string;
  estimateTitle: string;
  labelPackage: string;
  labelRate: string;
  labelArea: string;
  labelTotal: string;
  ctaLabel: string;
  disclaimer: string;
  whatsappIntro: string;
  messagePackageLabel: string;
  messageAreaLabel: string;
  messageAreaMissing: string;
  messageTotalLabel: string;
  messageClosing: string;
  seo: SeoContent;
};

export type ContactDetail = { label: string; value: string; href: string };
export type ContactHour = { label: string; value: string };
export type ProjectType = { value: string; label: string };

export type ContactContent = {
  breadcrumbTitle: string;
  breadcrumbSubtitle: string;
  heroImageUrl: string | null;
  studioImageUrl: string | null;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  details: ContactDetail[];
  hoursEyebrow: string;
  hoursTitle: string;
  hoursHighlight: string;
  hoursIntro: string;
  hours: ContactHour[];
  formEyebrow: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  projectLabel: string;
  projectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successMessage: string;
  honeypotMessage: string;
  errorMessage: string;
  nameError: string;
  emailError: string;
  projectError: string;
  messageError: string;
  whatsappIntro: string;
  projectTypes: ProjectType[];
  seo: SeoContent;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function field(value: unknown, fallback: string, allowEmpty = false) {
  if (typeof value !== "string") return fallback;
  if (!allowEmpty && value.trim() === "") return fallback;
  return value;
}

function flag(value: unknown, fallback: boolean) {
  return typeof value === "boolean" ? value : fallback;
}

function amount(value: unknown, fallback: number) {
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function mediaUrl(value: unknown): string | null {
  const record = asRecord(value);
  const nested = record?.data ? asRecord(record.data) : null;
  const media = nested?.url ? nested : record;
  const url = media && typeof media.url === "string" ? media.url : "";
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) return url;
  return `/${url}`;
}

function links(value: unknown, fallback: LinkItem[]): LinkItem[] {
  if (!Array.isArray(value) || value.length === 0) return fallback;
  return value.map((item, index) => {
    const record = asRecord(item);
    return {
      label: field(record?.label, fallback[index]?.label ?? "Link"),
      href: field(record?.href, fallback[index]?.href ?? "/"),
    };
  });
}

function texts(value: unknown, fallback: { text: string }[]) {
  if (!Array.isArray(value) || value.length === 0) {
    return fallback.map((item) => item.text);
  }
  return value
    .map((item, index) => field(asRecord(item)?.text, fallback[index]?.text ?? ""))
    .filter((item) => item.trim() !== "");
}

function titled(value: unknown, fallback: TitledItem[]): TitledItem[] {
  if (!Array.isArray(value) || value.length === 0) return fallback;
  return value.map((item, index) => {
    const record = asRecord(item);
    const base = fallback[index];
    return {
      title: field(record?.title, base?.title ?? ""),
      subtitle: field(record?.subtitle, base?.subtitle ?? "", true),
      description: field(record?.description, base?.description ?? "", true),
    };
  });
}

function mapSeo(value: unknown, fallback: SeoContent): SeoContent {
  const source = asRecord(value);
  const metaTitle = field(source?.metaTitle, fallback.metaTitle);
  const metaDescription = field(source?.metaDescription, fallback.metaDescription);
  return {
    metaTitle,
    metaDescription,
    ogTitle: field(source?.ogTitle, fallback.ogTitle || metaTitle),
    ogDescription: field(source?.ogDescription, fallback.ogDescription || metaDescription),
    ogHeadline: field(source?.ogHeadline, fallback.ogHeadline, true),
    ogHighlight: field(source?.ogHighlight, fallback.ogHighlight, true),
    ogCaption: field(source?.ogCaption, fallback.ogCaption, true),
    ogFooter: field(source?.ogFooter, fallback.ogFooter, true),
  };
}

function mapCta(value: unknown, fallback: Omit<CtaContent, "backgroundUrl">): CtaContent {
  const source = asRecord(value);
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    body: field(source?.body, fallback.body),
    ctaLabel: field(source?.ctaLabel, fallback.ctaLabel),
    ctaHref: field(source?.ctaHref, fallback.ctaHref),
    backgroundUrl: mediaUrl(source?.background),
  };
}

function mapWhy(value: unknown, fallback: Omit<WhyContent, "items"> & { items: TitledItem[] }): WhyContent {
  const source = asRecord(value);
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    items: titled(source?.items, fallback.items),
  };
}

function mapHero(value: unknown): HeroContent {
  const fallback = fallbackSite.homePage.hero;
  const source = asRecord(value);
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    script: field(source?.script, fallback.script),
    lead: field(source?.lead, fallback.lead),
    primaryCtaLabel: field(source?.primaryCtaLabel, fallback.primaryCtaLabel),
    primaryCtaHref: field(source?.primaryCtaHref, fallback.primaryCtaHref),
    secondaryCtaLabel: field(source?.secondaryCtaLabel, fallback.secondaryCtaLabel),
    secondaryCtaHref: field(source?.secondaryCtaHref, fallback.secondaryCtaHref),
    trustMark: field(source?.trustMark, fallback.trustMark),
    trustText: field(source?.trustText, fallback.trustText),
    trustEmphasis: field(source?.trustEmphasis, fallback.trustEmphasis),
    imageCaption: field(source?.imageCaption, fallback.imageCaption),
    bottomLine: field(source?.bottomLine, fallback.bottomLine),
    scrollCue: field(source?.scrollCue, fallback.scrollCue),
    sideWords: texts(source?.sideWords, fallback.sideWords),
    backgroundUrl: mediaUrl(source?.background),
  };
}

function mapHomeAbout(value: unknown): HomeAboutContent {
  const fallback = fallbackSite.homePage.about;
  const source = asRecord(value);
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    paragraphOne: field(source?.paragraphOne, fallback.paragraphOne),
    paragraphTwo: field(source?.paragraphTwo, fallback.paragraphTwo),
    linkLabel: field(source?.linkLabel, fallback.linkLabel),
    linkHref: field(source?.linkHref, fallback.linkHref),
    badgeValue: field(source?.badgeValue, fallback.badgeValue),
    badgeLabel: field(source?.badgeLabel, fallback.badgeLabel),
    mainImageAlt: field(source?.mainImageAlt, fallback.mainImageAlt),
    insetImageAlt: field(source?.insetImageAlt, fallback.insetImageAlt),
    mainImageUrl: mediaUrl(source?.mainImage),
    insetImageUrl: mediaUrl(source?.insetImage),
    facts: titled(source?.facts, fallback.facts),
  };
}

function mapProcess(value: unknown): ProcessContent {
  const fallback = fallbackSite.homePage.process;
  const source = asRecord(value);
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    steps: titled(source?.steps, fallback.steps),
  };
}

function mapServices(value: unknown): ServicesContent {
  const fallback = fallbackSite.homePage.services;
  const source = asRecord(value);
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    intro: field(source?.intro, fallback.intro),
    ctaLabel: field(source?.ctaLabel, fallback.ctaLabel),
    ctaHref: field(source?.ctaHref, fallback.ctaHref),
    items: titled(source?.items, fallback.items),
  };
}

function mapFeatured(value: unknown): FeaturedContent {
  const fallback = fallbackSite.homePage.featured;
  const source = asRecord(value);
  const projects = Array.isArray(source?.projects) ? source.projects : [];
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    linkLabel: field(source?.linkLabel, fallback.linkLabel),
    linkHref: field(source?.linkHref, fallback.linkHref),
    projects:
      projects.length === 0
        ? fallback.projects.map((project) => ({ ...project, imageUrl: null }))
        : projects.map((item, index) => {
            const record = asRecord(item);
            const base = fallback.projects[index];
            return {
              title: field(record?.title, base?.title ?? "Project"),
              description: field(record?.description, base?.description ?? ""),
              alt: field(record?.alt, field(record?.title, base?.alt ?? "Project")),
              imageUrl: mediaUrl(record?.image),
            };
          }),
  };
}

function mapTestimonials(value: unknown): TestimonialsContent {
  const fallback = fallbackSite.homePage.testimonials;
  const source = asRecord(value);
  const items = Array.isArray(source?.items) ? source.items : [];
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    items:
      items.length === 0
        ? fallback.items
        : items.map((item, index) => {
            const record = asRecord(item);
            const base = fallback.items[index];
            return {
              quote: field(record?.quote, base?.quote ?? ""),
              name: field(record?.name, base?.name ?? ""),
              role: field(record?.role, base?.role ?? ""),
            };
          }),
  };
}

function mapGlobal(value: unknown): GlobalContent {
  const fallback = fallbackSite.global;
  const source = asRecord(value);
  return {
    siteName: field(source?.siteName, fallback.siteName),
    brandLine1: field(source?.brandLine1, fallback.brandLine1),
    brandLine2: field(source?.brandLine2, fallback.brandLine2),
    locationShort: field(source?.locationShort, fallback.locationShort),
    locationFull: field(source?.locationFull, fallback.locationFull),
    phoneDisplay: field(source?.phoneDisplay, fallback.phoneDisplay),
    whatsappNumber: field(source?.whatsappNumber, fallback.whatsappNumber),
    email: field(source?.email, fallback.email),
    address: field(source?.address, fallback.address),
    footerBlurb: field(source?.footerBlurb, fallback.footerBlurb),
    footerTagline: field(source?.footerTagline, fallback.footerTagline),
    footerExploreHeading: field(source?.footerExploreHeading, fallback.footerExploreHeading),
    footerContactHeading: field(source?.footerContactHeading, fallback.footerContactHeading),
    copyrightSuffix: field(source?.copyrightSuffix, fallback.copyrightSuffix),
    splashTagline: field(source?.splashTagline, fallback.splashTagline),
    navCtaLabel: field(source?.navCtaLabel, fallback.navCtaLabel),
    navCtaHref: field(source?.navCtaHref, fallback.navCtaHref),
    navLinks: links(source?.navLinks, fallback.navLinks),
    footerLinks: links(source?.footerLinks, fallback.footerLinks),
    logoUrl: mediaUrl(source?.logo),
    seo: mapSeo(source?.seo, fallback.seo),
  };
}

function mapHome(value: unknown): HomeContent {
  const source = asRecord(value);
  return {
    hero: mapHero(source?.hero),
    about: mapHomeAbout(source?.about),
    process: mapProcess(source?.process),
    services: mapServices(source?.services),
    featured: mapFeatured(source?.featured),
    why: mapWhy(source?.why, fallbackSite.homePage.why),
    testimonials: mapTestimonials(source?.testimonials),
    cta: mapCta(source?.cta, fallbackSite.homePage.cta),
  };
}

function mapStory(value: unknown): StoryContent {
  const fallback = fallbackSite.aboutPage.story;
  const source = asRecord(value);
  return {
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    paragraphOne: field(source?.paragraphOne, fallback.paragraphOne),
    paragraphTwo: field(source?.paragraphTwo, fallback.paragraphTwo),
    captionStrong: field(source?.captionStrong, fallback.captionStrong),
    captionSpan: field(source?.captionSpan, fallback.captionSpan),
    mainImageAlt: field(source?.mainImageAlt, fallback.mainImageAlt),
    secondaryImageAlt: field(source?.secondaryImageAlt, fallback.secondaryImageAlt),
    accentImageAlt: field(source?.accentImageAlt, fallback.accentImageAlt),
    mainImageUrl: mediaUrl(source?.mainImage),
    secondaryImageUrl: mediaUrl(source?.secondaryImage),
    accentImageUrl: mediaUrl(source?.accentImage),
    points: texts(source?.points, fallback.points),
  };
}

function mapAbout(value: unknown): AboutContent {
  const fallback = fallbackSite.aboutPage;
  const source = asRecord(value);
  return {
    breadcrumbTitle: field(source?.breadcrumbTitle, fallback.breadcrumbTitle),
    breadcrumbSubtitle: field(source?.breadcrumbSubtitle, fallback.breadcrumbSubtitle),
    heroImageUrl: mediaUrl(source?.heroImage),
    story: mapStory(source?.story),
    valuesEyebrow: field(source?.valuesEyebrow, fallback.valuesEyebrow),
    valuesTitle: field(source?.valuesTitle, fallback.valuesTitle),
    valuesHighlight: field(source?.valuesHighlight, fallback.valuesHighlight),
    values: titled(source?.values, fallback.values),
    stats: titled(source?.stats, fallback.stats),
    why: mapWhy(source?.why, fallback.why),
    cta: mapCta(source?.cta, fallback.cta),
    seo: mapSeo(source?.seo, fallback.seo),
  };
}

function mapGallery(value: unknown): GalleryContent {
  const fallback = fallbackSite.galleryPage;
  const source = asRecord(value);
  const meta = Array.isArray(source?.meta) ? source.meta : [];
  const items = Array.isArray(source?.items) ? source.items : [];
  return {
    breadcrumbTitle: field(source?.breadcrumbTitle, fallback.breadcrumbTitle),
    breadcrumbSubtitle: field(source?.breadcrumbSubtitle, fallback.breadcrumbSubtitle),
    heroImageUrl: mediaUrl(source?.heroImage),
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    intro: field(source?.intro, fallback.intro),
    meta:
      meta.length === 0
        ? fallback.meta
        : meta.map((item, index) => {
            const record = asRecord(item);
            const base = fallback.meta[index];
            return {
              title: field(record?.title, base?.title ?? ""),
              subtitle: field(record?.subtitle, base?.subtitle ?? ""),
            };
          }),
    items:
      items.length === 0
        ? fallback.items.map((item) => ({ ...item, imageUrl: null }))
        : items.map((item, index) => {
            const record = asRecord(item);
            const base = fallback.items[index];
            const title = field(record?.title, base?.title ?? "Project");
            return {
              title,
              alt: field(record?.alt, base?.alt ?? title),
              imageUrl: mediaUrl(record?.image),
            };
          }),
    seo: mapSeo(source?.seo, fallback.seo),
  };
}

function mapPackages(value: unknown, fallback: (typeof fallbackSite.pricingPage.packages)): KitchenPackage[] {
  if (!Array.isArray(value) || value.length === 0) {
    return fallback.map((item) => ({
      ...item,
      groups: item.groups.map((group) => ({
        title: group.title,
        items: group.items.map((entry) => entry.text),
      })),
    }));
  }

  return value.map((item, index) => {
    const record = asRecord(item);
    const base = fallback[index];
    const groups = Array.isArray(record?.groups) ? record.groups : [];
    return {
      name: field(record?.name, base?.name ?? "Package"),
      tier: field(record?.tier, base?.tier ?? ""),
      pricePerSqFt: amount(record?.pricePerSqFt, base?.pricePerSqFt ?? 0),
      description: field(record?.description, base?.description ?? ""),
      calculatorDescription: field(
        record?.calculatorDescription,
        base?.calculatorDescription ?? "",
      ),
      featured: flag(record?.featured, base?.featured ?? false),
      note: field(record?.note, base?.note ?? ""),
      groups:
        groups.length === 0
          ? (base?.groups ?? []).map((group) => ({
              title: group.title,
              items: group.items.map((entry) => entry.text),
            }))
          : groups.map((group, groupIndex) => {
              const groupRecord = asRecord(group);
              const groupBase = base?.groups[groupIndex];
              return {
                title: field(groupRecord?.title, groupBase?.title ?? ""),
                items: texts(groupRecord?.items, groupBase?.items ?? []),
              };
            }),
    };
  });
}

function mapPricing(value: unknown): PricingContent {
  const fallback = fallbackSite.pricingPage;
  const source = asRecord(value);
  return {
    breadcrumbTitle: field(source?.breadcrumbTitle, fallback.breadcrumbTitle),
    breadcrumbSubtitle: field(source?.breadcrumbSubtitle, fallback.breadcrumbSubtitle),
    heroImageUrl: mediaUrl(source?.heroImage),
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    intro: field(source?.intro, fallback.intro),
    unitNotePrimary: field(source?.unitNotePrimary, fallback.unitNotePrimary),
    unitNoteSecondary: field(source?.unitNoteSecondary, fallback.unitNoteSecondary),
    currency: field(source?.currency, fallback.currency),
    priceUnit: field(source?.priceUnit, fallback.priceUnit),
    pricingNote: field(source?.pricingNote, fallback.pricingNote),
    packageCtaLabel: field(source?.packageCtaLabel, fallback.packageCtaLabel),
    packageInquiryIntro: field(source?.packageInquiryIntro, fallback.packageInquiryIntro),
    includedEyebrow: field(source?.includedEyebrow, fallback.includedEyebrow),
    includedTitle: field(source?.includedTitle, fallback.includedTitle),
    includedHighlight: field(source?.includedHighlight, fallback.includedHighlight),
    includedBody: field(source?.includedBody, fallback.includedBody),
    includedServices: texts(source?.includedServices, fallback.includedServices),
    extrasEyebrow: field(source?.extrasEyebrow, fallback.extrasEyebrow),
    extrasTitle: field(source?.extrasTitle, fallback.extrasTitle),
    extrasHighlight: field(source?.extrasHighlight, fallback.extrasHighlight),
    extrasBody: field(source?.extrasBody, fallback.extrasBody),
    extrasLinkLabel: field(source?.extrasLinkLabel, fallback.extrasLinkLabel),
    extrasLinkHref: field(source?.extrasLinkHref, fallback.extrasLinkHref),
    optionalItems: texts(source?.optionalItems, fallback.optionalItems),
    whyEyebrow: field(source?.whyEyebrow, fallback.whyEyebrow),
    whyTitle: field(source?.whyTitle, fallback.whyTitle),
    whyHighlight: field(source?.whyHighlight, fallback.whyHighlight),
    reasons: texts(source?.reasons, fallback.reasons),
    packages: mapPackages(source?.packages, fallback.packages),
    seo: mapSeo(source?.seo, fallback.seo),
  };
}

function mapQuote(value: unknown): QuoteContent {
  const fallback = fallbackSite.quotePage;
  const source = asRecord(value);
  return {
    breadcrumbTitle: field(source?.breadcrumbTitle, fallback.breadcrumbTitle),
    breadcrumbSubtitle: field(source?.breadcrumbSubtitle, fallback.breadcrumbSubtitle),
    heroImageUrl: mediaUrl(source?.heroImage),
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    intro: field(source?.intro, fallback.intro),
    stepOneEyebrow: field(source?.stepOneEyebrow, fallback.stepOneEyebrow),
    stepOneTitle: field(source?.stepOneTitle, fallback.stepOneTitle),
    stepOneBody: field(source?.stepOneBody, fallback.stepOneBody),
    stepTwoEyebrow: field(source?.stepTwoEyebrow, fallback.stepTwoEyebrow),
    stepTwoLabel: field(source?.stepTwoLabel, fallback.stepTwoLabel),
    stepTwoHelp: field(source?.stepTwoHelp, fallback.stepTwoHelp),
    areaPlaceholder: field(source?.areaPlaceholder, fallback.areaPlaceholder),
    areaUnit: field(source?.areaUnit, fallback.areaUnit),
    popularBadge: field(source?.popularBadge, fallback.popularBadge),
    defaultPackage: field(source?.defaultPackage, fallback.defaultPackage),
    estimateEyebrow: field(source?.estimateEyebrow, fallback.estimateEyebrow),
    estimateTitle: field(source?.estimateTitle, fallback.estimateTitle),
    labelPackage: field(source?.labelPackage, fallback.labelPackage),
    labelRate: field(source?.labelRate, fallback.labelRate),
    labelArea: field(source?.labelArea, fallback.labelArea),
    labelTotal: field(source?.labelTotal, fallback.labelTotal),
    ctaLabel: field(source?.ctaLabel, fallback.ctaLabel),
    disclaimer: field(source?.disclaimer, fallback.disclaimer),
    whatsappIntro: field(source?.whatsappIntro, fallback.whatsappIntro),
    messagePackageLabel: field(source?.messagePackageLabel, fallback.messagePackageLabel),
    messageAreaLabel: field(source?.messageAreaLabel, fallback.messageAreaLabel),
    messageAreaMissing: field(source?.messageAreaMissing, fallback.messageAreaMissing),
    messageTotalLabel: field(source?.messageTotalLabel, fallback.messageTotalLabel),
    messageClosing: field(source?.messageClosing, fallback.messageClosing),
    seo: mapSeo(source?.seo, fallback.seo),
  };
}

function mapContact(value: unknown): ContactContent {
  const fallback = fallbackSite.contactPage;
  const source = asRecord(value);
  const details = Array.isArray(source?.details) ? source.details : [];
  const hours = Array.isArray(source?.hours) ? source.hours : [];
  const projectTypes = Array.isArray(source?.projectTypes) ? source.projectTypes : [];

  return {
    breadcrumbTitle: field(source?.breadcrumbTitle, fallback.breadcrumbTitle),
    breadcrumbSubtitle: field(source?.breadcrumbSubtitle, fallback.breadcrumbSubtitle),
    heroImageUrl: mediaUrl(source?.heroImage),
    studioImageUrl: mediaUrl(source?.studioImage),
    eyebrow: field(source?.eyebrow, fallback.eyebrow),
    title: field(source?.title, fallback.title),
    titleHighlight: field(source?.titleHighlight, fallback.titleHighlight),
    intro: field(source?.intro, fallback.intro),
    details:
      details.length === 0
        ? fallback.details
        : details.map((item, index) => {
            const record = asRecord(item);
            const base = fallback.details[index];
            return {
              label: field(record?.label, base?.label ?? ""),
              value: field(record?.value, base?.value ?? ""),
              href: field(record?.href, base?.href ?? "", true),
            };
          }),
    hoursEyebrow: field(source?.hoursEyebrow, fallback.hoursEyebrow),
    hoursTitle: field(source?.hoursTitle, fallback.hoursTitle),
    hoursHighlight: field(source?.hoursHighlight, fallback.hoursHighlight),
    hoursIntro: field(source?.hoursIntro, fallback.hoursIntro),
    hours:
      hours.length === 0
        ? fallback.hours
        : hours.map((item, index) => {
            const record = asRecord(item);
            const base = fallback.hours[index];
            return {
              label: field(record?.label, base?.label ?? ""),
              value: field(record?.value, base?.value ?? ""),
            };
          }),
    formEyebrow: field(source?.formEyebrow, fallback.formEyebrow),
    nameLabel: field(source?.nameLabel, fallback.nameLabel),
    namePlaceholder: field(source?.namePlaceholder, fallback.namePlaceholder),
    emailLabel: field(source?.emailLabel, fallback.emailLabel),
    emailPlaceholder: field(source?.emailPlaceholder, fallback.emailPlaceholder),
    phoneLabel: field(source?.phoneLabel, fallback.phoneLabel),
    phonePlaceholder: field(source?.phonePlaceholder, fallback.phonePlaceholder),
    projectLabel: field(source?.projectLabel, fallback.projectLabel),
    projectPlaceholder: field(source?.projectPlaceholder, fallback.projectPlaceholder),
    messageLabel: field(source?.messageLabel, fallback.messageLabel),
    messagePlaceholder: field(source?.messagePlaceholder, fallback.messagePlaceholder),
    submitLabel: field(source?.submitLabel, fallback.submitLabel),
    successMessage: field(source?.successMessage, fallback.successMessage),
    honeypotMessage: field(source?.honeypotMessage, fallback.honeypotMessage),
    errorMessage: field(source?.errorMessage, fallback.errorMessage),
    nameError: field(source?.nameError, fallback.nameError),
    emailError: field(source?.emailError, fallback.emailError),
    projectError: field(source?.projectError, fallback.projectError),
    messageError: field(source?.messageError, fallback.messageError),
    whatsappIntro: field(source?.whatsappIntro, fallback.whatsappIntro),
    projectTypes:
      projectTypes.length === 0
        ? fallback.projectTypes
        : projectTypes.map((item, index) => {
            const record = asRecord(item);
            const base = fallback.projectTypes[index];
            return {
              value: field(record?.value, base?.value ?? "other"),
              label: field(record?.label, base?.label ?? "Other"),
            };
          }),
    seo: mapSeo(source?.seo, fallback.seo),
  };
}

async function fetchEntry(slug: string) {
  try {
    return await unstable_cache(
      async () => {
        const payload = await getPayload({ config });
        return payload.findGlobal({
          slug: slug as "site",
          depth: 2,
        });
      },
      ["payload-global", slug],
      { revalidate: 60, tags: ["payload", `payload:${slug}`] },
    )();
  } catch (error) {
    console.error(`Payload request for ${slug} failed`, error);
    return null;
  }
}

export function pageMetadata(seo: SeoContent): Metadata {
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
    },
  };
}

export const getGlobal = cache(async () => mapGlobal(await fetchEntry("site")));
export const getHomePage = cache(async () => mapHome(await fetchEntry("home-page")));
export const getAboutPage = cache(async () => mapAbout(await fetchEntry("about-page")));
export const getGalleryPage = cache(async () => mapGallery(await fetchEntry("gallery-page")));
export const getPricingPage = cache(async () => mapPricing(await fetchEntry("pricing-page")));
export const getQuotePage = cache(async () => mapQuote(await fetchEntry("quote-page")));
export const getContactPage = cache(async () => mapContact(await fetchEntry("contact-page")));
