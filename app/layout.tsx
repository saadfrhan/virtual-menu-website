import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedshahlassicenter.vercel.app"),
  title: "Ahmed Shah Lassi Center",
  description:
    "Tabdeeli ke Zaiqe, Shake ki Baat - Har Sip mein Chhupi Khushiyan!",
  openGraph: {
    title: "Ahmed Shah Lassi Center",
    description:
      "Tabdeeli ke Zaiqe, Shake ki Baat - Har Sip mein Chhupi Khushiyan!",
    url: "https://ahmedshahlassicenter.vercel.app",
    siteName: "Ahmed Shah Lassi Center",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ahmed Shah Lassi Center",
    card: "summary_large_image",
  },
  verification: {
    google: "zHB4gjR-LZ7okfLYgT9olSwGCyo9geeG3Ky4RUpnr1k",
    yandex: "b76b50212a9d9960",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.className}`}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
