import logo from "@/public/logo.png"
import Image from "next/image";

interface HeadingProps {
  size: "sm" | "md" | "lg";
}

const Heading = ({ size = "md" }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-10">
        <Image src={logo} width={200} height={200} alt="logo"/>
      </div>
    </div>
  );
};

export default Heading;
