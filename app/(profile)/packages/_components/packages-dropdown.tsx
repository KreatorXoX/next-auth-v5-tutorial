import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function PackagesDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="bg-transparent text-base text-inherit hover:bg-inherit font-normal cursor-pointer"
          role="button"
        >
          Kolilerim
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <Link href="/packages/active">
            <DropdownMenuItem>Aktif Kolilerim</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href="/packages/new">
            <DropdownMenuItem>Yeni Koli Olustur</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
