import type { Metadata } from "next";
import "./@assets/scss/style.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://homecareconstructions.com"),
  title: "Home Care Constructions | Design, Build & Transform",
  description:
    "Premium construction, modular kitchens, and thoughtful interiors in Rawalpindi, Pakistan. Designed and built with precision, care, and timeless detail.",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Home Care Constructions",
    title: "Home Care Constructions | Design, Build & Transform",
    description:
      "Premium construction, modular kitchens, and thoughtful interiors in Rawalpindi, Pakistan. Designed and built with precision, care, and timeless detail.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Home Care Constructions — Premium Design, Build & Transform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care Constructions | Design, Build & Transform",
    description:
      "Premium construction, modular kitchens, and thoughtful interiors in Rawalpindi, Pakistan.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
