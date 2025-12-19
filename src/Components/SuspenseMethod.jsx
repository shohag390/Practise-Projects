import React, { Suspense } from "react";
import Loading from "./Loading";
import Product from "./Product";

const productPromise = fetch(`https://dummyjson.com/products`).then((res) =>
  res.json()
);

const SuspenseMethod = () => {
  return (
    <div className="px-30 pb-10 bg-gray-200">
      <h2 className="text-[20px] font-medium py-5 text-gray-700">
        All Products
      </h2>
      <Suspense fallback={<Loading />}>
        <Product productPromise={productPromise} />
      </Suspense>
    </div>
  );
};

export default SuspenseMethod;
