import "../styles/global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "../components/molecule/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/molecule/footer";
import { ThemeProvider, ThemeSwitch } from "../components/util/theme-switch";
import { metaData } from "../config";
import Image from "next/image";
import logo from "../../public/photos/JO-Button-Logo.svg"
import SocialLinks from "src/components/molecule/linkGroups";

require('dotenv').config()

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="flex flex-col items-center justify-center mx-auto overscroll-none dark:bg-[url('/photos/blob-dark.svg')] lg:flex lg:justify-between lg:gap-6">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="lg:flex lg:justify-between lg:gap-6">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[50%] flex-col lg:justify-between py-5 pt-20 lg:pt-16 md:px-0 lg:px-5">
              <div className="flex flex-col items-start gap-5 max-w-full">
                <Image className="bg-slate-100 rounded-full p-1 mx-auto lg:mx-0" src={logo} width={60} height={60} alt="logo" />
                <h1 className="text-4xl font-bold mx-auto lg:mx-0 mt-4">{metaData.title}</h1>
                <p className="text-lg mb-3 mx-auto lg:mx-0">
                  Full-Stack Developer | Problem Solver
                </p>
                <Navbar />
              </div>
              <div className="flex-row-reverse justify-between px-4 hidden lg:flex">
                <SocialLinks />
                <ThemeSwitch />
              </div>
            </header>
            <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col lg:px-6 px-2 mb-6 max-w-[1000px] w-full mx-auto">
              {children}
              
              <div className="flex-row-reverse justify-between lg:px-4 lg:hidden flex align-middle">
                <SocialLinks />
                <Footer />
                <ThemeSwitch />
              </div>
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body >
    </html >
  );
}
