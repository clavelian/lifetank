import ResponsiveNavbar from "@/app/components/navbar/navbar";

function Hero() {
  return (
    <>
      <div className="main sticky top-0">
        <video autoPlay muted loop className="">
          <source src="/1211.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="">
        <span className="hero text-white absolute font-extrabold text-6xl mobile:top-[13rem] exclude:top-[18rem] wscreen:left-[12rem] smscreen:px-4 tablet:left-28 exclude:right-20 top-40 left-6 px-2 mobile:px-5 mobile:pr-3 smscreen:pl-24 mobile:text-4xl wscreen:pl-[4.5rem] zxc:pl-[2.5rem] zxc:text-2xl zxc:top-[7rem]">
          Bring the serenity of nature to your desk.
        </span>
      </div>
      <nav className="absolute w-full top-0">
        <ResponsiveNavbar />
      </nav>
    </>
  );
}

export default Hero;
