import ResponsiveNavbar from "@/app/components/navbar/navbar";
import ResponsiveFooter from "@/app/components/footer/footer";
import { Button } from "@/components/ui/button";
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
          className="rounded-xl mobile:hidden tablet:hidden"
        />
        <Image
          src={wildFlower}
          alt="wildflower"
          height={400}
          width={400}
          className="rounded-xl mobile:hidden smscreen:hidden wscreen:hidden"
        />
        <Image
          src={wildFlower}
          alt="wildflower"
          height={300}
          width={300}
          className="rounded-xl tablet:hidden  smscreen:hidden wscreen:hidden"
        />
        <div className="w-[20rem] pl-5">
          <div className="font-extrabold text-5xl py-2">WildFlower</div>
          <div className="text-2xl pb-8">₱ 10,000</div>
          <div className="">
            Experience eternal freshness, endless peace, and fantastic colors to
            make you super relax and creative.
          </div>
          <div className="py-8 text-sm font-extralight">
            W9.6 inch X H11.8 inch X L9.6 inch
          </div>
          <div className="flex items-start justify-start">
            <Button className="font-bold text-md">Shop now</Button>
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
