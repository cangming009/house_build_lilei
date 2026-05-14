import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "任丘李磊自建房｜任丘自建房施工、农村别墅、旧房翻新、室内外装修",
  description:
    "任丘李磊自建房，提供任丘及周边农村自建房、主体施工、旧房翻新、室内外装修等服务，支持现场沟通、案例展示和电话咨询。",
  keywords: [
    "任丘自建房",
    "任丘农村自建房",
    "任丘装修队",
    "任丘旧房翻新",
    "任丘主体施工",
    "任丘李磊自建房",
    "农村别墅施工",
  ],
  openGraph: {
    title: "任丘李磊自建房｜任丘自建房施工、农村别墅、旧房翻新、室内外装修",
    description:
      "任丘李磊自建房，提供任丘及周边农村自建房、主体施工、旧房翻新、室内外装修等服务。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
