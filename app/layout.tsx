import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M.H.-Građevinar | Građevinski Materijal i Betonara Živinice",
  description:
    "Vodeća firma za prodaju građevinskog materijala, opreme i betona u Živinicama. Posjetite nas danas.",
  keywords: [
    "građevinski materijal",
    "betonara",
    "Živinice",
    "M.H. Građevinar",
    "beton",
    "građevinska oprema",
    "Bosna i Hercegovina",
  ],
  openGraph: {
    title: "M.H.-Građevinar | Građevinski Materijal i Betonara Živinice",
    description:
      "Vodeća firma za prodaju građevinskog materijala, opreme i betona u Živinicama. Posjetite nas danas.",
    locale: "bs_BA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
