import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SubMenuItem } from "@/types";

type NavbarDropdownMenuProps = {
  submenu?: SubMenuItem[];
  open: boolean;
};

const NavbarDropdownMenu = ({ submenu, open }: NavbarDropdownMenuProps) => {
  return (
    <Popover open={open}>
      <PopoverTrigger>{open ? <ChevronUp /> : <ChevronDown />}</PopoverTrigger>

      <PopoverContent className="bg-primary-yellow flex flex-col gap-5 border-0 h-52 shadow-lg w-full">
        {submenu?.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className="font-medium hover:bg-black text-white py-3 rounded last:border-t-2 last:border-t-black/30 w-full px-4"
          >
            {item.name}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default NavbarDropdownMenu;
