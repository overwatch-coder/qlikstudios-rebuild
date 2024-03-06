import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Home | Qlik Studios",
  description:
    "Results-oriented visual content that meets their personal satisfaction as well as their marketing goals, communication and professional services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.className} overflow-x-hidden`}>
        <section className="flex flex-col min-h-screen">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
