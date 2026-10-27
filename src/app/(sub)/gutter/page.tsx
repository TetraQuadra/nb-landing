import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Gutter Cleaning | Professional Residential & Commercial | N&B Cleaning",
    description: "Professional gutter cleaning services to protect your home from water damage. Prevent blockages and costly repairs with our reliable gutter cleaning.",
    keywords: "gutter cleaning, residential gutter cleaning, commercial gutter cleaning, gutter maintenance, blocked gutters, gutter cleaning service UK",
    alternates: {
        canonical: "https://www.nandbcleaning.uk/gutter",
    },
    openGraph: {
        title: "Gutter Cleaning — N&B Cleaning",
        description: "Protect your home from water damage with our professional gutter cleaning services.",
        url: "https://www.nandbcleaning.uk/gutter",
        siteName: "N&B Cleaning",
        locale: "en_GB",
        type: "website",
        images: [
            {
                url: "/page-images/gutter/service1.png",
                width: 1200,
                height: 630,
                alt: "Professional Gutter Cleaning Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gutter Cleaning — N&B Cleaning",
        description: "Professional gutter cleaning to protect your home from water damage.",
        images: ["/page-images/gutter/service1.png"],
    },
};

function Gutter() {
    const services = [
        {
            title: "Commercial gutter cleaning",
            description: "We provide professional gutter cleaning for commercial properties. Prevent blockages, damage, and costly repairs with our reliable service.",
            image: "/page-images/gutter/service1.png",
            icon: "/page-images/service1.svg",
        },
        {
            title: "Domestic gutter cleaning",
            description: "We provide professional gutter cleaning for your home. Protect your home from blockages, damage, and unnecessary costs with our reliable service.",
            image: "/page-images/gutter/service2.png",
            icon: "/page-images/service2.svg",
        }
    ]
    return (
        <section className="container min-h-screen mx-auto px-2 w-full" id="other-services">
            <h1 className="text-[40px] font-[500] text-center mb-6">Gutter <span className="text-green-600">cleaning</span></h1>
            <div className="flex flex-col gap-[20px] w-full">
                {services.map((service, index) => (
                    <div key={service.title} className={`flex ${index === 1 ? 'flex-row-reverse' : 'flex-row'} p-[32px] max-lg:p-[12px] items-center w-full justify-between gap-[132px] max-md:flex-col-reverse max-md:gap-4`}>
                        <div className="flex flex-col items-start gap-[16px] w-1/2 px-4 max-md:w-full max-md:relative">
                            <div className="p-[10px] border-[2px] border-[#EFEFEF] rounded-[24px] w-[90px] h-[90px] flex items-center justify-center max-md:hidden">
                                <Image src={service.icon} alt={service.title} width={70} height={70} />
                            </div>
                            <h2 className="text-[20px] font-[500] max-md:text-center max-md:w-full max-md:font-semibold">{service.title}</h2>
                            <p className="text-[14px] font-normal ">{service.description}</p>
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

export default Gutter;
