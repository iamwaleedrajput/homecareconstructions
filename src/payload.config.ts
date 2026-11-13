import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import fs from "fs";
import path from "path";
import { buildConfig, type Payload } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { globals } from "./globals";
import siteData from "./content/site.json";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const databaseUrl = process.env.DATABASE_URL?.trim();
const usePostgres = Boolean(databaseUrl?.startsWith("postgres"));
const sqliteFile = path.resolve(dirname, "../.payload/data.db");

if (!usePostgres) {
  fs.mkdirSync(path.dirname(sqliteFile), { recursive: true });
}
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function markerAt(doc: unknown, path: string[]) {
  let current: unknown = doc;
  for (const key of path) {
    if (!current || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

async function ensureSchema(payload: Payload) {
  if (process.env.NODE_ENV !== "production") return;

  const adapter = payload.db as {
    requireDrizzleKit?: () => {
      pushSchema: (
        schema: unknown,
        drizzle: unknown,
        schemas?: string[],
        tablesFilter?: unknown,
        extensionsFilter?: unknown,
      ) => Promise<{ apply: () => Promise<void>; warnings: string[] }>;
    };
    schema: unknown;
    drizzle: unknown;
    schemaName?: string;
    tablesFilter?: unknown;
  };

  if (!adapter.requireDrizzleKit || !adapter.drizzle) return;

  const { pushSchema } = adapter.requireDrizzleKit();
  const { apply, warnings } = await pushSchema(
    adapter.schema,
    adapter.drizzle,
    adapter.schemaName ? [adapter.schemaName] : undefined,
    adapter.tablesFilter,
    undefined,
  );

  if (warnings.length) {
    payload.logger.warn(`Schema push warnings:\n${warnings.join("\n")}`);
  }

  await apply();
}

async function seedIfEmpty(payload: Payload, slug: string, data: unknown, path: string[]) {
  const current = await payload.findGlobal({ slug: slug as "site" });
  const marker = markerAt(current, path);
  if (typeof marker === "string" && marker.trim()) return;
  await payload.updateGlobal({
    slug: slug as "site",
    data: data as never,
  });
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — Home Care",
    },
  },
  collections: [Users, Media],
  globals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "local-dev-secret-change-before-deploy",
  serverURL: siteUrl,
  cors: [siteUrl],
  csrf: [siteUrl],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: usePostgres
    ? postgresAdapter({
        pool: {
          connectionString: databaseUrl,
        },
        push: true,
      })
    : sqliteAdapter({
        client: {
          url: `file:${sqliteFile}`,
        },
        push: true,
      }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  onInit: async (payload) => {
    await ensureSchema(payload);
    await seedIfEmpty(payload, "site", siteData.global, ["siteName"]);
    await seedIfEmpty(payload, "home-page", siteData.homePage, ["hero", "title"]);
    await seedIfEmpty(payload, "about-page", siteData.aboutPage, ["breadcrumbTitle"]);
    await seedIfEmpty(payload, "gallery-page", siteData.galleryPage, ["breadcrumbTitle"]);
    await seedIfEmpty(payload, "pricing-page", siteData.pricingPage, ["breadcrumbTitle"]);
    await seedIfEmpty(payload, "quote-page", siteData.quotePage, ["breadcrumbTitle"]);
    await seedIfEmpty(payload, "contact-page", siteData.contactPage, ["breadcrumbTitle"]);
  },
});
