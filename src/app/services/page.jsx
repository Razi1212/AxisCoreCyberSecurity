
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Axis Core Solutions | Cybersecurity & Technology Solutions",
  description:
    "Explore AXISCORE's cybersecurity, penetration testing, managed security, network protection, cloud security, AI analytics, digital workspace and application development services.",
  keywords: [
    "AXISCORE",
    "cybersecurity services",
    "penetration testing",
    "VAPT services",
    "managed security services",
    "SOC as a service",
    "cloud security",
    "network security",
    "digital forensics",
    "Microsoft 365 security",
    "application development",
    "IT consulting"
  ],
  alternates: {
    canonical: "/services"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Cybersecurity & IT Services | AXISCORE",
    description:
      "Secure, modernize and transform your business with AXISCORE cybersecurity and technology solutions.",
    url: "/services",
    siteName: "AXISCORE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity & IT Services | AXISCORE",
    description:
      "Explore AXISCORE cybersecurity, cloud and digital technology solutions."
  }
};

const serviceNames = [
  "Offensive Security",
  "Managed Security",
  "Network & Infrastructure Security",
  "Forensics & Identity",
  "Strategic Modernization",
  "Cloud & Microsoft 365 Defense",
  "Analytics & AI Strategy",
  "Digital Workspace",
  "Advisory & Compliance",
  "Website & Application Services",
  "Cloud Services"
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AXISCORE",
  description:
    "Cybersecurity, cloud and digital technology solutions.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AXISCORE Services",
    itemListElement: serviceNames.map((name) => ({
      "@type": "OfferCatalog",
      name
    }))
  }
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c")
        }}
      />
      <ServicesClient />
    </>
  );
}
