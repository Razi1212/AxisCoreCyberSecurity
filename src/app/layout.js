
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

export const metadata = {
  title: "Axis Core Solutions | Cybersecurity & Technology Solutions",
  description:
    "AXISCORE delivers cybersecurity, cloud security, infrastructure and digital transformation solutions.",
  icons: {
    icon: [
      {
        url: "/icon.png?v=2",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
