
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Axis Core Solutions | Cybersecurity & Technology Solutions",
  description:
    "AXISCORE is a cybersecurity-focused technology company delivering security, cloud, infrastructure and digital transformation solutions for modern businesses.",
  icons: {
    icon: [
      {
        url: "/icon.jpeg?v=2",
        type: "image/jpeg",
        sizes: "32x32",
      },
    ],
    shortcut: "/icon.jpeg?v=2",
    apple: "/icon.jpeg?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
