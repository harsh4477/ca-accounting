import React from "react";

const Service = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center relative">
        <h2 className="text-[120px] leading-[140px] font-extrabold tracking-wider text-shadow-[0_5px_7px_#0000002b] text-white">
          Our Services
        </h2>
        <h6 className="text-[65px] font-semibold absolute -bottom-3 text-green-700">
          Our Services
        </h6>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-10 items-start">
        <div className="p-5 flex flex-col gap-3 relative">
          <div className="relative flex mb-5">
            <span className="relative w-20 h-20 rounded-full border-2 flex items-center justify-center text-3xl text-green-500 ">
              01
            </span>
            <span className="absolute bottom-0 left-6 text-[30px] leading-5 p-2.5 pr-12 pb-0 text-green-500 bg-white">
              . . .
            </span>
            <span className="absolute top-[70%] left-16 w-8 h-20 border-t-2 border-green-500"></span>
          </div>
          <h5 className="text-2xl font-semibold">Heading</h5>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            consectetur provident quibusdam obcaecati ex aperiam.
          </p>
        </div>
        {/* <div className="relative">
          <div className="relative w-[300px] h-[300px] mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-dotted border-red-300 z-0"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-t from-red-400 to-red-200 z-0"></div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full w-[260px] overflow-hidden">
            <img
              src="https://preview.robertbiswas.com/html/hireme/hireme/images/resource/quality.png"
              alt="Math person"
              className="relative z-10 mx-auto object-contain"
            />
          </div>
        </div> */}
        <div className="relative h-[350px] w-[350px] mt-[210px] mx-auto row-span-2">
          <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-500 to-green-100 rounded-full z-10"></span>
          <div className="absolute bottom-0 left-0 h-1/2 w-full bg-transparent rounded-b-full z-10">
            <img
              src="https://preview.robertbiswas.com/html/hireme/hireme/images/resource/quality.png"
              alt="Math person"
              className="z-20 absolute bottom-0 rounded-b-full"
            />
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 relative">
          <div className="relative flex mb-5">
            <span className="relative w-20 h-20 rounded-full border-2 flex items-center justify-center text-3xl text-green-500 ">
              02
            </span>
            <span className="absolute bottom-0 left-6 text-[30px] leading-5 p-2.5 pr-12 pb-0 text-green-500 bg-white">
              . . .
            </span>
            <span className="absolute top-[70%] left-16 w-8 h-20 border-t-2 border-green-500"></span>
          </div>
          <h5 className="text-2xl font-semibold">Heading</h5>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            consectetur provident quibusdam obcaecati ex aperiam.
          </p>
        </div>
        <div className="p-5 flex flex-col gap-3 relative">
          <div className="relative flex mb-5">
            <span className="relative w-20 h-20 rounded-full border-2 flex items-center justify-center text-3xl text-green-500 ">
              03
            </span>
            <span className="absolute bottom-0 left-6 text-[30px] leading-5 p-2.5 pr-12 pb-0 text-green-500 bg-white">
              . . .
            </span>
            <span className="absolute top-[70%] left-16 w-8 h-20 border-t-2 border-green-500"></span>
          </div>
          <h5 className="text-2xl font-semibold">Heading</h5>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            consectetur provident quibusdam obcaecati ex aperiam.
          </p>
        </div>
        <div className="p-5 flex flex-col gap-3 relative">
          <div className="relative flex mb-5">
            <span className="relative w-20 h-20 rounded-full border-2 flex items-center justify-center text-3xl text-green-500 ">
              04
            </span>
            <span className="absolute bottom-0 left-6 text-[30px] leading-5 p-2.5 pr-12 pb-0 text-green-500 bg-white">
              . . .
            </span>
            <span className="absolute top-[70%] left-16 w-8 h-20 border-t-2 border-green-500"></span>
          </div>
          <h5 className="text-2xl font-semibold">Heading</h5>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            consectetur provident quibusdam obcaecati ex aperiam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
