import { timingSafeEqual } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { validateSiteFile, writeSiteFile } from "@/lib/content-file";

function canEdit(request: Request) {
  const expected = process.env.CONTENT_EDIT_KEY;
  if (!expected) return process.env.NODE_ENV !== "production";

  const provided = request.headers.get("x-edit-key") ?? "";
  const left = Buffer.from(provided);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export async function PUT(request: Request) {
  if (!canEdit(request)) {
    const message = process.env.CONTENT_EDIT_KEY
      ? "The edit key does not match."
      : "Saving is turned off on this server. Edit src/content/site.json in the project, then redeploy.";
    return NextResponse.json({ error: message }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "That is not valid JSON." }, { status: 400 });
  }

  const invalid = validateSiteFile(body);
  if (invalid) return NextResponse.json({ error: invalid }, { status: 400 });

  try {
    await writeSiteFile(body);
  } catch (error) {
    const code = error instanceof Error && "code" in error ? String(error.code) : "";
    if (code === "EROFS" || code === "EPERM" || code === "EACCES") {
      return NextResponse.json(
        {
          error:
            "This server cannot change the content file. Edit src/content/site.json in the project, then redeploy.",
        },
        { status: 500 },
      );
    }
    const message = error instanceof Error ? error.message : "Could not save the file.";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
