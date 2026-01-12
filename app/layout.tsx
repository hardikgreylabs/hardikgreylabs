import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hardik Patel | Fullstack .NET Developer & System Design Architect",
  description: "Fullstack .NET Developer with 10+ years of experience building scalable enterprise applications, SaaS platforms, and IoT solutions. Expert in .NET, React, Azure, AWS, and System Design.",
  keywords: ["Fullstack Developer", ".NET Developer", "C#", "ASP.NET Core", "React", "Azure", "AWS", "System Design", "SaaS", "IoT", "Software Architect"],
  authors: [{ name: "Hardik Patel" }],
  openGraph: {
    title: "Hardik Patel | Fullstack .NET Developer & System Design Architect",
    description: "10+ years of experience building scalable enterprise applications, SaaS platforms, and IoT solutions",
    type: "website",
    url: "https://hardikgreylabs.github.io/hardikgreylabs/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik Patel | Fullstack .NET Developer & System Design Architect",
    description: "10+ years of experience building scalable enterprise applications, SaaS platforms, and IoT solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
