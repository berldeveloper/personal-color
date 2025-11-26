"use client";

import { useCallback, useState } from "react";
import PalettePage from "@/components/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

interface UndertoneProps {
  paletteImages: string[];
  urlBack: string;
  urlNext: string;
  description: string;
  tone: string;
  judulTone: string;
  pageIndex: number;
  mode: "undertone" | "skintone";
}

const SelectTone = ({
  paletteImages,
  urlBack,
  urlNext,
  tone,
  judulTone,
  description,
  mode,
  pageIndex,
}: UndertoneProps) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectColor = useCallback((color: string) => {
    setSelectedColor(color);
  }, []);

  return (
    <div className="bg-main min-h-screen flex justify-center items-center">
      {/* <ButtonBack href={urlBack} label="BACK" />
      <ButtonNext
        href={urlNext}
        label="NEXT"
        color={selectedColor}
        mode={mode}
        pageIndex={pageIndex}
      /> */}

      <div className="w-90 md:w-[50vw]">
        <PalettePage
          urlBack={urlBack}
          pageIndex={pageIndex}
          paletteImages={paletteImages}
          nextTone={urlNext}
          tone={tone}
          description={description}
          judulTone={judulTone}
          mode={mode}
          onNext={handleSelectColor}
        />
      </div>
    </div>
  );
};

export default SelectTone;
