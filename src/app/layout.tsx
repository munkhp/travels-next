import type { Metadata } from "next";
import { Archivo, Newsreader, Space_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import { getSiteSettings } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
import pageContent from "@/data/pageContent.json";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    metadataBase: new URL(SITE_URL),
    title: settings.metaTitle,
    description: settings.metaDescription,
    applicationName: SITE_NAME,
    alternates: { canonical: "./" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: pageContent.homePage.hero.image, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();
  const sameAs = [settings.facebookUrl].filter(Boolean);
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "TouristInformationCenter"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: settings.metaDescription,
        foundingDate: "2011",
        image: pageContent.homePage.hero.image,
        email: settings.email,
        telephone: settings.phone,
        founder: { "@type": "Person", name: pageContent.aboutPage.founder.name },
        address: {
          "@type": "PostalAddress",
          streetAddress: "37-56, United Nations Street, 4th khoroo, Chingeltei District",
          addressLocality: "Ulaanbaatar",
          addressCountry: "MN",
        },
        areaServed: "Mongolia",
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${newsreader.variable} ${spaceMono.variable} font-sans`}
      >
        <JsonLd data={organization} />
        <SiteChrome>
          <Header
            brandName={settings.brandName}
            brandTagline={settings.brandTagline}
            ctaLabel={settings.headerCtaLabel}
          />
        </SiteChrome>
        <main>{children}</main>
        <SiteChrome>
          <Footer />
        </SiteChrome>
      </body>
    </html>
  );
}
