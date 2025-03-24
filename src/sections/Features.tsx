"use client";

import Image from "next/image";

const Features = () => {
    const features = [
        {
            title: "Fair prices",
            description: "We offer competitive and transparent pricing for all our cleaning services. No hidden fees or unexpected charges - just honest value for your money. Regular customers benefit from special loyalty discounts to make quality cleaning affordable for everyone.",
            image: "/features/scales.svg",
        },
        {
            title: "Reliability",
            description: "Count on us to arrive on time, every time. Our professional team is committed to consistent service with meticulous attention to detail. We've built our reputation on dependability, with flexible scheduling to accommodate your busy lifestyle.",
            image: "/features/clock.svg",
        },
        {
            title: "Top quality",
            description: "Experience superior results with our advanced cleaning techniques and premium equipment. Our highly trained staff ensures every surface shines to perfection. We take pride in exceeding expectations, leaving your property spotless and pristine after every visit.",
            image: "/features/star.svg",
        },
    ]
    return (
        <section className="w-full py-16 max-md:py-8 container mx-auto" id="about">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 !w-full">
                <div className="flex flex-col md:flex-row justify-between w-full max-md:gap-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-start justify-start w-[285px] max-md:w-full">
                            <div className="rounded-[24px] border-[2px] border-[#ADADAD] p-[10px] mb-4">
                                <Image src={feature.image} alt={feature.title} width={70} height={70} />
                            </div>
                            <h3 className="text-[20px] font-[500] mb-2">{feature.title}</h3>
                            <p className="text-[14px] font-normal">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
