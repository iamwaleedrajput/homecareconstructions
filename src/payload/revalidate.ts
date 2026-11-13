import { revalidatePath, revalidateTag } from "next/cache";

export function refreshSite() {
  try {
    revalidateTag("payload", "max");
    revalidatePath("/", "layout");
  } catch {
    // Saving during startup, before a Next.js request exists, cannot refresh the cache.
  }
}
