import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/constants/cities";
import { CORE_SERVICES } from "@/constants/services";
import CityHero from "@/sections/CityHero";
import CityMap from "@/sections/CityMap";
import Features from "@/sections/Features";
import MainServices from "@/sections/MainServices";
import OtherServices from "@/sections/OtherServices";
import ContactUs from "@/sections/ContactUs";
import Feedback from "@/sections/Feedback";
import Reviews from "@/sections/Reviews";
import SpecialOffer from "@/sections/SpecialOffer";

type PageProps = {
    params: Promise<{ city: string }>;
};

export function generateStaticParams() {
    return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city: slug } = await params;
    const city = getCityBySlug(slug);

    if (!city) {
        return { title: "Area not found | N&B Cleaning" };
    }

    const title = `Window Cleaning in ${city.name} | N&B Cleaning`;
    const description = `Professional window cleaning, gutter cleaning and fascia cleaning in ${city.name}, ${city.county}. Crystal clear results for homes and businesses with N&B Cleaning.`;
    const keywords = [
        ...CORE_SERVICES.map((s) => `${s.toLowerCase()} ${city.name}`),
        `window cleaning ${city.name}`,
        `window cleaner ${city.name}`,
        `gutter cleaning ${city.name}`,
        city.name,
        city.county,
    ].join(", ");

    const path = `/areas/${city.slug}`;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url: `https://nandbcleaning.uk${path}`,
            siteName: "N&B Cleaning",
            locale: "en_GB",
            type: "website",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `N&B Cleaning window cleaning in ${city.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default async function CityPage({ params }: PageProps) {
    const { city: slug } = await params;
    const city = getCityBySlug(slug);

    if (!city) {
        notFound();
    }

    return (
        <div className="items-center justify-items-center w-full">
            <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
                <SpecialOffer />
                <CityHero city={city} />
                <CityMap city={city} />
                <Features />
                <MainServices />
                <OtherServices />
                <Reviews />
                <ContactUs />
                <Feedback />
            </main>
        </div>
    );
}
