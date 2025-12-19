import React, { use } from "react";

const Product = ({ productPromise }) => {
  const producsData = use(productPromise);
  const products = producsData.products;
  console.log(products);

  return (
    <div className="grid grid-cols-5 gap-5">
      {products?.map((item, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="shadow p-2 border-2 border-gray-100 rounded-2xl bg-gray-50 flex flex-col items-center"
        >
          <img className="h-50 w-50" src={item?.thumbnail} alt="" />
          <h4 className="font-bold text-[18px] text-[#a37000] line-clamp-1">
            {item?.title}
          </h4>
          <p>Price: ${item?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
