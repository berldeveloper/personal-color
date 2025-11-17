import PalettePage from "@/components/basic/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/basic/undertone-2/face-bg-C5C5C1.png",
  "/basic/undertone-2/face-bg-C49308.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex justify-center items-center pt-16 pb-10 px-4">
      <ButtonBack href="/basic/undertone-1" label="BACK" />
      <ButtonNext href="/basic/undertone-3" label="NEXT" />

      <div className="w-[80vw]">
        <PalettePage
          paletteImages={paletteImages}
          nextTone="/basic/undertone-3"
          tone="UNDER TONE"
          description="Choose a color that makes your skin brighter and softens the color around your dark circles & smile lines"
          judulTone="Check your undertone 2/3"
        />
      </div>
    </div>
  );
};

export default Page;
