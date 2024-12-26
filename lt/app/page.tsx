import Hero from "@/app/components/hero/hero";
import ResponsiveFooter from "@/app/components/footer/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <footer>
        <ResponsiveFooter />{" "}
      </footer>
    </>
  );
}
