import type { Schema, Struct } from '@strapi/strapi';

export interface AboutStory extends Struct.ComponentSchema {
  collectionName: 'components_about_storys';
  info: {
    displayName: 'Our story';
    icon: 'layer';
  };
  attributes: {
    accentImage: Schema.Attribute.Media<'images'>;
    accentImageAlt: Schema.Attribute.String;
    captionSpan: Schema.Attribute.String;
    captionStrong: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    mainImage: Schema.Attribute.Media<'images'>;
    mainImageAlt: Schema.Attribute.String;
    paragraphOne: Schema.Attribute.Text;
    paragraphTwo: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'shared.text-item', true>;
    secondaryImage: Schema.Attribute.Media<'images'>;
    secondaryImageAlt: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface ContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_contact_details';
  info: {
    displayName: 'Contact detail';
    icon: 'phone';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContactHour extends Struct.ComponentSchema {
  collectionName: 'components_contact_hours';
  info: {
    displayName: 'Opening hour';
    icon: 'clock';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContactProjectType extends Struct.ComponentSchema {
  collectionName: 'components_contact_project_types';
  info: {
    displayName: 'Project type';
    icon: 'briefcase';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_gallery_items';
  info: {
    displayName: 'Gallery item';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface GalleryMeta extends Struct.ComponentSchema {
  collectionName: 'components_gallery_metas';
  info: {
    displayName: 'Gallery meta';
    icon: 'information';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'Home about';
    icon: 'layer';
  };
  attributes: {
    badgeLabel: Schema.Attribute.String;
    badgeValue: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    facts: Schema.Attribute.Component<'shared.titled-item', true>;
    insetImage: Schema.Attribute.Media<'images'>;
    insetImageAlt: Schema.Attribute.String;
    linkHref: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    mainImage: Schema.Attribute.Media<'images'>;
    mainImageAlt: Schema.Attribute.String;
    paragraphOne: Schema.Attribute.Text;
    paragraphTwo: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface HomeCta extends Struct.ComponentSchema {
  collectionName: 'components_home_ctas';
  info: {
    displayName: 'Call to action';
    icon: 'layer';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    body: Schema.Attribute.Text;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeFeatured extends Struct.ComponentSchema {
  collectionName: 'components_home_featureds';
  info: {
    displayName: 'Featured work';
    icon: 'layer';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    linkHref: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    projects: Schema.Attribute.Component<'home.project', true>;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heros';
  info: {
    displayName: 'Hero';
    icon: 'layer';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    bottomLine: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    imageCaption: Schema.Attribute.String;
    lead: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    script: Schema.Attribute.String;
    scrollCue: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    sideWords: Schema.Attribute.Component<'shared.text-item', true>;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
    trustEmphasis: Schema.Attribute.String;
    trustMark: Schema.Attribute.String;
    trustText: Schema.Attribute.String;
  };
}

export interface HomeProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_processs';
  info: {
    displayName: 'Process';
    icon: 'layer';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.titled-item', true>;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface HomeProject extends Struct.ComponentSchema {
  collectionName: 'components_home_projects';
  info: {
    displayName: 'Featured project';
    icon: 'landscape';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_servicess';
  info: {
    displayName: 'Services';
    icon: 'layer';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    intro: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.titled-item', true>;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonialss';
  info: {
    displayName: 'Testimonials';
    icon: 'layer';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface HomeWhy extends Struct.ComponentSchema {
  collectionName: 'components_home_whys';
  info: {
    displayName: 'Why us';
    icon: 'layer';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.titled-item', true>;
    title: Schema.Attribute.Text;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface PricingPackage extends Struct.ComponentSchema {
  collectionName: 'components_pricing_packages';
  info: {
    displayName: 'Kitchen package';
    icon: 'priceTag';
  };
  attributes: {
    calculatorDescription: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    groups: Schema.Attribute.Component<'shared.package-group', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.Text;
    pricePerSqFt: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    tier: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPackageGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_package_groups';
  info: {
    displayName: 'Package group';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.text-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogCaption: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogFooter: Schema.Attribute.String;
    ogHeadline: Schema.Attribute.String;
    ogHighlight: Schema.Attribute.String;
    ogTitle: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quotes';
  };
  attributes: {
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    displayName: 'Text item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTitledItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_titled_items';
  info: {
    displayName: 'Titled item';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'about.story': AboutStory;
      'contact.detail': ContactDetail;
      'contact.hour': ContactHour;
      'contact.project-type': ContactProjectType;
      'gallery.item': GalleryItem;
      'gallery.meta': GalleryMeta;
      'home.about': HomeAbout;
      'home.cta': HomeCta;
      'home.featured': HomeFeatured;
      'home.hero': HomeHero;
      'home.process': HomeProcess;
      'home.project': HomeProject;
      'home.services': HomeServices;
      'home.testimonials': HomeTestimonials;
      'home.why': HomeWhy;
      'pricing.package': PricingPackage;
      'shared.link': SharedLink;
      'shared.package-group': SharedPackageGroup;
      'shared.seo': SharedSeo;
      'shared.testimonial': SharedTestimonial;
      'shared.text-item': SharedTextItem;
      'shared.titled-item': SharedTitledItem;
    }
  }
}
