import fs from 'fs';
import path from 'path';
import type { Core } from '@strapi/strapi';

const CONTENT_TYPES = [
  'api::global.global',
  'api::home-page.home-page',
  'api::about-page.about-page',
  'api::gallery-page.gallery-page',
  'api::pricing-page.pricing-page',
  'api::quote-page.quote-page',
  'api::contact-page.contact-page',
] as const;

type SiteFile = {
  global: Record<string, unknown>;
  homePage: Record<string, unknown>;
  aboutPage: Record<string, unknown>;
  galleryPage: Record<string, unknown>;
  pricingPage: Record<string, unknown>;
  quotePage: Record<string, unknown>;
  contactPage: Record<string, unknown>;
};

function loadSite(): SiteFile {
  const file = path.join(process.cwd(), 'data', 'site.json');
  return JSON.parse(fs.readFileSync(file, 'utf8')) as SiteFile;
}

async function enablePublicRead(strapi: Core.Strapi) {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  if (!publicRole) return;

  for (const uid of CONTENT_TYPES) {
    const action = `${uid}.find`;
    const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
      where: { action, role: publicRole.id },
    });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: {
          action,
          role: publicRole.id,
        },
      });
    }
  }
}

async function seedEntry(strapi: Core.Strapi, uid: string, data: Record<string, unknown>) {
  const documents = strapi.documents(uid as never);
  const existing = await documents.findFirst();
  if (existing) return;

  await documents.create({
    data,
    status: 'published',
  } as never);
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      const site = loadSite();
      await seedEntry(strapi, 'api::global.global', site.global);
      await seedEntry(strapi, 'api::home-page.home-page', site.homePage);
      await seedEntry(strapi, 'api::about-page.about-page', site.aboutPage);
      await seedEntry(strapi, 'api::gallery-page.gallery-page', site.galleryPage);
      await seedEntry(strapi, 'api::pricing-page.pricing-page', site.pricingPage);
      await seedEntry(strapi, 'api::quote-page.quote-page', site.quotePage);
      await seedEntry(strapi, 'api::contact-page.contact-page', site.contactPage);
      await enablePublicRead(strapi);
    } catch (error) {
      strapi.log.error('Unable to seed Strapi content');
      strapi.log.error(error);
    }
  },
};
