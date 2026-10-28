import { cache } from "react";
import fs from "fs/promises";
import path from "path";

export const siteContentPath = path.join(process.cwd(), "src/content/site.json");

export const siteSections = [
  "global",
  "homePage",
  "aboutPage",
  "galleryPage",
  "pricingPage",
  "quotePage",
  "contactPage",
] as const;

export const readSiteText = cache(async () => fs.readFile(siteContentPath, "utf8"));

export const readSiteFile = cache(async () => JSON.parse(await readSiteText()) as Record<string, unknown>);

export function validateSiteFile(value: unknown): string | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return "Content must be a JSON object.";
  }

  const record = value as Record<string, unknown>;
  for (const key of siteSections) {
    if (!record[key] || typeof record[key] !== "object" || Array.isArray(record[key])) {
      return `Missing the "${key}" section.`;
    }
  }

  return null;
}

export async function writeSiteFile(value: unknown) {
  const error = validateSiteFile(value);
  if (error) throw new Error(error);
  await fs.writeFile(siteContentPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}
