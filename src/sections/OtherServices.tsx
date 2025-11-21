"use client";

import Image from "next/image";

const OtherServices = () => {
    const services = [
        {
            title: "Solar panel cleaning",
            description: "Professional cleaning of solar panels to maximize efficiency and extend their lifespan. We use safe cleaning methods that do not damage the panel surfaces.",
            image: "/other-services/service4.webp",
            icon: "/other-services/icon4.svg",
        },
        {
            title: "Cladding cleaning",
            description: "Specialized cleaning for all types of exterior cladding to remove built-up dirt, pollution, and biological growth. Restores the appearance and protects your property's cladding from premature deterioration.",
            image: "/other-services/service2.webp",
            icon: "/other-services/icon2.svg",
        },
        {
            title: "Conservatory roof cleaning",
            description: "Thorough cleaning of conservatory roofs to remove moss, algae, and debris. Improves natural light penetration and prevents damage to seals and frames, extending the life of your conservatory.",
            image: "/other-services/service3.webp",
            icon: "/other-services/icon3.svg",
        },

    ]
    return (
        <section className="container mx-auto py-16 px-2 w-full" id="other-services">
            <h2 className="text-[40px] font-[500] text-center mb-6">Other Services</h2>
            <div className="flex flex-col gap-[20px] w-full">
                {services.map((service, index) => (
                    <div key={service.title} className={`flex ${(index % 2 === 1) ? 'flex-row-reverse' : 'flex-row'} p-[32px] max-lg:p-[12px] items-center w-full justify-between gap-[132px] max-md:flex-col-reverse max-md:gap-4`}>
                        <div className="flex flex-col items-start gap-[16px] w-1/2 px-4 max-md:w-full max-md:relative">
                            <div className="p-[10px] border-[2px] border-[#EFEFEF] rounded-[24px] w-[90px] h-[90px] flex items-center justify-center max-md:hidden">
                                <Image src={service.icon} alt={service.title} width={70} height={70} />
                            </div>
                            <h2 className="text-[20px] font-[500] max-md:text-center max-md:w-full max-md:font-semibold">{service.title}</h2>
                            <p className="text-[16px] max-lg:text-[14px] font-normal ">{service.description}</p>
                        </div>
                        <div className="w-1/2 flex justify-center items-center max-md:w-[80%] max-md:relative max-md:mb-4">
                            <Image className="w-full rounded-[24px]" src={service.image} alt={service.title} width={534} height={315} />
                            <div className="hidden max-md:flex absolute bottom-[-16px] left-[-40px] p-[10px] border-[2px] border-[#EFEFEF] rounded-[24px] w-[90px] h-[90px] items-center justify-center bg-[#F2F2F2]">
                                <Image src={service.icon} alt={service.title} width={70} height={70} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OtherServices;
