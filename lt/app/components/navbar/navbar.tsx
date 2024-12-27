"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/ltph.png";
import Plant from "@/public/plant.svg";

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className="flex items-center w-full rounded-full py-2 justify-center mobile:justify-evenly">
      <Image src={Logo} alt="Logo" width={130} height={130} className="" />

      <ul className="flex justify-center items-center p-1 relative mobile:hidden font-semibold pl-14">
        <div
          className={`${
            (activeTab === 0 && "-translate-y-[5rem]") ||
            (activeTab === 1 && "translate-x-[-146px]") ||
            (activeTab === 2 && "translate-x-[-50px]") ||
            (activeTab === 3 && "translate-x-[41px]") ||
            (activeTab === 4 && "!w-[100px] translate-x-[142px]")
          } !bg-[#3B9DF8] absolute !text-[#fff] h-[85%] w-[95px] transition duration-500 rounded-full border-transparent cursor-pointer`}
        ></div>
        <li
          className={`${
            activeTab === 1 && " !text-[#fff]"
          } px-6 py-2  text-[#ffffffc0] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
          onClick={() => setActiveTab(1)}
        >
          Gallery
        </li>
        <li
          className={`${
            activeTab === 2 && " !text-[#fff]"
          } px-6 py-2  text-[#ffffffc0] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
          onClick={() => setActiveTab(2)}
        >
          Shop
        </li>
        <li
          className={`${
            activeTab === 3 && " !text-[#fff]"
          } px-6 py-2  text-[#ffffffc0] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
          onClick={() => setActiveTab(3)}
        >
          About
        </li>
        <li
          className={`${
            activeTab === 4 && " !text-[#fff]"
          } px-6 py-2  text-[#ffffffc0] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
          onClick={() => setActiveTab(4)}
        >
          Contact
        </li>
      </ul>

      <Image
        src={Plant}
        alt="plant"
        height={30}
        width={30}
        className="text-[1.9rem] mr-0 cursor-pointer exclude:hidden flex text-green-300"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      {/* <PiPlantDuotone
        className="text-[1.9rem] mr-0 cursor-pointer exclude:hidden flex text-green-300"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      /> */}

      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-0 opacity-0 z-[-1]"
        } lg:hidden p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-28 mobile:gap-[5.5rem] text-[1.2rem] flex justify-center pt-5">
          <li className="hover:border-b-[#3B9DF8] border-b-[3px] border-transparent transition-all duration-300 cursor-pointer text-green-300">
            Gallery
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer text-green-300">
            Shop
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer text-green-300">
            About
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
