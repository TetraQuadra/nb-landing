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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { href: "#about", text: "About" },
        { href: "#services", text: "Services" },
        { href: "#reviews", text: "Reviews" }
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
                            <Link key={link.href} className="text-lg p-2" href={link.href}>
                                {link.text}
                            </Link>
                        ))}
                    </nav>
                </div>

                <Link href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 max-md:hidden">
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
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform rotate-45 translate-y-0.5' : 'mb-1.5'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'mb-1.5'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform -rotate-45 -translate-y-0.5' : ''
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
                            key={link.href}
                            className="text-lg p-3 border-b border-gray-100 hover:bg-gray-50"
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.text}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="mt-4 bg-green-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2"
                        onClick={() => setMenuOpen(false)}
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