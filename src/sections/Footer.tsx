"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PHONE_DISPLAY, EMAIL } from "../constants/contact";
import { CITIES } from "../constants/cities";

const Footer = () => {
    const [areasOpen, setAreasOpen] = useState(false);
    const areasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (areasRef.current && !areasRef.current.contains(event.target as Node)) {
                setAreasOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setAreasOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });

            history.pushState(null, "", targetId);
        }
    };

    return (
        <div>
            <div className="h-[1px] bg-[#c0c0c0] " />
            <footer className="py-4 px-8 ">
                <div className="flex justify-between items-center max-md:flex max-md:flex-col max-md:items-start max-md:flex-start max-md:gap-3">
                    <div className="flex items-center gap-6 max-md:w-full max-md:justify-start max-md:flex-wrap">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold">N&B Cleaning</span>
                        </Link>
                        <nav className="flex items-center gap-4 max-md:hidden">
                            <a
                                className="text-lg p-2"
                                href="#about"
                                onClick={(e) => handleSmoothScroll(e, "#about")}
                            >
                                About
                            </a>
                            <a
                                className="text-lg p-2"
                                href="#services"
                                onClick={(e) => handleSmoothScroll(e, "#services")}
                            >
                                Services
                            </a>
                            <a
                                className="text-lg p-2"
                                href="#reviews"
                                onClick={(e) => handleSmoothScroll(e, "#reviews")}
                            >
                                Reviews
                            </a>
                        </nav>

                        <div className="relative" ref={areasRef}>
                            <button
                                type="button"
                                className="text-lg p-2 flex items-center gap-1.5 hover:text-green-700 transition-colors"
                                aria-expanded={areasOpen}
                                aria-haspopup="true"
                                onClick={() => setAreasOpen((open) => !open)}
                            >
                                Areas we cover
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    aria-hidden
                                    className={`transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`}
                                >
                                    <path
                                        d="M3 5l4 4 4-4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {areasOpen && (
                                <div
                                    className="absolute bottom-full left-0 mb-2 w-[240px] max-h-[320px] overflow-y-auto rounded-[16px] border border-[#d8d8d8] bg-[var(--background)] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)] z-50 py-2"
                                    role="menu"
                                >
                                    <p className="px-4 py-2 text-[12px] uppercase tracking-wide text-[#666] font-medium">
                                        Local areas
                                    </p>
                                    {CITIES.map((city) => (
                                        <Link
                                            key={city.slug}
                                            href={`/areas/${city.slug}`}
                                            role="menuitem"
                                            className="block px-4 py-2 text-[15px] hover:bg-green-600/10 hover:text-green-700 transition-colors"
                                            onClick={() => setAreasOpen(false)}
                                        >
                                            {city.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-2 items-center max-lg:flex-col max-md:gap-3 max-md:justify-start max-md:items-start">
                        <a className="flex items-center gap-2" href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>
                            <Image src="/phone-call.svg" alt="Phone" width={20} height={20} />
                            {PHONE_DISPLAY}
                        </a>
                        <a className="flex items-center gap-2" href={`mailto:${EMAIL}`}>
                            <Image src="/mail.svg" alt="Email" width={20} height={20} />
                            {EMAIL}
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
