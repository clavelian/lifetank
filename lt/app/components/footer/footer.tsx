import Image from "next/image";
import Fb from "@/public/fb.svg";
import Tk from "@/public/tiktok.svg";
import Ig from "@/public/ig.svg";
import Tw from "@/public/twitter.svg";

const ResponsiveFooter = () => {
  return (
    <footer className="bg-transparent boxShadow rounded-xl w-full p-6 lg:p-9 absolute bottom-0 zxc:hidden">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex items-center flex-wrap gap-[2rem] text-text">
          <a className="p-1.5 cursor-pointer rounded-full text-white hover:scale-150 transition-all duration-300">
            <Image
              src={Fb}
              width={30}
              height={30}
              alt="facebook icon"
              className=""
            />
          </a>
          <a className="p-1.5 cursor-pointer rounded-full text-white hover:scale-150 transition-all duration-300">
            <Image
              src={Tk}
              width={30}
              height={30}
              alt="tiktok icon"
              className=""
            />
          </a>
          <a className="p-1.5 cursor-pointer rounded-full text-white hover:scale-150 transition-all duration-300">
            <Image
              src={Ig}
              width={30}
              height={30}
              alt="instagram icon"
              className=""
            />
          </a>
          <a className="p-1.5 cursor-pointer rounded-full text-white hover:scale-150 transition-all duration-300">
            <Image
              src={Tw}
              width={30}
              height={30}
              alt="twitter icon"
              className=""
            />
          </a>
        </div>

        <div className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
          <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-400">
            © 2025 Lifetanks PH. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
