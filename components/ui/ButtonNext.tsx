"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonNextProps = {
  href?: string;
  label?: string;
};

const ButtonNext = ({ href = "/", label = "Lanjut" }: ButtonNextProps) => {
  return (
    <Link
      href={href}
      className="fixed top-10 right-10 flex items-center gap-3 rounded-full p-2 hover:text-[#7D4754]"
    >
      <button className="bg-white hover:bg-[#7D4754] w-10 h-10 flex items-center justify-center rounded-full transition">
        <ArrowRight size={20} />
      </button>
      <span className="font-semibold tracking-wide">{label}</span>
    </Link>
  );
};

export default ButtonNext;
