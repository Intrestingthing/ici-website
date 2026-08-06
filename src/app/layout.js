import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://iciedu.org";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Career Counselling & Computer Courses, Jhunjhunu`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ICI Group",
    "ICI Computer Center",
    "Innovative Career Institute",
    "Indian Computer Institute",
    "Jhunjhunu",
    "computer courses",
    "UG PG admission counselling",
    "RS-CIT",
    "DCA",
    "ADCA",
    "Tally",
    "O Level",
    "distance learning",
    "Geduconnect",
    "AISECT",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Career Counselling & Computer Courses, Jhunjhunu`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, Jhunjhunu`,
    description: site.description,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: site.name,
  alternateName: ["Innovative Career Institute", "Indian Computer Institute", "ICI Jhunjhunu"],
  description: site.description,
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Jhunjhunu",
    addressRegion: "Rajasthan",
    postalCode: "333001",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-19:00",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white pb-16 text-slate-800 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <LanguageProvider>
          <Navbar />
          <AnnouncementBar />
          <main className="w-full flex-1 overflow-x-clip">{children}</main>
          <Footer />
          <MobileActionBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
