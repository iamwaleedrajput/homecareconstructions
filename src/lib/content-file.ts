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

// On hosts that cannot keep file changes (like Vercel), saves go to GitHub instead.
// The commit triggers a redeploy that publishes the new content.
function githubTarget() {
  const token = process.env.GITHUB_TOKEN;
  const repo =
    process.env.GITHUB_REPO ||
    (process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
      ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
      : "");
  const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "master";
  if (!token || !repo) return null;
  return {
    url: `https://api.github.com/repos/${repo}/contents/src/content/site.json`,
    branch,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };
}

export const usesGitHub = () => githubTarget() !== null;

async function readGitHubFile() {
  const target = githubTarget();
  if (!target) throw new Error("GitHub saving is not set up.");
  const response = await fetch(`${target.url}?ref=${encodeURIComponent(target.branch)}`, {
    headers: target.headers,
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`GitHub read failed (${response.status}). Check GITHUB_TOKEN and GITHUB_REPO.`);
  const data = (await response.json()) as { sha: string; content: string };
  return { sha: data.sha, text: Buffer.from(data.content, "base64").toString("utf8") };
}

// Latest saved text: from GitHub when set up, so the editor shows saves that are still deploying.
export async function readLatestSiteText() {
  if (!usesGitHub()) return readSiteText();
  try {
    return (await readGitHubFile()).text;
  } catch {
    return readSiteText();
  }
}

export async function commitSiteFile(value: unknown) {
  const error = validateSiteFile(value);
  if (error) throw new Error(error);
  const target = githubTarget();
  if (!target) throw new Error("GitHub saving is not set up.");

  const { sha } = await readGitHubFile();
  const response = await fetch(target.url, {
    method: "PUT",
    headers: { ...target.headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Update site content from /edit",
      content: Buffer.from(`${JSON.stringify(value, null, 2)}\n`, "utf8").toString("base64"),
      sha,
      branch: target.branch,
    }),
  });
  if (!response.ok) {
    const detail = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new Error(`GitHub save failed (${response.status}): ${detail?.message ?? "unknown error"}`);
  }
}
