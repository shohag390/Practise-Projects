import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <RingLoader size={50} />
    </div>
  );
};

export default Loading;
