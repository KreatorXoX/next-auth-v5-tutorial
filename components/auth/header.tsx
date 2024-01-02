import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import React from "react";
const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
type Props = { label: string };

const Header = ({ label }: Props) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center my-4">
      <h1 className={cn("text-2xl font-bold", font.className)}>
        Authentication
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
