import axios from "axios";
import React, { Suspense } from "react";
import Cuntrys from "./Cuntrys";
import Loading from "./Loading";

const cuntryPromise = axios.get(`https://restcountries.com/v3.1/region/europe`);

const AxiosMethod = () => {
  return (
    <div className="px-30 pb-10 bg-gray-200">
      <h2 className="text-[20px] font-medium py-5 text-gray-700">
        All Cuntrys
      </h2>
      <Suspense fallback={<Loading />}>
        <Cuntrys cuntryPromise={cuntryPromise} />
      </Suspense>
    </div>
  );
};

export default AxiosMethod;
