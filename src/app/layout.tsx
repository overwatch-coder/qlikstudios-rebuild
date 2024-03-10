import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Script from "next/script";
import AosProvider from "@/providers/AosProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Home - Qlik Studios",
  description:
    "Results-oriented visual content that meets their personal satisfaction as well as their marketing goals, communication and professional services.",
  keywords: [
    "Photography",
    "Videography",
    "Content-creation",
    "Media Services",
    "Portrait",
    "Photo-shoot",
    "Graduation",
    "Birthday",
    "Wedding",
    "Products",
  ],
  authors: [{ name: "D Rwoy" }, { name: "Gabriel" }],
  applicationName: "Qlik Studios Media Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <AosProvider>
        <body className={`${poppins.className}`}>
          <section className="flex flex-col min-h-screen">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </section>
        </body>
      </AosProvider>
    </html>
  );
}
