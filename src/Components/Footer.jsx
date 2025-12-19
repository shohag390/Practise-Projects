import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-sky-950
        px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30
        py-3 sm:py-4
        flex items-center justify-center
      "
    >
      <p
        className="
          text-white
          text-xs sm:text-sm md:text-base
          text-center
        "
      >
        &copy; 2025 Md Shohag Ali. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
