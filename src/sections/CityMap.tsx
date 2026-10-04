import type { City } from "@/constants/cities";

type CityMapProps = {
    city: City;
};

const CityMap = ({ city }: CityMapProps) => {
    const zoom = city.slug === "norfolk" ? 10 : 14;
    const query = encodeURIComponent(`${city.name}, Norfolk, UK`);
    const mapSrc = `https://maps.google.com/maps?q=${query}&ll=${city.lat},${city.lng}&z=${zoom}&hl=en&output=embed`;
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${city.lat}%2C${city.lng}`;

    return (
        <section
            className="w-full py-12 max-md:py-8 container mx-auto px-4"
            aria-labelledby="city-map-heading"
        >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                <div className="lg:w-[38%] flex flex-col justify-center order-2 lg:order-1">
                    <p className="text-green-600 font-medium text-sm tracking-wide uppercase mb-2">
                        Where we work
                    </p>
                    <h2
                        id="city-map-heading"
                        className="text-[32px] max-md:text-[26px] font-[500] leading-tight mb-4"
                    >
                        Serving <span className="text-green-600">{city.name}</span>
                    </h2>
                    <p className="text-[15px] text-[#3a3a3a] mb-6 max-w-[420px]">
                        Our window cleaning team regularly covers {city.name} and nearby neighbourhoods.
                        Pin the area on the map — we come to you with professional equipment
                        and flexible scheduling.
                    </p>

                    <div className="flex flex-col gap-3 text-[14px]">
                        <div className="flex items-start gap-3">
                            <span
                                className="mt-1.5 h-2.5 w-2.5 rounded-full bg-green-600 shrink-0"
                                aria-hidden
                            />
                            <span>
                                <strong className="font-medium">{city.name}</strong>
                                {city.name !== city.county ? `, ${city.county}` : ""}
                            </span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span
                                className="mt-1.5 h-2.5 w-2.5 rounded-full bg-green-600/50 shrink-0"
                                aria-hidden
                            />
                            <span>Homes, offices &amp; commercial premises</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span
                                className="mt-1.5 h-2.5 w-2.5 rounded-full bg-green-600/30 shrink-0"
                                aria-hidden
                            />
                            <span>Same trusted quality across all local areas</span>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[62%] order-1 lg:order-2 relative">
                    <div
                        className="absolute -inset-3 max-md:-inset-2 rounded-[28px] opacity-60 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse at 30% 20%, rgba(22,163,74,0.12), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(22,163,74,0.08), transparent 50%)",
                        }}
                        aria-hidden
                    />

                    <div className="relative overflow-hidden rounded-[24px] border border-[#d8d8d8] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.35)] bg-[#e8eee8]">
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-[rgba(255,251,243,0.95)] backdrop-blur-sm px-3.5 py-2 rounded-[12px] border border-[#e0e0e0]">
                            <span className="relative flex h-3 w-3" aria-hidden>
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600" />
                            </span>
                            <span className="text-[13px] font-medium text-[#1a1a1a]">
                                {city.name}
                            </span>
                        </div>

                        <iframe
                            title={`Map of ${city.name} service area`}
                            src={mapSrc}
                            width="100%"
                            height={380}
                            className="block w-full h-[380px] max-md:h-[280px] border-0"
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />

                        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[rgba(255,251,243,0.85)] to-transparent pointer-events-none" />

                        <a
                            href={mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 z-10 text-[12px] text-[#444] bg-[rgba(255,251,243,0.95)] px-3 py-1.5 rounded-[8px] border border-[#e0e0e0] hover:text-green-700 transition-colors"
                        >
                            Open full map
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CityMap;
