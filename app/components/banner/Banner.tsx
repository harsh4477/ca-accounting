import React from "react";
import Header from "../header/Header";

const Banner = () => {
  return (
    <div className="relative h-[480px] sm:h-[640px] lg:h-[800px] banner-section" id="home">
      {/* <Header /> */}
      <div className="absolute top-0 left-0 w-full">
        <video autoPlay muted loop className="object-cover w-full h-[480px] sm:h-[640px] lg:h-[800px]">
          <source src="./video/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center gap-5 px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl">
            Welcome to
            <span className="text-green-500 font-bold">
              Complete Accounting
            </span>
          </h1>
          <p className="text-white max-w-3xl text-center text-base sm:text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus accusamus neque beatae esse eaque consectetur, suscipit
            sit ea placeat iste, dicta cupiditate quasi sint ipsum excepturi cum
            delectus dolorem asperiores.
          </p>
          <button className="border border-green-500 text-base sm:text-lg text-green-500 bg-transparent rounded-lg py-2 px-6 font-semibold backdrop-blur-xl cursor-pointer hover:bg-green-900 hover:border-green-900 hover:text-white transition-all ease-in-out duration-300 mt-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
