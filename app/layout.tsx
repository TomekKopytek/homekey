import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// dodana custom czcionka globalnie pod cały projekt
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display : "swap",
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  title: "Homekey Realty | Agencja nieruchomości",
  description: "Twoje biuro nieruchomości",
  icons: {
    icon: "images/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
