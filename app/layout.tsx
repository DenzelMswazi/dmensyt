import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true, 
});

export const metadata: Metadata = {
  title: "DMENS GIFT SHOP",
  description: "DMens - Style Made Simple for the Modern Man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main> 
          {children}
          </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
