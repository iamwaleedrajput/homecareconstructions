import type { Metadata } from "next";
import "./@assets/scss/style.scss";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import AOSProvider from "./components/AOSProvider";
import { getGlobal } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://homecareconstructions.com";

  return {
    metadataBase: new URL(siteUrl),
    title: global.seo.metaTitle,
    description: global.seo.metaDescription,
    openGraph: {
      type: "website",
      locale: "en_PK",
      siteName: global.siteName,
      title: global.seo.ogTitle,
      description: global.seo.ogDescription,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: global.seo.ogTitle || global.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: global.seo.ogTitle,
      description: global.seo.ogDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();

  return (
    <html lang="en">
      <body>
        <SplashScreen content={global} />
        <AOSProvider />
        <Navbar content={global} />
        {children}
        <Footer content={global} />
      </body>
    </html>
  );
}
