import Image from "next/image";
import { memo } from "react";

const CardPreview = ({
  capturedImg,
  selectedPalette,
}: {
  capturedImg: string | null;
  selectedPalette: string | null;
}) => {
  return (
    <div className="md:min-w-[450px] xl:min-h-[420px] not-only:flex items-center justify-center">
      <div className="relative w-[250px] h-[220px] md:w-full md:h-full rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
        {capturedImg && (
          <Image
            src={capturedImg}
            alt="Captured"
            fill
            className="object-cover"
          />
        )}

        {selectedPalette && (
          <Image
            src={selectedPalette}
            alt="Palette"
            fill
            className="object-cover pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};

export default memo(CardPreview);
