"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/ltph.png";
import Plant from "@/public/plant.svg";
import { NavMenu } from "./navmenu";

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
    <nav className="flex items-center py-3 justify-center mobile:justify-evenly">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={130}
          height={130}
          className="absolute top-3 wscreen:left-[20rem] smscreen:left-[15rem] tablet:left-[8rem] mobile:left-[4rem]"
        />
      </Link>

      <NavMenu />

      {/* For Mobile Users / small screen */}
      <Sheet>
        <SheetTrigger>
          <Image
            src={Plant}
            alt="plant"
            height={30}
            width={30}
            className="absolute top-5 ml-0 mobile:right-[4rem] cursor-pointer exclude:hidden flex"
          />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex items-center justify-center mobileNav">
              <>
                <span className="font-semibold text-3xl py-[13rem]">
                  <Link href="/">
                    <strong className="font-semibold py-8 flex justify-center">
                      ɢᴇᴛ ꜱᴛᴀʀᴛᴇᴅ
                    </strong>
                  </Link>
                  <Link href="/shop">
                    <strong className="font-semibold py-8 flex justify-center">
                      ꜱʜᴏᴘ
                    </strong>
                  </Link>
                  <strong className="font-semibold py-8 flex justify-center">
                    ᴄᴏɴᴛᴀᴄᴛ
                  </strong>
                </span>
              </>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default ResponsiveNavbar;
