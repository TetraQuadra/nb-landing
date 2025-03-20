"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
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
                <div className="flex gap-6">
                    <Link className="flex items-center gap-2" href="tel:+07774974895">
                        <Image src="/phone-call.svg" alt="Phone" width={20} height={20} />
                        +0777 497 4895
                    </Link>
                    <Link className="flex items-center gap-2" href="mailto:2024windowcleaning@gmail.com">
                        <Image src="/mail.svg" alt="Email" width={20} height={20} />
                        2024windowcleaning@gmail.com
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;