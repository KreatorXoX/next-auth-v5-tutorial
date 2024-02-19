"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PackagesDropDown } from "./packages-dropdown";

type Props = {};

const NavigationBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 w-full shadow-md">
      <div className="p-3 flex justify-between max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <Link
            href={"/"}
            className={cn(`${pathname === "/" ? "underline" : ""}`)}
          >
            HiBox Arbitraj
          </Link>
          <Link href={"/"}>Anasayfa</Link>
          <PackagesDropDown />
          <Link
            href={"/lessons"}
            className={cn(
              `${pathname === "/lessons" ? "underline underline-offset-5" : ""}`
            )}
          >
            Egitimler
          </Link>
          <Link
            href={"/help"}
            className={cn(`${pathname === "/help" ? "underline" : ""}`)}
          >
            Yardim
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>Avatar</div>
          <div>
            <div>Isim</div>
            <div>Email</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
