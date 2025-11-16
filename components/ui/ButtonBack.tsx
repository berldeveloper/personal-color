// components/ui/BackButton.tsx

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ButtonBackProps = {
  href?: string;
  label?: string;
};

const ButtonBack = ({ href = "/", label = "Kembali" }: ButtonBackProps) => {
  return (
    <Link
      href={href}
      className="fixed top-10 left-10 flex items-center gap-3 rounded-full p-2 hover:text-[#7D4754]"
    >
      <button className="bg-white hover:bg-[#7D4754] w-10 h-10 flex items-center justify-center rounded-full transition">
        <ArrowLeft size={20} />
      </button>
      <span className="font-semibold tracking-wide">{label}</span>
    </Link>
  );
};

export default ButtonBack;
