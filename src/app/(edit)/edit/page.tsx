import ContentEditor from "./ContentEditor";
import { readSiteText } from "@/lib/content-file";

export const dynamic = "force-dynamic";

export default async function EditPage() {
  const text = await readSiteText();
  const requiresKey = Boolean(process.env.CONTENT_EDIT_KEY);
  const canSave = requiresKey || process.env.NODE_ENV !== "production";

  return <ContentEditor initialText={text} requiresKey={requiresKey} canSave={canSave} />;
}
