import type { Metadata } from "next";
import "./@assets/scss/style.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export const metadata: Metadata = {
  title: "Home Care Constructions | Design, Build & Transform",
  description:
    "Home Care Constructions designs and builds thoughtful interiors and lasting spaces — from concept to completion.",
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
