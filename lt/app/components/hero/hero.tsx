// import { FloatingDockMenu } from "../navbar/floatingDockMenu";
import ResponsiveNavbar from "@/app/components/navbar/navbar";
import { ColourfulText } from "./colourful-text";
// import { motion } from "motion/react";

function Hero() {
  return (
    <>
      <div className="main sticky top-0">
        <video autoPlay muted loop className="">
          <source src="/1211.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="">
        <span className="hero absolute text-white font-extrabold mobile:text-5xl mobile:px-[2rem] mobile:top-[25%] mobile:left-[1rem] // tablet:top-[30%] tablet:text-6xl tablet:px-[5rem] // top-[30%] text-7xl px-[10rem] smscreen:px-[20rem] wscreen:px-[30rem]">
          <ColourfulText text="Bring the serenity of nature to your desk. " />
        </span>
      </div>
      <nav className="absolute w-full top-0">
        <ResponsiveNavbar />
        {/* <FloatingDockMenu /> */}
      </nav>
    </>
  );
}

export default Hero;

// text-white absolute font-extrabold text-6xl  exclude:top-[18rem] wscreen:left-[12rem] smscreen:px-4 tablet:left-28 exclude:right-20 top-40 left-6 px-2  smscreen:pl-24 mobile:text-5xl wscreen:pl-[4.5rem] zxc:pl-[2.5rem] zxc:text-2xl zxc:top-[7rem]

// mobile:top-[13rem] mobile:px-3 mobile:pr-3
