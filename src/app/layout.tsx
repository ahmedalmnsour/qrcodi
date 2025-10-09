import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import { Poppins } from 'next/font/google'; // <-- 1. استوردنا الخط هنا

// 2. قمنا بإعداد الخط هنا
const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Codi - كودي",
  description: "Your digital portal in a click",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* 3. طبقنا الخط على كامل الجسم باستخدام className */}
      <body className={poppins.className}> 
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}