import { useLoaderData } from "react-router-dom";

const Loader = () => {
  const users = useLoaderData();
  console.log(users);

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
        User List
      </h2>

      {/* User Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4 sm:gap-5
        "
      >
        {users?.map((item) => (
          <div
            data-aos="fade-up"
            key={item?.id}
            className="
              shadow
              p-4 sm:p-5 md:p-6
              border border-gray-100
              rounded-2xl
              bg-gray-50
              "
          >
            <h4
              className="
                font-bold
                text-base sm:text-[17px] md:text-[18px]
                text-[#a37000]
                pb-1
              "
            >
              {item?.name}
            </h4>

            <p className="text-sm sm:text-base break-all">
              https://{item?.website}
            </p>

            <p className="py-1 text-sm sm:text-base">{item?.phone}</p>

            <p className="text-sm sm:text-base pb-1">{item?.email}</p>
            <p className="text-sm sm:text-base pb-1">{item?.company?.name}</p>
            <p className="text-sm sm:text-base pb-1">
              {item?.company?.bs} {item?.company?.catchPhrase}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
