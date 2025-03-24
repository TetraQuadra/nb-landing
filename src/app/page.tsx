"use client";

import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import MainServices from "@/sections/MainServices";
import OtherServices from "@/sections/OtherServices";
// import Reviews from "@/sections/Reviews";
import ContactUs from "@/sections/ContactUs";
import Feedback from "@/sections/Feedback";

export default function Home() {
    return (
        <div className="items-center justify-items-center w-full">
            <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
                <Hero />
                <Features />
                <MainServices />
                <OtherServices />
                {/* <Reviews /> */}
                <ContactUs />
                <Feedback />
            </main>
        </div>
    );
}
