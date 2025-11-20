'use client'

import Heading from "@/components/ui/Heading";
import { SparklesText } from "@/components/ui/sparkles-text";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeaderLeft = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const raw = document.cookie
            .split("; ")
            .find((row) => row.startsWith("contact-data="));

        if (raw) {
            try {
                const value = decodeURIComponent(raw.split("=")[1]);
                const parsed = JSON.parse(value);
                setUserName(parsed.name ?? "");
            } catch (err) {
                console.error("Failed to parse cookie:", err);
            }
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50">
            <div
                className="relative bg-main w-[80vw] md:w-[25vw] h-[40vh] p-8 flex items-center justify-between rounded-br-4xl overflow-visible flex-wrap"
            >
                <div className="flex flex-col gap-4">
                    <SparklesText className="text-berl font-bold font-tangerine text-7xl tracking-wide">
                        Personal Color
                    </SparklesText>
                    <Heading size="md" />
                </div>

                <div className="absolute -bottom-4 left-0 h-[3vh] w-[15vw] p-9 flex items-center justify-center shadow-lg rounded-br-full rounded-tr-xl backdrop-blur-2xl">
                    <h1 className="text-white text-xl font-baloo font-semibold">
                        {userName || ""}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeaderLeft