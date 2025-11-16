import Image from "next/image";

const CardPreview = ({
  capturedImg,
  selectedPalette,
}: {
  capturedImg: string | null;
  selectedPalette: string | null;
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-[250px] h-[220px] xl:w-[650px] xl:h-[620px] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
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

export default CardPreview;
