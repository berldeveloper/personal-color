import CardHint from "@/components/basic/CardHint";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import HomeHint from "@/public/basic/home-hint.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ButtonBack from "@/components/ui/ButtonBack";

const dataCard = [
  { judul: "LIGHTNING CHECK", subJudul: "GOOD" },
  { judul: "LOOK STRAIGHT", subJudul: "GOOD" },
  { judul: "POSITION FACE", subJudul: "GOOD" },
];

const Page = () => {
  return (
    <div className="relative min-h-screen bg-main flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center gap-6 px-6">
        <Heading />

        <h1 className="text-white font-bold text-4xl md:text-3xl leading-tight">
          TIPS FOR IDEAL
          <br /> CAMERA POSITION
        </h1>

        <div className="flex flex-col justify-center items-center text-center px-6 py-8 bg-component rounded-md">
          <div className="flex justify-center items-center text-center pt-4 gap-4 flex-wrap text-white font-bold">
            {dataCard.map((item, index) => (
              <CardHint
                key={index}
                judul={item.judul}
                subJudul={item.subJudul}
              />
            ))}
          </div>

          <Image src={HomeHint} alt="hint-camera" width={300} height={200} />
        </div>

        <div className="flex gap-3">
          <Link href="/basic/captured">
            <Button className="berl-btn mt-4 w-40">Start</Button>
          </Link>
          <Link href="/">
            <Button className="berl-btn mt-4 w-40">Kembali</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
