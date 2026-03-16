import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Maheshkumar Shankar | Software Engineer",
  description:
    "Maheshkumar Shankar — Software Engineer. React, Next.js, TypeScript, and full-stack development.",
  openGraph: {
    title: "Maheshkumar Shankar | Software Engineer",
    description:
      "Maheshkumar Shankar — Software Engineer. React, Next.js, TypeScript, and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
