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
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
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
