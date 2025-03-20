"use client";

import Image from "next/image";

const OtherServices = () => {
    const services = [
        {
            title: "Graffity cleaning",
            description: "Lorem ipsum dolor sit amet consectetur. Blandit aliquet nunc placerat semper laoreet sociis volutpat ",
            image: "/other-services/service1.png",
            icon: "/other-services/icon1.svg",
        },
        {
            title: "Cladding cleaning",
            description: "Lorem ipsum dolor sit amet consectetur. Blandit aliquet nunc placerat semper laoreet sociis volutpat ",
            image: "/other-services/service2.png",
            icon: "/other-services/icon2.svg",
        },
        {
            title: "Conservatory roof cleaning",
            description: "Lorem ipsum dolor sit amet consectetur. Blandit aliquet nunc placerat semper laoreet sociis volutpat ",
            image: "/other-services/service3.png",
            icon: "/other-services/icon3.svg",
        }
    ]
    return (
        <section className="container mx-auto px-2 w-full">
            <h1 className="text-[40px] font-[500] text-center mb-6">Other Services</h1>
            <div className="flex flex-col gap-[20px] w-full">
                {services.map((service, index) => (
                    <div key={service.title} className={`flex ${index === 1 ? 'flex-row-reverse' : 'flex-row'} p-[32px] max-lg:p-[12px] items-center w-full justify-between gap-[132px]`}>
                        <div className="flex flex-col items-start gap-[16px] w-1/2 px-4">
                            <div className="p-[10px] border-[2px] border-[#EFEFEF] rounded-[24px] w-[90px] h-[90px] flex items-center justify-center">
                                <Image src={service.icon} alt={service.title} width={70} height={70} />
                            </div>
                            <h3 className="text-[20px] font-[500]">{service.title}</h3>
                            <p className="text-[14px] font-normal">{service.description}</p>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <Image className="w-full" src={service.image} alt={service.title} width={534} height={315} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OtherServices;
