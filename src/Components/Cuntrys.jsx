import React, { use } from "react";

const Cuntrys = ({ cuntryPromise }) => {
  const cuntryData = use(cuntryPromise);
  const cuntrys = cuntryData.data;
  console.log(cuntrys);

  return (
    <div className="grid grid-cols-5 gap-5">
      {cuntrys?.map((item, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="shadow p-2 border-2 border-gray-100 rounded-2xl bg-gray-50 flex flex-col items-center"
        >
          <img
            className="h-40 w-full rounded-md border-2 border-gray-100"
            src={item?.flags?.png}
            alt=""
          />
          <h4 className="font-bold text-[18px] text-[#a37000] line-clamp-1 pt-0.5">
            {item?.name?.common}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Cuntrys;
