import React from "react";

const Home = () => {
  return (
    <div
      className="
        min-h-[90vh]
        px-4 sm:px-6 md:px-12 lg:px-20 xl:px-30
        flex flex-col justify-center items-center
        hero-bg
      "
    >
      {/* Hero Section */}
      <div data-aos="zoom-in-up" className="text-center">
        <h1
          className="
            text-[#a37000] font-bold
            text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]
            mb-3 md:mb-4
          "
        >
          Welcome to Our Platform
        </h1>

        <p
          className="
            text-gray-700
            text-sm sm:text-base md:text-lg
            max-w-xs sm:max-w-md md:max-w-xl
            mx-auto
          "
        >
          Manage users, track activity, and build scalable applications with a
          modern and responsive dashboard experience.
        </p>
      </div>

      {/* CTA Section */}
      <div data-aos="zoom-in-up" className="text-center mt-5 sm:mt-6 md:mt-8">
        <button
          className="
            px-4 py-2 sm:px-6 sm:py-3
            bg-[#a37000] text-white
            text-sm sm:text-base
            rounded-md
            hover:bg-[#8c5f00]
            transition
          "
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
