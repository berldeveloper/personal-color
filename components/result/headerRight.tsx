"use client";

import Heading from "@/components/ui/Heading";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useMemo } from "react";

const HeaderRight = () => {
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
    <div className="md:w-[30vw]">
      <div className="bg-card-component shadow-lg flex flex-col items-center p-8 rounded-4xl">
        <div className="w-full md:w-auto">
          <SparklesText className="text-berl font-bold font-tangerine text-5xl md:text-7xl tracking-wide">
            WARM
          </SparklesText>
          {/* <Heading size="lg" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
