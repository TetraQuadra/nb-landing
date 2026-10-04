import Link from "next/link";
import Image from "next/image";
import type { City } from "@/constants/cities";
import { CORE_SERVICES } from "@/constants/services";

type CityHeroProps = {
    city: City;
};

const CityHero = ({ city }: CityHeroProps) => {
    const isCounty = city.slug === "norfolk";

    return (
        <section className="flex flex-col items-center justify-center container mx-auto px-4 py-10 max-md:py-8">
            <p className="text-green-600 font-medium text-sm tracking-wide uppercase mb-3">
                Local service area
            </p>
            <h1 className="text-[56px] max-lg:text-[44px] max-md:text-[36px] font-[500] text-center leading-[1.15] mb-4">
                {isCounty ? (
                    <>
                        Window cleaning across <span className="text-green-600">{city.name}</span>
                    </>
                ) : (
                    <>
                        Window cleaning in <span className="text-green-600">{city.name}</span>
                    </>
                )}
            </h1>
            <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-normal max-w-[720px] text-center mb-8 text-[#3a3a3a]">
                Professional window, gutter and fascia cleaning across {city.name}
                {!isCounty ? `, ${city.county}` : ""}. Reliable visits, clear pricing,
                and crystal-clear results for homes and businesses.
            </p>

            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8 max-w-[780px]">
                {CORE_SERVICES.map((service) => (
                    <li
                        key={service}
                        className="text-[14px] text-[#2f2f2f] border-b border-green-600/40 pb-0.5"
                    >
                        {service}
                    </li>
                ))}
            </ul>

            <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-green-600 text-white font-medium py-3 px-10 rounded-[12px] hover:bg-green-700 transition-colors"
                aria-label={`Contact us for window cleaning in ${city.name}`}
            >
                Get a free quote
                <Image src="/arrow-right.svg" alt="" width={20} height={20} aria-hidden="true" />
            </Link>
        </section>
    );
};

export default CityHero;
