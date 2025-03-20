"use client";

import Image from "next/image";

const MainServices = () => {
    const services = [
        {
            title: "Window cleaning",
            description: "Lorem ipsum dolor sit amet consectetur. Blandit aliquet nunc placerat semper laoreet sociis volutpat ",
            image: "/main-services/service1.png",
        },
        {
            title: "Gutter cleaning",
            description: "Lorem ipsum dolor sit amet consectetur. Blandit aliquet nunc placerat semper laoreet sociis volutpat",
            image: "/main-services/service2.png",
        },
        {
            title: "Fascial cleaning",
            description: "Lorem ipsum dolor sit amet consectetur. Blandit aliquet nunc placerat semper laoreet sociis volutpat",
            image: "/main-services/service3.png",
        },
    ]
    return (
        <section className="w-full bg-[#F9F5EC] py-16 " id="services">
            <div className="mx-auto container px-2 max-lg:max-w-[560px]">
                <h1 className="text-[40px] font-[500] text-center mb-6"><span className="text-green-600">Main</span> Services</h1>
                <div className="flex flex-col lg:flex-row md:justify-between gap-[20px] w-full ">
                    {services.map((service) => (
                        <div key={service.title} className="flex p-[32px] max-lg:p-[24px] border-[2px] border-[#ADADAD] rounded-[24px] flex-col items-start gap-[8px] w-full lg:w-1/3 justify-center">
                            <h3 className="text-[20px] font-[500]">{service.title}</h3>
                            <p className="text-[14px] font-normal">{service.description}</p>
                            <Image className="w-full max-lg:max-h-[230px] max-lg:object-cover rounded-[24px]" src={service.image} alt={service.title} width={324} height={362} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainServices;
