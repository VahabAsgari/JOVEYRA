import type { Metadata } from "next";
import { Cinzel, Old_Standard_TT } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const oldStandard = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-old-standard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joveyra — Quantitative Investment",
  description:
    "Joveyra is a quantitative investment firm founded on a singular conviction: that market complexity yields only to absolute structural discipline.",
  generator: "v0.app",
};

export const viewport = {
  themeColor: "#0b0c10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${oldStandard.variable} bg-background`}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
