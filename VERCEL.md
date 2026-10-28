# Deploy on Vercel

The site is a Next.js app. All editable copy is in one file:

`src/content/site.json`

There is no database and no CMS. Vercel serves the file that was in the project when you deployed.

## 1. Push the project to GitHub

Commit the project, including `src/content/site.json`, and push it to a GitHub repository.

## 2. Create the Vercel project

1. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
2. Leave **Root Directory** as the repository root.
3. Framework preset: **Next.js**.
4. Deploy.

No environment variables are required. You can set `NEXT_PUBLIC_SITE_URL` to the live address, with no trailing slash, if you want metadata to use that domain. Example: `https://homecareconstructions.vercel.app`.

## 3. Change the live site

Vercel’s servers do not keep changes written to the disk. To update the published site:

1. Change `src/content/site.json`.
2. Commit and push.
3. Vercel redeploys from that commit.

You can change the file in your editor, or locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000/edit](http://localhost:3000/edit), edit the fields, and click **Save file**. That writes `src/content/site.json`. Commit and push that file to publish the change.

To replace a photo, add the image to the `public` folder and set the matching field to a path such as `/kitchen.jpg`.

## Optional edit key

Set `CONTENT_EDIT_KEY` if `/edit` should ask for a password before saving. On Vercel this still cannot store the file, so production updates stay a commit and redeploy.

## Custom domain

1. Add the domain in **Project → Settings → Domains**.
2. Set `NEXT_PUBLIC_SITE_URL` to `https://your-domain.com`.
3. Redeploy.
