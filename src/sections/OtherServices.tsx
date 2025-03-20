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
                    <div key={service.title} className={`flex ${index === 1 ? 'flex-row-reverse' : 'flex-row'} p-[32px] max-lg:p-[12px] items-center w-full justify-between gap-[132px] max-md:flex-col-reverse max-md:gap-4`}>
                        <div className="flex flex-col items-start gap-[16px] w-1/2 px-4 max-md:w-full max-md:relative">
                            <div className="p-[10px] border-[2px] border-[#EFEFEF] rounded-[24px] w-[90px] h-[90px] flex items-center justify-center max-md:hidden">
                                <Image src={service.icon} alt={service.title} width={70} height={70} />
                            </div>
                            <h3 className="text-[20px] font-[500] max-md:text-center max-md:w-full max-md:font-semibold">{service.title}</h3>
                            <p className="text-[14px] font-normal ">{service.description}</p>
                        </div>
                        <div className="w-1/2 flex justify-center items-center max-md:w-[80%] max-md:relative max-md:mb-4">
                            <Image className="w-full" src={service.image} alt={service.title} width={534} height={315} />
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
