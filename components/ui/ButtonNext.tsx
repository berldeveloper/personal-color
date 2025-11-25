"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  appendUnderTone,
  saveSkinTone,
  setUnderToneByPage,
} from "@/lib/utils/cookies";

type ButtonNextProps = {
  href?: string;
  label?: string;
  pageIndex: number;
  color?: string; // ← penting
  mode?: "undertone" | "skintone"; // ← penting
  onClick?: () => void;
};

const ButtonNext = ({
  href = "/",
  label = "NEXT",
  color,
  mode = "undertone",
  pageIndex,
  onClick,
}: ButtonNextProps) => {
  const handleClick = () => {
    if (color) {
      // sama seperti desktop
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      mode === "skintone"
        ? saveSkinTone(color)
        : setUnderToneByPage(color, pageIndex);
    }

    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="fixed top-10 right-10 flex items-center gap-3 rounded-full p-2 hover:text-[#7D4754]"
    >
      <div className="bg-white hover:bg-[#7D4754] w-10 h-10 flex items-center justify-center rounded-full transition">
        <ArrowRight size={20} />
      </div>
      <span className="font-semibold tracking-wide">{label}</span>
    </Link>
  );
};

export default ButtonNext;
