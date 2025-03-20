"use client";

import Image from "next/image";

const Features = () => {
    const features = [
        {
            title: "Fair prices",
            description: "Lorem ipsum dolor sit amet consectetur. Porttitor imperdiet nulla orci sit sem elementum quam. Vel amet nulla elementum sit habitant. Accumsan mauris ullamcorper enim odio placerat.",
            image: "/features/scales.svg",
        },
        {
            title: "Realibility",
            description: "Lorem ipsum dolor sit amet consectetur. Porttitor imperdiet nulla orci sit sem elementum quam. Vel amet nulla elementum sit habitant. Accumsan mauris ullamcorper enim odio placerat.",
            image: "/features/clock.svg",
        },
        {
            title: "Top quality",
            description: "Lorem ipsum dolor sit amet consectetur. Porttitor imperdiet nulla orci sit sem elementum quam. Vel amet nulla elementum sit habitant. Accumsan mauris ullamcorper enim odio placerat.",
            image: "/features/star.svg",
        },
    ]
    return (
        <section className="w-full py-16 container mx-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 !w-full">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-start justify-start w-[285px]">
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
