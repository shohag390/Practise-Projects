import React, { Suspense } from "react";
import Loading from "./Loading";
import Product from "./Product";

const productPromise = fetch(`https://dummyjson.com/products`).then((res) =>
  res.json()
);

const SuspenseMethod = () => {
  return (
    <div
      className="
        bg-gray-200
        px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30
        pb-6 sm:pb-8 md:pb-10
      "
    >
      {/* Heading */}
      <h2
        className="
          text-gray-700 font-medium
          text-base sm:text-lg md:text-[20px]
          py-4 sm:py-5
          text-center sm:text-left
        "
      >
        All Products
      </h2>

      {/* Product List */}
      <Suspense fallback={<Loading />}>
        <Product productPromise={productPromise} />
      </Suspense>
    </div>
  );
};

export default SuspenseMethod;
