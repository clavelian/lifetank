"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/ltph.png";
import { NavMenu } from "./navmenu";

const ResponsiveNavbar = () => {
  return (
    <nav className="flex items-center py-3 justify-center mobile:justify-evenly">
      <Link href="/">
        {/* sm and wscreen */}
        <Image
          src={Logo}
          alt="Logo"
          width={130}
          height={130}
          className="absolute top-3 wscreen:left-[20rem] smscreen:left-[15rem] tablet:left-[5rem] tablet:hidden mobile:hidden"
        />
        {/* tablet */}
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
          className="absolute top-4 tablet:left-[8rem] wscreen:hidden smscreen:hidden mobile:hidden"
        />
        {/* mobile */}
        <Image
          src={Logo}
          alt="Logo"
          width={80}
          height={80}
          className="absolute top-7 mobile:left-[2.5rem] wscreen:hidden smscreen:hidden tablet:hidden"
        />
      </Link>
      {/* tablet */}
      <NavMenu />
    </nav>
  );
};

export default ResponsiveNavbar;
