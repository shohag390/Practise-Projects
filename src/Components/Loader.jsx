import { useLoaderData } from "react-router-dom";

const Loader = () => {
  const users = useLoaderData();

  return (
    <div className="px-30 pb-10 bg-gray-200">
      <h2 className="text-[20px] font-medium py-5 text-gray-700">User List</h2>
      <div className="grid grid-cols-4 gap-5">
        {users?.map((item) => (
          <div
            data-aos="fade-up"
            className="shadow p-15 border-2 border-gray-100 rounded-2xl bg-gray-50 flex flex-col items-center justify-center"
            key={item?.id}
          >
            <h4 className="font-bold text-[18px] text-[#a37000] pb-0.5">
              {item?.name}
            </h4>
            <p>https://{item?.website}</p>
            <p className="py-1">{item?.phone}</p>
            <p>{item?.company?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
