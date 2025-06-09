import React from "react";
import HeaderTOSP from "./HeaderTOSP";
import FooterTOSP from "./FooterTOSP";

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdf6ec]">
      <HeaderTOSP />
      <main
        className="flex-1 flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("/bg.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="z-10 max-w-xl px-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-700 mb-2">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Uh-oh! This week has vanished.
          </h2>
          <h3 className="text-lg text-gray-600 mb-4">
            The page you're looking for doesn't exist.
          </h3>
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 text-gray-700 rounded-md shadow-md mb-4">
            <b>WEEK LOST</b> — looks like this week never made it onto your
            timeline.
          </div>
          <p className="text-gray-500 text-base">
            Double-check the URL or go back to your timeline.
          </p>
        </div>
        <div className="z-10 flex-shrink-0 flex items-center justify-center mt-8 md:mt-0 md:ml-12">
          <img
            src="/Avatar.png"
            alt="Lost Week"
            className="w-60 h-60 md:w-80 md:h-80 drop-shadow-2xl select-none"
            draggable={false}
          />
        </div>
        <div className="absolute inset-0 bg-[#fdf6ec]/70 pointer-events-none" />
      </main>
      <FooterTOSP />
    </div>
  );
}

export default NotFound;
