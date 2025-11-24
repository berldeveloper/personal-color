"use client";

import Heading from "@/components/ui/Heading";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useMemo } from "react";

const HeaderLeft = () => {
  const userName = useMemo(() => {
    if (typeof document === "undefined") return "";

    try {
      const raw = document.cookie
        .split("; ")
        .find((row) => row.startsWith("contact-data="));

      if (!raw) return "";

      const value = decodeURIComponent(raw.split("=")[1]);
      const parsed = JSON.parse(value);

      return parsed.name ?? "";
    } catch {
      return "";
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full md:w-[40vw]">
      <div
        className="
                relative bg-main h-[25vh] p-8 
                flex items-center justify-between rounded-br-4xl overflow-visible flex-wrap
                flex-col md:flex-row
                "
      >
        <div className="flex justify-between gap-4 w-full md:w-auto">
          <SparklesText className="text-berl font-bold font-tangerine text-5xl md:text-7xl tracking-wide">
            Personal Color
          </SparklesText>
          <Heading size="lg" />
        </div>

        <div
          className="
                    absolute -bottom-4 left-0 
                    h-[3vh] md:w-[15vw] 
                    p-9 flex items-center justify-center shadow-lg 
                    rounded-br-full rounded-tr-xl backdrop-blur-3xl
                    w-fit max-w-full
                "
        >
          <h1 className="text-white text-xl font-baloo font-semibold text-center">
            {userName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
