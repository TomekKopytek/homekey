import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// dodana custom czcionka globalnie pod cały projekt
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display : "swap"
});

export const metadata: Metadata = {
  title: "Homekey Realty",
  description: "Twoje biuro nieruchomości",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.className}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
