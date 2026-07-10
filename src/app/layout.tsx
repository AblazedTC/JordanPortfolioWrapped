import type { Metadata } from "next";
import "@/styles/globals.css";
import { Archivo_Black, Space_Grotesk } from "next/font/google";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Jordan Wrapped | Jordan Jerkins, Software Engineer",
  description:
    "Jordan Jerkins' portfolio with projects, internships, tech stack, and growth.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning: browser extensions (Grammarly etc.) mutate <body> attrs before React hydrates */}
      <body
        suppressHydrationWarning
        className={`${display.variable} ${body.variable} bg-background font-body`}
      >
        {children}
      </body>
    </html>
  );
}
