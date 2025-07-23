import React from "react";

const LOGOS = [
  {
    src: "https://tmb001.vercel.app/images/partners/logo-pointsmaker.png",
    alt: "Pointsmaker",
  },
  {
    src: "https://tmb001.vercel.app/images/partners/logo-buyersforpoints.png",
    alt: "BuyersForPoints",
  },
  {
    src: "https://tmb001.vercel.app/images/partners/logo-dealandrunner.png",
    alt: "DealandRunner",
  },
];

export default function Clients() {
  return (
    <div className="w-full py-8 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Left Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-[100px] md:w-[150px] lg:w-[250px] h-full z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to left, rgba(255,255,255,0), white)",
          }}
        ></div>

        {/* Right Gradient Overlay */}
        <div
          className="absolute top-0 right-0 w-[100px] md:w-[150px] lg:w-[250px] h-full z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,0), white)",
          }}
        ></div>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            {LOGOS.map((logo, index) => (
              <img
                key={`logo-${index}`}
                src={logo.src}
                className="h-[30px] sm:h-[40px] md:h-[50px] mx-4 sm:mx-6 md:mx-8 lg:mx-10"
                alt={logo.alt}
              />
            ))}
          </div>
          <div className="animate-marquee2 whitespace-nowrap flex absolute top-0 left-[100%]">
            {LOGOS.map((logo, index) => (
              <img
                key={`logo-dup-${index}`}
                src={logo.src}
                className="h-[30px] sm:h-[40px] md:h-[50px] mx-4 sm:mx-6 md:mx-8 lg:mx-10"
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
