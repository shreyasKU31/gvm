import "./globals.css";

// Use system fonts for reliable builds (no external fetch required)
// Google Fonts can be loaded via CSS if needed later
const fontVariables = {
  inter: "--font-inter",
  merriweather: "--font-merriweather",
};

// Comprehensive SEO Metadata
export const metadata = {
  // Basic Meta
  title: {
    default: "Gurukula Vidya Mandira | Best CBSE School in Kuduru, Magadi",
    template: "%s | Gurukula Vidya Mandira",
  },
  description: "Gurukula Vidya Mandira is a premier KSEEB affiliated school in Kuduru, Magadi, Bengaluru Rural District. Offering quality education from Pre-KG to 10th standard with traditional Indian values and modern academic excellence. 30+ years of educational excellence.",
  
  // Keywords
  keywords: [
    "Gurukula Vidya Mandira",
    "best school in Kuduru",
    "best school in Magadi",
    "KSEEB school Bengaluru",
    "Pre-KG school Magadi",
    "primary school Kuduru",
    "high school Magadi",
    "Karnataka state board school",
    "quality education Bengaluru rural",
    "traditional values school",
    "affordable school near Magadi",
    "school admissions 2025",
    "best school Bengaluru rural district",
    "GVM school",
    "Gurukula school Karnataka",
  ],

  // Authors and Creator
  authors: [{ name: "Gurukula Vidya Mandira" }],
  creator: "Gurukula Vidya Mandira",
  publisher: "Gurukula Vidya Mandira",

  // Robots
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

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gurukulavidyamandira.edu.in",
    siteName: "Gurukula Vidya Mandira",
    title: "Gurukula Vidya Mandira | Premier School in Kuduru, Magadi",
    description: "30+ years of educational excellence. Quality education from Pre-KG to 10th standard with traditional values and modern teaching methods. KSEEB affiliated school in Bengaluru Rural District.",
    images: [
      {
        url: "/assets/logo/logo.avif",
        width: 512,
        height: 512,
        alt: "Gurukula Vidya Mandira School Logo",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Gurukula Vidya Mandira | Best School in Kuduru, Magadi",
    description: "Premier KSEEB affiliated school offering quality education from Pre-KG to 10th standard. 30+ years of nurturing young minds.",
    images: ["/assets/logo/logo.avif"],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo/logo.avif", type: "image/avif" },
    ],
    apple: "/assets/logo/logo.avif",
    shortcut: "/assets/logo/logo.avif",
  },

  // Verification (Add your actual verification codes when you have them)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Canonical URL
  metadataBase: new URL("https://gurukulavidyamandira.edu.in"),
  alternates: {
    canonical: "/",
  },

  // Category
  category: "education",

  // Other
  applicationName: "Gurukula Vidya Mandira",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Viewport configuration
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D4A012" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://gurukulavidyamandira.edu.in",
    name: "Gurukula Vidya Mandira",
    alternateName: "GVM School",
    description: "Premier KSEEB affiliated school offering quality education from Pre-KG to 10th standard with traditional Indian values and modern academic excellence.",
    url: "https://gurukulavidyamandira.edu.in",
    logo: "https://gurukulavidyamandira.edu.in/assets/logo/logo.avif",
    image: "https://gurukulavidyamandira.edu.in/assets/logo/logo.avif",
    telephone: ["+919986571057", "+919916830328", "+919110242200", "+919844854556"],
    email: "gurukulavidyamandira.official@gmail.com",
    foundingDate: "1995",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kuduru",
      addressLocality: "Magadi",
      addressRegion: "Karnataka",
      postalCode: "561101",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9516",
      longitude: "77.2284",
    },
    areaServed: {
      "@type": "Place",
      name: "Magadi, Bengaluru Rural District, Karnataka",
    },
    sameAs: [
      "https://www.youtube.com/@gurukulavidyamandira",
      "https://www.instagram.com/gurukulavidyamandira",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Programs",
      itemListElement: [
        {
          "@type": "EducationalOccupationalProgram",
          name: "Pre-KG Program",
          educationalCredentialAwarded: "Pre-Kindergarten Certificate",
        },
        {
          "@type": "EducationalOccupationalProgram",
          name: "Primary Education (1st to 4th)",
          educationalCredentialAwarded: "Primary Education Certificate",
        },
        {
          "@type": "EducationalOccupationalProgram",
          name: "Middle School Education (5th to 7th)",
          educationalCredentialAwarded: "Middle School Certificate",
        },
        {
          "@type": "EducationalOccupationalProgram",
          name: "High School Education (8th to 10th)",
          educationalCredentialAwarded: "SSLC (Karnataka Secondary Education Examination Board)",
        },
      ],
    },
    member: [
      {
        "@type": "Person",
        name: "Udayakumar",
        jobTitle: "President",
        telephone: "+919986571057",
      },
      {
        "@type": "Person",
        name: "Keshavmurthy K R",
        jobTitle: "Secretary & Head Master",
        telephone: "+919916830328",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Fonts via CDN (loaded in CSS for better performance) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
