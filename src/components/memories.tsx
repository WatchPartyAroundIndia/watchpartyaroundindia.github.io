import { FC } from "react";

interface MemoriesProps {}

const Memories: FC<MemoriesProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-coveredByYourGrace text-[#BDA6A6] text-4xl md:text-5xl text-center">
        Memories of 2024
      </h2>
    </div>
  );
};

export default Memories;
