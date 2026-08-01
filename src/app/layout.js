import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
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

export const metadata = {
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
    "DCA",
    "ADCA",
    "Tally",
    "distance learning",
    "Geduconnect",
    "AISECT",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-800">
        <Navbar />
        <AnnouncementBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
