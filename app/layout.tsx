import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const siteUrl = "https://cj.greglabs.nl";
const siteTitle = "Chigozie G. Okuma | AI Builder & Full Stack Developer";
const siteDescription =
  "Explore Chigozie G. Okuma's portfolio of AI applications, full stack development, automation, cloud and cybersecurity projects.";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Chigozie G. Okuma",
  },
  description: siteDescription,
  keywords: [
    "Chigozie G. Okuma",
    "AI builder",
    "full stack developer",
    "automation specialist",
    "AI portfolio",
    "cybersecurity projects",
    "cloud engineering",
    "Germany",
  ],
  authors: [{ name: "Chigozie G. Okuma", url: siteUrl }],
  creator: "Chigozie G. Okuma",
  publisher: "Chigozie G. Okuma",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Chigozie G. Okuma Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Chigozie G. Okuma â€” AI Builder, Full Stack Developer and Automation Specialist",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@cjlearnlife",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090d",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Chigozie G. Okuma",
      url: siteUrl,
      image: `${siteUrl}/icon.jpg`,
      jobTitle: ["AI Builder", "Full Stack Developer", "Automation Specialist"],
      sameAs: [
        "https://www.linkedin.com/in/cjokuma23",
        "https://github.com/Learnlife001",
        "https://x.com/cjlearnlife",
        "https://www.instagram.com/cjlearnlife",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Chigozie G. Okuma Portfolio",
      description: siteDescription,
      inLanguage: "en",
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
