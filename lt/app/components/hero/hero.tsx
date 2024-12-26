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
        <span className="mix-blend-difference absolute font-extrabold text-6xl mobile:top-[15rem] exclude:top-[18rem] exclude:left-20 exclude:right-20 top-40 left-6 px-2">
          Bring the serenity of a forest to your desk.
        </span>
      </div>
      <nav className="absolute w-full top-0">
        <ResponsiveNavbar />
      </nav>
    </>
  );
}

export default Hero;
