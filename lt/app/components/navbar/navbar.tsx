"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/ltph.png";
import Plant from "@/public/plant.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ResponsiveNavbar = () => {
  return (
    <nav className="flex items-center py-4 justify-center mobile:justify-evenly">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={130} height={130} className="" />
      </Link>

      <ul className="flex justify-center items-center p-1 relative mobile:hidden font-semibold pl-14">
        <Link href="/gallery">
          <li className="px-6 py-2 before:w-0 hover:before:w-full before:bg-[#3b9df8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:bottom-[-2px] before:left-0 text-[#ffffffc0] hover:text-white duration-300">
            Gallery
          </li>
        </Link>
        <Link href="/shop">
          <li className="px-6 py-2 before:w-0 hover:before:w-full before:bg-[#3b9df8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:bottom-[-2px] before:left-0 text-[#ffffffc0] hover:text-white duration-300">
            Shop
          </li>
        </Link>
        <Link href="/about">
          <li className="px-6 py-2 before:w-0 hover:before:w-full before:bg-[#3b9df8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:bottom-[-2px] before:left-0 text-[#ffffffc0] hover:text-white duration-300">
            About
          </li>
        </Link>
        <Link href="/contact">
          <li className="px-6 py-2 before:w-0 hover:before:w-full before:bg-[#3b9df8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:bottom-[-2px] before:left-0 text-[#ffffffc0] hover:text-white duration-300">
            Contact
          </li>
        </Link>
      </ul>

      <Sheet>
        <SheetTrigger>
          <Image
            src={Plant}
            alt="plant"
            height={30}
            width={30}
            className="text-[1.9rem] mr-0 cursor-pointer exclude:hidden flex"
          />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="">
              <ul className="font-semibold text-3xl py-[13rem]">
                <li className="py-8">Get Started</li>
                <li className="py-8">Shop</li>
                <li className="py-8">Contact</li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default ResponsiveNavbar;
