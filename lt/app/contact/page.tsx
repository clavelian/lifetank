import ResponsiveNavbar from "@/app/components/navbar/navbar";
import ResponsiveFooter from "@/app/components/footer/footer";

const Shop = () => {
  return (
    <>
      <nav>
        <ResponsiveNavbar />
      </nav>
      <main className="h-[100vh] w-full flex justify-center items-center">
        SAMPLE CONTACT PAGE
      </main>
      <footer>
        <ResponsiveFooter />
      </footer>
    </>
  );
};

export default Shop;
