import Hero from "@/app/components/hero/hero";
import ResponsiveFooter from "@/app/components/footer/footer";
// import TestOne from "@/components/ui/test";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* <div className="absolute top-0">
          <TestOne />
        </div> */}
      </main>
      <footer>
        <ResponsiveFooter />{" "}
      </footer>
    </>
  );
}
