import axios from "axios";
import React, { Suspense } from "react";
import Cuntrys from "./Cuntrys";
import Loading from "./Loading";

const cuntryPromise = axios.get(`https://restcountries.com/v3.1/region/europe`);

const AxiosMethod = () => {
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
        All Countries
      </h2>

      {/* Countries List */}
      <Suspense fallback={<Loading />}>
        <Cuntrys cuntryPromise={cuntryPromise} />
      </Suspense>
    </div>
  );
};

export default AxiosMethod;
