import { FloatingDockMenu } from "./floatingDockMenu";
import Image from "next/image";
import FB from "@/public/fb.svg";
import IG from "@/public/ig.svg";

const ResponsiveFooter = () => {
  return (
    <footer className="bg-transparent boxShadow rounded-xl w-full p-6 exclude:p-9 absolute bottom-0 ">
      <span className="absolute right-[4rem] bottom-[6rem] exclude:hidden">
        <FloatingDockMenu />
      </span>
      <div className="pt-[20px] flex items-center w-full flex-wrap gap-[1.2rem] justify-center">
        <p className="text-[0.8rem] mobile:text-[.7rem] text-gray-400 flex items-center justify-center">
          © 2025 Lifetanks PH. All Rights Reserved.
          <Image src={FB} alt="fb" />
          <Image src={IG} alt="ig" />
        </p>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
