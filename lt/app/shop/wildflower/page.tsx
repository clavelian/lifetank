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
      <main className="h-[80vh] w-full flex items-center justify-center">
        <Image
          src={wildFlower}
          alt="wildflower"
          height={500}
          width={500}
          className="rounded-xl"
        />
        <p className="flex w-32 p-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          magnam, repellat suscipit nulla nobis exercitationem quibusdam esse
          optio nesciunt dicta porro tenetur quod quos dolorum unde aliquam odio
          quas at.
        </p>
      </main>
      <footer>
        <ResponsiveFooter />
      </footer>
    </>
  );
};

export default wFlower;
