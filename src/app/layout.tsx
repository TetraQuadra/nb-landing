import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Script from "next/script";

export const metadata: Metadata = {
    title: "N&B Cleaning - Professional Window Cleaning Services",
    description: "Professional window cleaning, gutter cleaning, and fascia cleaning services. Experience crystal clear results with our reliable, high-quality window cleaning services in the UK.",
    keywords: "window cleaning, professional window cleaner, gutter cleaning, fascia cleaning, cleaning services, crystal clear windows, residential cleaning, commercial cleaning, ",
    authors: [{ name: "N&B Cleaning" }],
    generator: "Next.js",
    applicationName: "N&B Cleaning",
    referrer: "origin-when-cross-origin",
    creator: "N&B Cleaning",
    publisher: "N&B Cleaning",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://nbcleaning.com"),
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "N&B Cleaning - Professional Window Cleaning Services",
        description: "Professional window cleaning, gutter cleaning, and fascia cleaning services. Experience crystal clear results with our reliable services.",
        url: "https://nbcleaning.com",
        siteName: "N&B Cleaning",
        locale: "en_GB",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "N&B Cleaning - Professional Window Cleaning Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "N&B Cleaning - Professional Window Cleaning Services",
        description: "Professional window cleaning services that deliver crystal clear results every time.",
        images: ["/twitter-image.jpg"],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
    category: "Business",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
            </head>
            <body className="antialiased w-full">
                <Header />
                {children}
                <Footer />

                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-XN0S2P1G4N" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XN0S2P1G4N');
                    `}
                </Script>
            </body>
        </html>
    );
}
