import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Commercial Window Cleaning | Offices, Shops & High-Rise | N&B Cleaning",
    description: "Professional commercial window cleaning for offices, shops, and high-rise buildings. Flexible schedules, insured staff, and sparkling results. Get your free commercial quote today.",
    keywords: "commercial window cleaning, office window cleaning, shopfront window cleaning, high-rise window cleaning, professional window cleaners, business window cleaning UK",
    alternates: {
        canonical: "/commercial-window-cleaning",
    },
    openGraph: {
        title: "Commercial Window Cleaning — N&B Cleaning",
        description: "Keep your business looking its best with our professional commercial window cleaning. Book today.",
        url: "https://nandbcleaning.uk/commercial-window-cleaning",
        siteName: "N&B Cleaning",
        locale: "en_GB",
        type: "website",
        images: [
            {
                url: "/page-images/window/service1.png",
                width: 1200,
                height: 630,
                alt: "Commercial Window Cleaning Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Commercial Window Cleaning — N&B Cleaning",
        description: "Professional commercial window cleaning for offices, shops, and high-rise buildings. Flexible schedules, insured staff, and sparkling results.",
        images: ["/page-images/window/service1.png"],
    },
};

const CommercialWindowCleaning = () => {
    const sections = [
        {
            title: "For all kinds of buildings",
            description: "We work with properties of any size — from small cafés to large office blocks. We always arrange a convenient schedule so your business can run without interruptions.",
            image: "/page-images/commercial/service1.png",
            icon: "/page-images/service1.svg",
            altText: "Clean windows on various commercial buildings including offices, shops, and restaurants."
        },
        {
            title: "Visible results",
            description: "Clean windows make a great first impression and reflect the professionalism of your company. We make sure your façade always looks its best.",
            image: "/page-images/commercial/service2.png",
            icon: "/page-images/service2.svg",
            altText: "Before and after comparison of commercial window cleaning results."
        },
        {
            title: "Quality without hassle",
            description: "You order — we handle the rest. We arrive on time, work carefully, and leave nothing but perfectly clean windows behind.",
            image: "/page-images/commercial/service3.png",
            icon: "/page-images/service1.svg",
            altText: "Professional window cleaner wearing safety gear and smiling."
        }
    ];

    return (
        <>
            {/* Structured Data */}
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Commercial Window Cleaning",
                        "provider": {
                            "@type": "Organization",
                            "name": "N&B Cleaning",
                            "url": "https://nandbcleaning.uk",
                            "logo": "https://nandbcleaning.uk/logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+44XXXXXXXXXX",
                                "contactType": "Customer Service"
                            }
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "United Kingdom"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://nandbcleaning.uk/commercial-window-cleaning",
                            "price": "0",
                            "priceCurrency": "GBP",
                            "description": "Free commercial window cleaning quote"
                        }
                    })
                }}
            />

            {/* FAQ Schema */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Do you work outside business hours?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we can schedule our commercial window cleaning service outside of your normal business hours to avoid disruptions."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you handle high-rise buildings?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, our team is trained and equipped to clean windows on high-rise commercial buildings safely and professionally."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer regular cleaning contracts?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we offer flexible contracts for weekly, monthly, or quarterly commercial window cleaning."
                                }
                            }
                        ]
                    })
                }}
            />

            <section className="container min-h-screen mx-auto px-2 w-full" id="commercial-window-cleaning">
                <h1 className="text-[40px] font-[500] text-center mb-6">Commercial Window <span className="text-green-600">Cleaning</span></h1>
                <div className="flex flex-col gap-[20px] w-full">
                    {sections.map((section, index) => (
                        <div key={section.title} className={`flex ${index === 1 ? 'flex-row-reverse' : 'flex-row'} p-[32px] max-lg:p-[12px] items-center w-full justify-between gap-[132px] max-md:flex-col-reverse max-md:gap-4`}>
                            <div className="flex flex-col items-start gap-[16px] w-1/2 px-4 max-md:w-full max-md:relative">
                                <div className="p-[10px] border-[2px] border-[#EFEFEF] rounded-[24px] w-[90px] h-[90px] flex items-center justify-center max-md:hidden">
                                    <Image src={section.icon} alt={section.title} width={70} height={70} />
                                </div>
                                <h2 className="text-[20px] font-[500] max-md:text-center max-md:w-full max-md:font-semibold">{section.title}</h2>
                                <p className="text-[14px] font-normal">{section.description}</p>
                            </div>
                            <div className="w-1/2 flex justify-center items-center max-md:w-[80%] max-md:relative max-md:mb-4">
                                <Image className="w-full rounded-[24px]" src={section.image} alt={section.altText} width={534} height={315} />
                                <div className="hidden max-md:flex absolute bottom-[-16px] left-[-40px] p-[10px] border-[2px] border-[#EFEFEF] rounded-[24px] w-[90px] h-[90px] items-center justify-center bg-[#F2F2F2]">
                                    <Image src={section.icon} alt={section.title} width={70} height={70} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CommercialWindowCleaning;
