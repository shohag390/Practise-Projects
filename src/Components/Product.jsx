import React, { use } from "react";

const Product = ({ productPromise }) => {
  const producsData = use(productPromise);
  const products = producsData.products;

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
      {products?.map((item, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="
            shadow
            p-4 sm:p-5 md:p-6
            border border-gray-100
            rounded-2xl
            bg-gray-50
            flex flex-col items-center
            text-center
          "
        >
          {/* Product Image */}
          <img
            className="
              h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56
              w-full
              object-cover
              rounded-md
            "
            src={item?.thumbnail}
            alt={item?.title}
          />

          {/* Product Title */}
          <h4
            className="
              font-bold
              text-base sm:text-[17px] md:text-[18px]
              text-[#a37000]
              line-clamp-1
              mt-2
            "
          >
            {item?.title}
          </h4>

          {/* Price */}
          <p className="text-sm sm:text-base mt-1">Price: ${item?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
