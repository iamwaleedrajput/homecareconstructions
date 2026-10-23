# Deploy on Vercel

The website and Payload CMS are one Next.js app. Vercel deploys both. The public site stays at `/`, and the editor is at `/admin`.

You need two Vercel storage add-ons:

- **Neon Postgres** for the content database. Payload cannot keep a SQLite file on Vercel.
- **Vercel Blob** for uploaded images. The serverless filesystem does not keep files.

## 1. Push the project to GitHub

Commit the project and push it to a GitHub repository if it is not there already.

## 2. Create the Vercel project

1. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
2. Leave **Root Directory** as the repository root.
3. Framework preset: **Next.js**.
4. Set **Node.js Version** to **24.x**. Payload needs Node `22.23.4` or newer, or Node `24.22.1` or newer.
5. Do not deploy yet. Open **Environment Variables** first.

## 3. Add storage

In the Vercel project:

1. Open **Storage** and create a **Neon** (Postgres) database. Connect it to this project. Vercel adds `DATABASE_URL`.
2. Open **Storage** again and create a **Blob** store. Connect it to this project. Vercel adds `BLOB_READ_WRITE_TOKEN`.

## 4. Add the remaining environment variables

Set these for Production, Preview, and Development:

| Name | Value |
| --- | --- |
| `PAYLOAD_SECRET` | A long random string. Run `openssl rand -base64 32` locally and paste the result. |
| `NEXT_PUBLIC_SITE_URL` | The production URL, with no trailing slash. Example: `https://homecareconstructions.vercel.app` |

`DATABASE_URL` and `BLOB_READ_WRITE_TOKEN` come from the storage connections. Do not invent those values.

After the first successful deploy, change `NEXT_PUBLIC_SITE_URL` to the custom domain if you add one, then redeploy.

## 5. Deploy

Click **Deploy**. The first boot creates the database tables and fills them with the current site copy. Later edits in the admin are kept.

## 6. Create the editor login

Open `https://YOUR_DOMAIN/admin`.

The first visit asks you to create an admin user. Use that email and password to edit the site. There is no default password.

## 7. Edit the site

In the admin sidebar:

- **Settings → Site settings** covers the name, logo, phone, WhatsApp number, navigation, footer, and SEO.
- **Pages** covers Home, About, Gallery, Pricing, Quote calculator, and Contact.

Upload an image on any image field to replace the built-in photo. Kitchen package prices also drive the quote calculator. Saving a page publishes it and refreshes the site within about a minute.

## Local editing

```bash
cp .env.example .env
```

Put a real `PAYLOAD_SECRET` in `.env`, then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000/admin](http://localhost:3000/admin) and create the first user. Local content is stored in `.payload/data.db` and is separate from production.

## Custom domain

1. Add the domain in **Project → Settings → Domains**.
2. Set `NEXT_PUBLIC_SITE_URL` to `https://your-domain.com`.
3. Redeploy.
