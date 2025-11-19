import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  return (
    <header
      className="w-full flex items-center justify-between py-4 px-8 
      bg-gradient-to-r from-white to-pink-50 rounded-2xl shadow-lg border border-pink-100
      transform transition-all duration-300 hover:shadow-xl
      max-[650px]:flex-col max-[650px]:items-center max-[650px]:gap-4"
    >
      {/* Logo */}
      <h2
        className="text-3xl tracking-wide text-gray-800 font-poppins text-center font-bold
        max-[450px]:text-3xl max-[390px]:text-2xl transform transition-transform hover:scale-105
        whitespace-nowrap"
      >
       Raharpa <span className="text-pink-500">Thrift</span>
      </h2>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 max-[422px]:justify-center max-[390px]:gap-2">
        {/* Home Button */}
        <button
          className="px-5 py-2 rounded-xl bg-white border border-pink-200 shadow-lg
          text-gray-700 font-medium tracking-wide flex items-center gap-2
          transition-all duration-300 hover:bg-pink-50 hover:scale-105 hover:shadow-xl
          transform hover:-translate-y-1 max-[390px]:px-4 max-[390px]:py-1.5 max-[390px]:text-sm"
        >
          <i className="bx bx-home text-xl text-pink-500 max-[390px]:text-lg"></i>
          Home
        </button>

        {/* Logout Button */}
        <button
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 
          text-white font-medium tracking-wide flex items-center gap-2 shadow-lg
          transition-all duration-300 hover:from-pink-600 hover:to-pink-700 
          hover:scale-105 hover:shadow-xl transform hover:-translate-y-1
          max-[390px]:px-4 max-[390px]:py-1.5 max-[390px]:text-sm"
        >
          <i className="bx bx-log-out text-xl max-[390px]:text-lg"></i>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;