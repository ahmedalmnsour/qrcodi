import type { Metadata, Viewport } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import { Cairo } from 'next/font/google';


const cairo = Cairo({
  weight: ['400', '700'],
  subsets: ['arabic', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qrcodi.me"),
  title: "كودي QR",
  description: "مُولِّد رموز QR بواجهة عربية.",
  authors: [{ name: "أحمد المنصور", url: "https://ahmed.almnsour.net" }],
  creator: "أحمد المنصور",
  openGraph: {
    title: "كودي QR",
    description: "مُولِّد رموز QR بواجهة عربية.",
    url: "https://www.qrcodi.me",
    siteName: "كودي",
    locale: "ar_KW",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "كودي — مُولِّد رموز QR بواجهة عربية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كودي QR",
    description: "مُولِّد رموز QR بواجهة عربية.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}