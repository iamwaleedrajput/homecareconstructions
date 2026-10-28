import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit site content",
  robots: { index: false, follow: false },
};

export default function EditLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
