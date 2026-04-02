"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const PHONE_TEL = "+447774974895";
const PHONE_DISPLAY = "+44 7774 974895";
const WHATSAPP_URL = `https://wa.me/${PHONE_TEL.replace("+", "")}`;

const buttonClass =
    "bg-green-600 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-green-700 transition-colors";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const burgerButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                burgerButtonRef.current &&
                !burgerButtonRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, hash: string) => {
        e.preventDefault();

        if (window.location.pathname === '/' || window.location.pathname === '') {
            const targetElement = document.getElementById(hash);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                window.history.pushState(null, '', `/#${hash}`);
            }
        } else {
            window.location.href = `/${hash ? '#' + hash : ''}`;
        }

        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { href: "/", hash: "about", text: "About" },
        { href: "/", hash: "services", text: "Services" },
        { href: "/", hash: "reviews", text: "Reviews" }
    ];

    return (
        <header className="py-4 container mx-auto px-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="Logo" width={45} height={35} />
                        <span className="text-xl font-bold">N&B Cleaning</span>
                    </Link>
                    <nav className="md:flex items-center gap-4 max-md:hidden">
                        {navLinks.map((link) => (
                            <Link
                                key={link.hash}
                                href={`${link.href}${link.hash ? '#' + link.hash : ''}`}
                                className="text-lg p-2 cursor-pointer"
                                onClick={(e) => handleSmoothScroll(e, link.href, link.hash)}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="max-md:hidden flex items-center gap-2">
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className={buttonClass}
                        aria-label={`Call ${PHONE_DISPLAY}`}
                    >
                        Call us
                        <Image src="/arrow-right.svg" alt="" width={20} height={20} />
                    </a>
                    <span className="text-gray-500 text-md select-none" aria-hidden>
                        or
                    </span>
                    <Link
                        href="/#contact"
                        className={buttonClass}
                        onClick={(e) => handleSmoothScroll(e, "/", "contact")}
                    >
                        Contact us
                        <Image src="/arrow-right.svg" alt="" width={20} height={20} />
                    </Link>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonClass} px-3`}
                        aria-label="WhatsApp"
                    >
                        <WhatsAppIcon className="w-6 h-6" />
                    </a>
                </div>

                <button
                    ref={burgerButtonRef}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'mb-1.5'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
                            }`}
                    />
                </button>
            </div>

            <div
                ref={menuRef}
                className={`md:hidden fixed top-[72px] right-0 bg-white shadow-lg w-[250px] rounded-bl-2xl transition-transform duration-300 z-50 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
                    }`}
            >
                <nav className="flex flex-col p-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.hash}
                            href={`${link.href}${link.hash ? '#' + link.hash : ''}`}
                            className="text-lg p-3 border-b border-gray-100 hover:bg-gray-50"
                            onClick={(e) => handleSmoothScroll(e, link.href, link.hash)}
                        >
                            {link.text}
                        </Link>
                    ))}
                    <div className="mt-4 flex flex-col gap-2">
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="bg-green-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                            aria-label={`Call ${PHONE_DISPLAY}`}
                        >
                            Call us
                            <Image src="/arrow-right.svg" alt="" width={20} height={20} />
                        </a>
                        <span className="text-center text-md text-gray-500" aria-hidden>
                            or
                        </span>
                        <Link
                            href="/#contact"
                            className="bg-green-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-colors cursor-pointer"
                            onClick={(e) => handleSmoothScroll(e, "/", "contact")}
                        >
                            Contact us
                            <Image src="/arrow-right.svg" alt="" width={20} height={20} />
                        </Link>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-4 py-3 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors"
                            aria-label="WhatsApp"
                        >
                            <WhatsAppIcon className="w-7 h-7" />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;