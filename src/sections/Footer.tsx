"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <div className="h-[1px] bg-[#c0c0c0] " />
            <footer className="py-4 px-8 ">
                <div className="flex justify-between items-center max-md:flex max-md:flex-col max-md:items-center max-md:gap-3">
                    <div className="flex items-center gap-6 max-md:w-full max-md:justify-start max-md:items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold">N&B Cleaning</span>
                        </Link>
                        <nav className="flex items-center gap-4 max-md:hidden">
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
                    <div className="flex gap-6 items-center max-lg:flex-col max-md:w-full max-md:gap-3 max-lg:justify-start max-lg:items-start">
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
        </div>
    );
};

export default Footer;