"use client";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "N&B Cleaning",
        "image": "https://nbcleaning.com/hero-image.png",
        "description": "Professional window cleaning, gutter cleaning, and fascia cleaning services. Experience crystal clear results with our reliable services.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "UK"
        },
        "telephone": "+07774974895",
        "email": "2024windowcleaning@gmail.com",
        "priceRange": "££",
        "openingHours": "Mo-Fr 08:00-18:00",
        "sameAs": [
            "https://facebook.com/nbcleaning",
            "https://instagram.com/nbcleaning"
        ]
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            history.pushState(null, '', targetId);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center container mx-auto px-2 py-8">
            <Script
                id="structured-data-script"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <h1 className="text-[64px] max-lg:text-[48px] max-md:text-[42px] font-[500] text-center max-md:leading-[1.2]">
                A <span className="text-green-600">Clearer</span> View Starts Here!
            </h1>

            <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-normal max-w-[736px] text-center mb-4">
                We make your windows sparkle with professional care and attention to detail. Experience the difference with my reliable, high-quality window cleaning services.
            </p>
            <Image
                className={`w-full max-md:h-[445px] max-md:object-cover max-md:rounded-[24px] transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'skeleton-loader'}`}
                src="/hero-image.webp"
                alt="Professional window cleaning services by N&B Cleaning"
                width={1200}
                height={515}
                priority
                onLoad={() => setImageLoaded(true)}
            />
            <a
                href="#contact"
                className="flex md:hidden bg-green-600 text-white font-medium py-3 px-[50px] rounded-[12px] hover:bg-green-700 transition-colors self-center mt-4 max-sm:w-full items-center gap-2 justify-center"
                aria-label="Contact us for window cleaning services"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
                Contact us
                <Image src="/arrow-right.svg" alt="Arrow right" width={20} height={20} aria-hidden="true" />
            </a>
        </section>
    );
};

export default Hero;
