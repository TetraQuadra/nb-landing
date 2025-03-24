"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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

                <Link
                    href="/#contact"
                    className="bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 max-md:hidden cursor-pointer hover:bg-green-700 transition-colors"
                    onClick={(e) => handleSmoothScroll(e, "/", "contact")}
                >
                    Contact us
                    <Image src="/arrow-right.svg" alt="Arrow right" width={20} height={20} />
                </Link>

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
                    <Link
                        href="/#contact"
                        className="mt-4 bg-green-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-colors cursor-pointer"
                        onClick={(e) => handleSmoothScroll(e, "/", "contact")}
                    >
                        Contact us
                        <Image src="/arrow-right.svg" alt="Arrow right" width={20} height={20} />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;