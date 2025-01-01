import ResponsiveNavbar from "@/app/components/navbar/navbar";
import ResponsiveFooter from "@/app/components/footer/footer";
import Image from "next/image";
import wildFlower from "@/public/1.jpg";

const wFlower = () => {
  return (
    <>
      <nav>
        <ResponsiveNavbar />
      </nav>
      <main className="h-[80vh] w-full flex items-center justify-center mobile:flex-col">
        <Image
          src={wildFlower}
          alt="wildflower"
          height={500}
          width={500}
          className="rounded-xl mobile:hidden"
        />
        <Image
          src={wildFlower}
          alt="wildflower"
          height={300}
          width={300}
          className="rounded-xl exclude:hidden"
        />
        <div className="w-[20rem] p-5">
          <div className="font-extrabold text-5xl pb-3">WildFlower</div>
          <div className="text-2xl pb-10">₱ 10,000</div>
          <div className="">
            Experience eternal freshness, endless peace, and fantastic colors to
            make you super relax and creative.
          </div>
        </div>
      </main>
      <footer className="mobile:hidden fixed right-0 bottom-0 w-full">
        <ResponsiveFooter />
      </footer>
    </>
  );
};

export default wFlower;
