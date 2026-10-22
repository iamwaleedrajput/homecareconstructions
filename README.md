# Home Care Constructions

Next.js site with a Strapi CMS. Every public page — navigation, footer, home, about, gallery, pricing, quote calculator, and contact — is editable in Strapi. If Strapi is unavailable, the site renders the copy in `cms/data/site.json`.

## Local development

```bash
npm install
npm run cms
```

In another terminal:

```bash
cp .env.example .env.local
npm run dev
```

Set `STRAPI_URL=http://localhost:1337` in `.env.local`. The CMS admin is at [http://localhost:1337/admin](http://localhost:1337/admin). The first launch creates an admin user and publishes the starter content.

## Deploy the website on Vercel

1. Import this repository in Vercel. Leave the root directory as the repository root (the Next.js app). Framework preset: Next.js.
2. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` — production site URL, no trailing slash
   - `STRAPI_URL` — public Strapi origin, no `/api` suffix
   - `STRAPI_API_TOKEN` — optional read token if the Public role cannot read content
   - `REVALIDATE_SECRET` — shared secret for the Strapi webhook
3. Deploy. `STRAPI_URL` must be present at build time so uploaded images are allowed by Next.js image optimization.

After you change content, Strapi can refresh the site without a new Vercel build. In Strapi, open Settings → Webhooks and add:

- URL: `https://YOUR_DOMAIN/api/revalidate`
- Header: `x-revalidate-secret: YOUR_REVALIDATE_SECRET`
- Events: entry publish, unpublish, and delete

The site also rechecks Strapi every 60 seconds.

## Deploy Strapi

Strapi is a long-running Node server with a database, so it does not run on Vercel. Host `cms/` on [Strapi Cloud](https://strapi.io/cloud) (set the project directory to `cms`), Railway, or Render.

Production settings:

- `DATABASE_CLIENT=postgres`
- `DATABASE_URL` — Postgres connection string
- `DATABASE_SSL=true` when the host requires it
- `PUBLIC_URL` — the public CMS URL, no trailing slash
- Generate new values for `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`, and `ENCRYPTION_KEY`

The Postgres driver is already included. A `Dockerfile` in `cms/` is included for container hosts. Build it from the `cms` directory.

In production, create a read-only API token and set it as `STRAPI_API_TOKEN` on Vercel, or leave the Public role allowed to find the single types (the seed does this on first boot).
