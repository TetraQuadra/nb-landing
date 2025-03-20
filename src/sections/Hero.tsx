"use client";

import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center container mx-auto px-2">
            <h1 className="text-[64px] font-[500] text-center">A <span className="text-green-600">Clearer</span> View Starts Here! </h1>
            <p className="text-[18px] font-normal max-w-[736px] text-center mb-4">I make your windows sparkle with professional care and attention to detail. Experience the difference with my reliable, high-quality window cleaning services.</p>

            <Image src="/hero-image.png" alt="Hero Image" width={1200} height={515} />
        </div>
    );
};

export default Hero;
