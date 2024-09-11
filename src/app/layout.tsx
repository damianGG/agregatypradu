import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// Bootstrap and custom scss
import "@/assets/scss/style.scss";
import NavbarOne from "@/components/blocks/navbar/navbar-1/NavbarOne";
import Toplogo from "@/components/blocks/navbar/top-logo/Toplogo";
import Link from "next/link";
import AccessibilityButton from "@/components/reuseable/AccessibilityButton";
import Footer1 from "@/components/blocks/footer/Footer1";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agregaty pradowe",
  description: "Agregaty pradowe dużej mocy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="pl" data-bs-theme="light">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
        <link rel="manifest" href="favicon_package/site.webmanifest" />
        <link rel="mask-icon" href="/favicon_package/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={manrope.className}>

        <NavbarOne />
        {/* <AccessibilityButton /> */}
        <div>{children}</div>
        <Footer1 />
      </body>
    </html>

  );
}
