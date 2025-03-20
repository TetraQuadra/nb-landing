"use client";

import Link from "next/link";
import Image from "next/image";
const Header = () => {
    return (
        <header className="py-4 container mx-auto px-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="Logo" width={45} height={35} />
                        <span className="text-xl font-bold">N&B Cleaning</span>
                    </Link>
                    <nav className="flex items-center gap-4">
                        <Link className="text-lg p-2" href="#about">
                            About
                        </Link>
                        <Link className="text-lg p-2" href="#services">
                            Services
                        </Link>
                        <Link className="text-lg p-2" href="#reviews">
                            Reviews
                        </Link>
                    </nav>
                </div>
                <Link href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2">
                    Contact us
                    <Image src="/arrow-right.svg" alt="Arrow right" width={20} height={20} />
                </Link>
            </div>
        </header>
    );
};

export default Header;