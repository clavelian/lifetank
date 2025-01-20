const ResponsiveFooter = () => {
  return (
    <footer className="bg-transparent boxShadow rounded-xl w-full p-6 exclude:p-9 absolute bottom-0 ">
      <div className="pt-[20px] flex items-center w-full flex-wrap gap-[1.2rem] justify-center">
        <p className="text-[0.8rem] mobile:text-[.7rem] text-gray-400">
          © 2025 Lifetanks PH. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
