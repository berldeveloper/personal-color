import PalettePage from "@/components/basic/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/basic/undertone-3/face-bg-000000.png",
  "/basic/undertone-3/face-bg-56372D.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex justify-center items-center pt-16 pb-10 px-4">
      <ButtonBack href="/basic/undertone-2" label="BACK" />
      <ButtonNext href="/basic/result" label="NEXT" />

      <div className="w-[80vw]">
        <PalettePage
          paletteImages={paletteImages}
          nextTone="/basic/result"
          tone="UNDER TONE"
          description="Choose a color that makes your skin brighter and softens the color around your dark circles & smile lines"
          judulTone="Check your undertone 3/3"
        />
      </div>
    </div>
  );
};

export default Page;
