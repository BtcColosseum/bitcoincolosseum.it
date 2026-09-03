import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bitcoincolosseum.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bitcoin Colosseum | Il punto di riferimento per Bitcoin a Roma.",
  description:
    "Bitcoin Colosseum è la conference indipendente di Roma dedicato a Bitcoin, Lightning, Nostr, Bitchat, Cashu, Arkade e alla community peer-to-peer.",
  keywords: ["bitcoin", "roma", "conference", "lightning", "nostr", "bitchat", "cashu", "arkade", "community"],
  openGraph: {
    title: "Bitcoin Colosseum",
    description: "Il punto di riferimento per Bitcoin a Roma.",
    url: siteUrl,
    siteName: "Bitcoin Colosseum",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/images/hero.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Colosseum",
    description: "Il punto di riferimento per Bitcoin a Roma.",
    images: ["/images/hero.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FE6123",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
