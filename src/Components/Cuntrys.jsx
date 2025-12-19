import React, { use } from "react";

const Cuntrys = ({ cuntryPromise }) => {
  const cuntryData = use(cuntryPromise);
  const cuntrys = cuntryData.data;

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-4 sm:gap-5
      "
    >
      {cuntrys?.map((item, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="
            shadow
            p-3
            border border-gray-100
            rounded-2xl
            bg-gray-50
            flex flex-col items-center
          "
        >
          {/* Flag */}
          <img
            className="
              h-32 sm:h-36 md:h-40
              w-full
              object-cover
              rounded-md
              border border-gray-100
            "
            src={item?.flags?.png}
            alt={item?.name?.common}
          />

          {/* Country Name */}
          <h4
            className="
              font-bold
              text-base sm:text-[17px] md:text-[18px]
              text-[#a37000]
              line-clamp-1
              pt-2
              text-center
            "
          >
            {item?.name?.common}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Cuntrys;
