"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            history.pushState(null, '', targetId);
        }
    };

    return (
        <div>
            <div className="h-[1px] bg-[#c0c0c0] " />
            <footer className="py-4 px-8 ">
                <div className="flex justify-between items-center max-md:flex max-md:flex-col max-md:items-center max-md:gap-6">
                    <div className="flex items-center gap-6 max-md:w-full max-md:justify-center">
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
                    </div>
                    <div className="flex gap-6 items-center max-lg:flex-col max-md:w-full max-md:gap-3 max-md:justify-center">
                        <a className="flex items-center gap-2" href="tel:+07774974895">
                            <Image src="/phone-call.svg" alt="Phone" width={20} height={20} />
                            +0777 497 4895
                        </a>
                        <a className="flex items-center gap-2" href="mailto:2024windowcleaning@gmail.com">
                            <Image src="/mail.svg" alt="Email" width={20} height={20} />
                            2024windowcleaning@gmail.com
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;