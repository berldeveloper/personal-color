import PalettePage from "@/components/basic/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/basic/palette/face-bg-AE764C.png",
  "/basic/palette/face-bg-D5A286.png",
  "/basic/palette/face-bg-D8A380.png",
  "/basic/palette/face-bg-DD9767.png",
  "/basic/palette/face-bg-DFA880.png",
  "/basic/palette/face-bg-E19E78.png",
  "/basic/palette/face-bg-E4957E.png",
  "/basic/palette/face-bg-ECBA93.png",
  "/basic/palette/face-bg-EDB3A0.png",
  "/basic/palette/face-bg-F0BF9B.png",
  "/basic/palette/face-bg-F3C4BF.png",
  "/basic/palette/face-bg-F4B793.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen pt-16 pb-10 px-4">
      <ButtonBack href="/basic/hint" label="BACK" />
      <ButtonNext href="/basic/undertone-1" label="NEXT" />

      <PalettePage
        paletteImages={paletteImages}
        nextTone="/basic/undertone-1"
        description="Please identify with natural bright light"
        tone="SKIN TONE"
      />
    </div>
  );
};

export default Page;
