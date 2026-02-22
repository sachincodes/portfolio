import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin Joshi",
  description:
    "Personal portfolio of Sachin Joshi — small software experiments, projects, and notes about cloud, AI, and DevOps.",
  openGraph: {
    title: "Sachin Joshi",
    description:
      "Small projects, cloud demos, and experiments by Sachin Joshi.",
    url: "https://sachinjoshi.com",
    siteName: "Sachin Joshi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin Joshi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Base URL used to resolve Open Graph / Twitter images when generating metadata.
// Set NEXT_PUBLIC_SITE_URL in your environment (e.g. https://example.com) for production.
export const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sachinjoshi.com");

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get("theme")?.value;
  // Default to light on the server when no saved theme exists to avoid
  // relying on the client's `prefers-color-scheme` which can cause
  // SSR/CSR mismatches and unintentional dark mode.
  const theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

  return (
    <html lang="en" data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
