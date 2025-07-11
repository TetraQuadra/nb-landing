import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Script from "next/script";

export const metadata: Metadata = {
    title: "N&B Cleaning - Professional Window Cleaning Services",
    description: "Professional window cleaning, gutter cleaning, fascia cleaning, and solar panel cleaning services in the Norwich, Norfolk and surrounding areas.",
    keywords: "window cleaning, professional window cleaner, gutter cleaning, fascia cleaning, solar panel cleaning, solar panel washing, cleaning services, crystal clear windows, residential cleaning, commercial cleaning, window cleaning Norwich, window cleaning Norfolk, gutter cleaning Norwich, fascia cleaning Norwich, solar panel cleaning Norwich, solar panel cleaning Norfolk, commercial cleaning Norwich, residential window cleaning Norwich, window cleaner Cringleford, gutter cleaning Taverham, window cleaning Wymondham, cleaning services Costessey, window cleaning Hethersett, gutter cleaning Mulbarton, fascia cleaning Swardeston, window cleaner Bowthorpe, cleaning company Norwich",
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
    metadataBase: new URL("https://nandbcleaning.uk/"),
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
        description: "Professional window cleaning, gutter cleaning, fascia cleaning, and solar panel cleaning services. Experience crystal clear results with our reliable services.",
        url: "https://nandbcleaning.uk/",
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
        description: "Professional window and solar panel cleaning services that deliver crystal clear results every time.",
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="antialiased w-full">
                <Header />
                {children}
                <Footer />

                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-XN0S2P1G4N" strategy="beforeInteractive" />
                <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16909240887" strategy="beforeInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XN0S2P1G4N');
                    gtag('config', 'AW-16909240887');
                    `}
                </Script>
            </body>
        </html>
    );
}
