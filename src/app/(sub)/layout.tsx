"use client";

import ContactUs from "@/sections/ContactUs";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ContactUs />
        </>
    )
}

export default SubLayout;