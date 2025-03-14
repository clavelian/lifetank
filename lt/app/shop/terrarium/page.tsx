import ResponsiveNavbar from "@/app/components/navbar/navbar";
import ResponsiveFooter from "@/app/components/footer/footer";
import Image from "next/image";
import One from "@/public/1.jpg";
import Two from "@/public/2.png";
import Three from "@/public/3.jpg";
import Four from "@/public/4.png";
import Five from "@/public/5.jpg";
// import Six from "@/public/6.png"; Betta fish
import Seven from "@/public/7.jpg";
import Eight from "@/public/8.jpg";
import Nine from "@/public/9.jpg";
import Ten from "@/public/10.jpg";
import Eleven from "@/public/11.jpg";
import Twelve from "@/public/12.jpg";
import Link from "next/link";

const Shop = () => {
  return (
    <>
      <nav>
        <ResponsiveNavbar />
      </nav>
      <main className="h-[80vh] w-full grid grid-cols-6 justify-center items-center gap-3 px-7">
        {/* ===== wildflower */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={One}
            alt="one"
            height={1000}
            width={1000}
            className="mobile:w-[10rem] mobile:h-[15rem] w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Wildflower
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/terrarium/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* ===== bonsai */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Two}
            alt="Two"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Bonsai
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/terrarium/bonsai">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>

        {/* mountainscape */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Three}
            alt="Three"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Mountainscape
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>

        {/* Eternal */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Four}
            alt="Four"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Eternal
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}

        {/* Miniscape */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Five}
            alt="Five"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Miniscape
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}

        {/* Spring */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Seven}
            alt="Seven"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Spring
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}

        {/* Bloom */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Eight}
            alt="Eight"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Bloom
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}

        {/* Celestial */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Nine}
            alt="Nine"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Celestial
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}
        {/* Sibuyan */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Ten}
            alt="Ten"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Sibuyan
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}

        {/* Pinecone */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Eleven}
            alt="Eleven"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Pinecone
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}

        {/* Sulu */}
        <div className="w-full flex mobile:w-[10rem] exclude:w-[20%] mobile:h-[15rem] h-[25rem] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <Image
            src={Twelve}
            alt="Twelve"
            height={1000}
            width={1000}
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[54%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] mobile:text-[.5rem] font-extrabold text-white text-center capitalize shopTitle">
              Sulu
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/shop/wildflower">
              <span className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </span>
            </Link>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* end */}
      </main>
      <footer>
        <ResponsiveFooter />
      </footer>
    </>
  );
};

export default Shop;
