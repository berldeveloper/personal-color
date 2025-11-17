"use client";

import CardPreview from "@/components/ui/CardPreview";
import Link from "next/link";
import { useState } from "react";

interface PalettePageProps {
  paletteImages: string[];
  nextTone: string;
  description?: string;
  tone?: string;
  judulTone?: string;
}

const getColorFromFilename = (path: string) => {
  const name = path.split("face-bg-")[1].replace(".png", "");
  return `#${name}`;
};

const PalettePage = ({
  paletteImages,
  nextTone,
  description,
  tone,
  judulTone,
}: PalettePageProps) => {
  const [capturedImg] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("captured-image");
    }
    return null;
  });

  const [selectedPalette, setSelectedPalette] = useState<string>(
    paletteImages?.[1] ?? ""
  );

  return (
    <div
      className="flex flex-col-reverse lg:flex-row justify-center items-center px-4 gap-10 lg:gap-14 
    "
    >
      <div
        className="md:hidden w-full flex justify-center
      "
      >
        <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-lg w-full max-w-sm flex flex-col items-center">
          <div className="w-56 h-72 overflow-hidden flex items-center justify-center  mt-2">
            <CardPreview
              capturedImg={capturedImg}
              selectedPalette={selectedPalette}
            />
          </div>

          <div className="w-full bg-[#C36262] text-white text-center text-xs py-2 mt-4 rounded-md font-semibold">
            {description}
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            {paletteImages.map((img, idx) => {
              const color = getColorFromFilename(img);
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPalette(img)}
                  className="rounded-full border-[3px] transition-all w-12 h-12"
                  style={{
                    backgroundColor: color,
                    borderColor: selectedPalette === img ? "#7C2C2C" : "white",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="hidden md:flex bg-[#D29797]/60 p-8 rounded-xl shadow-md w-full max-w-md flex-col items-center
      "
      >
        <div className="w-full text-white text-center font-bold text-lg bg-[#7C2C2C] py-3 rounded-lg">
          {tone}
        </div>

        <div className="grid grid-cols-5 gap-5 mt-6 place-items-center">
          {paletteImages.map((img, idx) => {
            const color = getColorFromFilename(img);
            return (
              <button
                key={idx}
                onClick={() => setSelectedPalette(img)}
                className="rounded-full border-4 transition-all cursor-pointer w-16 h-16"
                style={{
                  backgroundColor: color,
                  borderColor:
                    selectedPalette === img ? "#7C2C2C" : "transparent",
                }}
              />
            );
          })}
        </div>

        <Link href={nextTone} className="w-full mt-4">
          <button className="mt-8 w-full bg-[#7C2C2C] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90 transition">
            Next
          </button>
        </Link>
      </div>

      {/* card preview dekstop */}
      <div className="hidden md:flex w-[350px] xl:w-full justify-center">
        <CardPreview
          capturedImg={capturedImg}
          selectedPalette={selectedPalette}
        />
      </div>

      <div>
        <h1 className="text-white font-bold">{judulTone}</h1>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default PalettePage;
