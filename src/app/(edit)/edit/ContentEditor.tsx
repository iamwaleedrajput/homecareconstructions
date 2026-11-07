"use client";

import { useState } from "react";
import styles from "./editor.module.css";

export default function ContentEditor({
  initialText,
  requiresKey,
  canSave,
}: {
  initialText: string;
  requiresKey: boolean;
  canSave: boolean;
}) {
  const [text, setText] = useState(initialText);
  const [editKey, setEditKey] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSave) return;

    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      setMessage("That is not valid JSON. Fix the syntax, then save again.");
      return;
    }

    setPending(true);
    setMessage("");
    let response: Response;
    let result: { error?: string; deploying?: boolean } | null;
    try {
      response = await fetch("/api/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(editKey ? { "x-edit-key": editKey } : {}),
        },
        body: JSON.stringify(parsed),
        signal: AbortSignal.timeout(20000),
      });
      result = (await response.json().catch(() => null)) as { error?: string; deploying?: boolean } | null;
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === "TimeoutError";
      setMessage(
        timedOut
          ? "The server did not answer. This live server probably cannot save files. Edit src/content/site.json locally, then redeploy."
          : "Could not reach the server. Check your connection and try again.",
      );
      return;
    } finally {
      setPending(false);
    }

    if (!response.ok) {
      setMessage(result?.error || "Could not save the file.");
      return;
    }

    setText(`${JSON.stringify(parsed, null, 2)}\n`);
    setMessage(
      result?.deploying
        ? "Saved to GitHub. The live site updates in about a minute, after Vercel redeploys."
        : "Saved. src/content/site.json is updated.",
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div>
            <p className={styles.kicker}>Site content</p>
            <h1 className={styles.title}>Edit the file</h1>
            <p className={styles.path}>src/content/site.json</p>
          </div>
          <a className={styles.back} href="/">
            View the site
          </a>
        </header>

        <form className={styles.form} onSubmit={onSubmit}>
          {requiresKey ? (
            <label className={styles.field}>
              Edit key
              <input
                className={styles.input}
                type="password"
                value={editKey}
                autoComplete="current-password"
                onChange={(event) => setEditKey(event.target.value)}
              />
            </label>
          ) : null}

          <label className={styles.field}>
            All page fields
            <textarea
              className={styles.textarea}
              value={text}
              spellCheck={false}
              onChange={(event) => setText(event.target.value)}
            />
          </label>

          <div className={styles.actions}>
            <button className={styles.save} type="submit" disabled={pending || !canSave}>
              {pending ? "Saving…" : "Save file"}
            </button>
            {message ? <p className={styles.message}>{message}</p> : null}
          </div>
        </form>

        <p className={styles.note}>
          Change any text, link, price, or list in this file, then save. To replace a photo, put the
          image in the <code>public</code> folder and set the field to a path such as{" "}
          <code>/kitchen.jpg</code>. You can also open <code>src/content/site.json</code> in your
          editor. The site reads that same file.
        </p>
        {canSave ? null : (
          <p className={styles.note}>
            This server will not write the file. Change <code>src/content/site.json</code> in the
            project and redeploy, or set <code>CONTENT_EDIT_KEY</code> and <code>GITHUB_TOKEN</code>{" "}
            to save from here.
          </p>
        )}
      </div>
    </main>
  );
}
