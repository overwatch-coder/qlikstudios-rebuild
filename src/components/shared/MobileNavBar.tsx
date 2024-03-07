import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
} from "@/components/ui/sheet";
import Navbar from "./Navbar";
import { X } from "lucide-react";

type MobileNavBarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavBar = ({ open, setOpen }: MobileNavBarProps) => {
  return (
    <Sheet open={open}>
      <SheetContent
        side="left"
        className="w-screen h-screen px-10 bg-primary-main py-20 text-white"
      >
        <SheetClose
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none cursor-pointer data-[state=open]:bg-secondary"
        >
          <X className="h-10 w-10" />
          <span className="sr-only">Close</span>
        </SheetClose>

        <SheetDescription className="flex flex-col justify-center gap-12">
          <Navbar />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
