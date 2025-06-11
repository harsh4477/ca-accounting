import React from "react";
import BgCompass1 from "~/assets/icons/svg/BgCompass1";
import BgCompass2 from "~/assets/icons/svg/BgCompass2";
import BgCompass3 from "~/assets/icons/svg/BgCompass3";
import BgCompass4 from "~/assets/icons/svg/BgCompass4";
import BgCompass5 from "~/assets/icons/svg/BgCompass5";
import HomeBgIcon from "~/assets/icons/svg/HomeBgIcon";
import WomanImg from "~/assets/icons/woman-3.png";

export default function HomePage() {
  return (
    // <div className="bg-[linear-gradient(90deg,rgba(8,32,62,1)0%,rgba(85,124,147,1)100%)] -mt-[92px] z-0 relative">
    // <div className="bg-[linear-gradient(360deg,rgba(36,110,175,1)0%,rgba(6,26,75,1)100%)] -mt-[92px] z-0 relative flex items-center justify-center">
    //   <HomeBgIcon
    //     size={700}
    //     color="#ffffff42"
    //     className="absolute top-1/2 -translate-y-1/2 left-20 w-[900px] h-[900px]"
    //   />

    //   <div className="container mx-auto h-[780px] z-10 flex justify-center relative">
    //     <div className="absolute top-1/2 -translate-y-1/2 right-10 w-[600px] h-[600px] flex items-center justify-center bg">
    //       <BgCompass1
    //         size={700}
    //         color="#ffffff42"
    //         className="absolute w-full h-full animate-compass1"
    //       />
    //       <BgCompass2
    //         size={700}
    //         color="#ffffff42"
    //         className="absolute w-full h-full animate-compass2"
    //       />
    //       <BgCompass3
    //         size={700}
    //         color="#ffffff42"
    //         className="absolute w-full h-full animate-compass3"
    //       />
    //       <BgCompass4
    //         size={700}
    //         color="#ffffff42"
    //         className="absolute w-full h-full animate-compass4"
    //       />
    //       <BgCompass5
    //         size={700}
    //         color="#ffffff42"
    //         className="absolute w-full h-full animate-compass5"
    //       />
    //     </div>
    //     <div className="grid grid-cols-2 gap-5">
    //       <div className="flex flex-col justify-center gap-2">
    //         <h1 className="text-white text-4xl">Heading</h1>
    //         <p className="text-white text-base w-[600px]">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    //           reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing
    //           elit. Quas, reprehenderit.Lorem ipsum dolor sit amet consectetur
    //           adipisicing elit. Quas, reprehenderit. Lorem ipsum dolor sit amet
    //           consectetur adipisicing elit. Quas, reprehenderit.Lorem ipsum
    //           dolor sit amet consectetur adipisicing elit. Quas, reprehenderit.
    //         </p>
    //       </div>
    //       <div className="relative z-10 flex items-end justify-end">
    //         <img className="h-[580px]" src={WomanImg} alt="img" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="absolute top-0 left-0 w-full">
      <video autoPlay muted loop className="object-cover w-full h-[800px]">
        <source src="./video/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center gap-5">
        <h1 className="text-white text-6xl">
          Welcome to{" "}
          <span className="text-green-500 font-bold">Complete Accounting</span>
        </h1>
        <p className="text-white max-w-3xl text-center text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          accusamus neque beatae esse eaque consectetur, suscipit sit ea placeat
          iste, dicta cupiditate quasi sint ipsum excepturi cum delectus dolorem
          asperiores.
        </p>
        <button className="border border-green-500 text-lg text-green-500 bg-transparent rounded-lg py-2 px-6 font-semibold backdrop-blur-xl cursor-pointer hover:bg-green-900 hover:border-green-900 hover:text-white transition-all ease-in-out duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
