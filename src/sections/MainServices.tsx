"use client";

import Image from "next/image";
import Link from "next/link";

const MainServices = () => {
    const services = [
        {
            title: "Window cleaning",
            description: "Professional window cleaning for any height and complexity. We use modern methods and eco-friendly products to achieve crystal clear windows without streaks or spots.",
            image: "/main-services/service1.png",
            link: "/window",
        },
        {
            title: "Gutter cleaning",
            description: "Thorough cleaning of gutter systems from leaves, debris and blockages. We prevent damage to facades and foundations, protecting your home from moisture and dampness.",
            image: "/main-services/service2.png",
            link: "/gutter",
        },
        {
            title: "Fascial cleaning",
            description: "Comprehensive cleaning of fascias and soffits from dirt, mold and algae. We restore the original appearance and extend the service life of facade elements.",
            image: "/main-services/service3.png",
            link: "/fascias",
        },
    ]
    return (
        <section className="w-full bg-[#F9F5EC] py-16 " id="services">
            <div className="mx-auto container px-2 max-lg:max-w-[560px]">
                <h1 className="text-[40px] font-[500] text-center mb-6"><span className="text-green-600">Main</span> Services</h1>
                <div className="flex flex-col lg:flex-row md:justify-between gap-[20px] w-full ">
                    {services.map((service) => (
                        <div key={service.title} className="flex p-[32px] max-lg:p-[24px] border-[2px] border-[#ADADAD] rounded-[24px] flex-col items-start gap-[8px] w-full lg:w-1/3 justify-center relative">
                            <Link href={service.link}><h3 className="text-[20px] font-[500] underline">{service.title}</h3></Link>
                            <p className="text-[14px] font-normal">{service.description}</p>
                            <Link className="w-full" href={service.link}> <Image className="w-full max-lg:max-h-[280px] max-lg:object-cover rounded-[24px] max-lg:object-[10%_30%]" src={service.image} alt={service.title} width={324} height={362} /></Link>
                            <Link href={service.link} className="absolute top-[12px] right-[12px] border-[2px] border-[#ADADAD] rounded-full p-[6px]">
                                <Image src="arrow-up-right.svg" alt="arrow" width={30} height={30} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainServices;
