"use client";

import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center container mx-auto px-2">
            <h1 className="text-[64px] max-lg:text-[48px] max-md:text-[42px] font-[500] text-center max-md:leading-[1.2] ">A <span className="text-green-600">Clearer</span> View Starts Here! </h1>
            <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-normal max-w-[736px] text-center mb-4">I make your windows sparkle with professional care and attention to detail. Experience the difference with my reliable, high-quality window cleaning services.</p>

            <Image className="w-full max-md:h-[445px] max-md:object-cover max-md:rounded-[24px] " src="/hero-image.png" alt="Hero Image" width={1200} height={515} />
            <button className="flex md:hidden bg-green-600 text-white font-medium py-3 px-[50px] rounded-[12px] hover:bg-green-700 transition-colors self-center mt-4 max-sm:w-full items-center gap-2 justify-center">
                Contact us
                <Image src="/arrow-right.svg" alt="arrow-right" width={20} height={20} />
            </button>
        </div>
    );
};

export default Hero;
