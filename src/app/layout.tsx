import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tinphatcons.com'),
  title: {
    default: "Công ty Xây dựng Tín Phát | Xây dựng Uy Tín TP.HCM",
    template: "%s | Công ty Xây dựng Tín Phát",
  },
  description: "Công ty Xây dựng Tín Phát - Chuyên thiết kế và thi công các công trình xây dựng dân dụng, thương mại và công nghiệp chất lượng cao tại TP.HCM. Đội ngũ chuyên nghiệp, uy tín, đúng tiến độ.",
  keywords: ["xây dựng", "công ty xây dựng", "thi công xây dựng", "nhà thầu", "xây nhà", "biệt thự", "nhà xưởng", "TP.HCM", "Tín Phát", "xây dựng dân dụng", "xây dựng công nghiệp"],
  authors: [{ name: "CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT" }],
  creator: "CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT",
  publisher: "CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://tinphatcons.com',
    siteName: 'CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT',
    title: 'Công ty Xây dựng Tín Phát | Xây dựng Uy Tín TP.HCM',
    description: 'Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Công ty Xây dựng Tín Phát | Xây dựng Uy Tín TP.HCM',
    description: 'Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Thêm sau khi có Google Search Console
    // google: 'google-verification-code',
  },
  icons: {
    icon: "/logo-doc.png",
    apple: "/logo-doc.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT",
    "alternateName": "TIN PHAT CTI CO., LTD",
    "url": "https://tinphatcons.com",
    "logo": "https://tinphatcons.com/logo-ngang.png",
    "description": "CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT - Chuyên thiết kế và thi công các công trình xây dựng dân dụng, thương mại và công nghiệp chất lượng cao tại TP.HCM",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "106 Nam Kỳ Khởi Nghĩa, phường Vũng Tàu",
      "addressLocality": "thành phố Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-326-702-600",
      "email": "congtytinphatvungtau@gmail.com",
      "contactType": "customer service",
      "areaServed": "VN",
      "availableLanguage": ["vi"]
    },
    "taxID": "3502302391",
    "sameAs": [
      "https://facebook.com/tinphatcons",
      "https://www.linkedin.com/company/tinphatcons"
    ]
  };

  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
