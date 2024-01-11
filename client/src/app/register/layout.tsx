import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";

export default function RegisterLayout({children}: {children: React.ReactNode}){

    return(
        <section className={`h-screen bg-white text-black`}>
            <Navbar />
            {children}
        </section>
    )
}