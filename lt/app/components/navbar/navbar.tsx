"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/ltph.png";
import Plant from "@/public/plant.svg";

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center py-2 justify-center mobile:justify-evenly">
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

      <Image
        src={Plant}
        alt="plant"
        height={30}
        width={30}
        className="text-[1.9rem] mr-0 cursor-pointer exclude:hidden flex text-green-300"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-0 opacity-0 z-[-1]"
        } lg:hidden p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-28 mobile:gap-[3.5rem] text-[1.2rem] flex justify-center pt-5">
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#fafafa] transition-all duration-300 before:left-0 text-[#ffffffc0] cursor-pointer">
            Gallery
          </li>
          <Link href="/shop">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#fafafa] transition-all duration-300 before:left-0 text-green-300 z-20   border-transparent cursor-pointer">
              Shop
            </li>
          </Link>
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#fafafa] transition-all duration-300 before:left-0 text-green-300 z-20   border-transparent cursor-pointer">
            About
          </li>
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#fafafa] transition-all duration-300 before:left-0 text-green-300 z-20   border-transparent cursor-pointer">
            Contact
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
