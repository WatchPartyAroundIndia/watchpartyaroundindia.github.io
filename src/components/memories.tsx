import { FC } from "react";
import memoriesArrowLogo from "../assets/2025/memories-arrow.svg";
import memories01 from "../assets/2025/memories/01.png";
import memories02 from "../assets/2025/memories/02.png";
import memories03 from "../assets/2025/memories/03.jpg";
import memories04 from "../assets/2025/memories/04.png";
import memories05 from "../assets/2025/memories/05.png";
import memories06 from "../assets/2025/memories/06.png";
import memories07 from "../assets/2025/memories/07.png";

interface MemoriesProps {}

const Memories: FC<MemoriesProps> = () => {
  const imagesRow1 = [
    {
      id: 1,
      imageSrc: memories01,
    },
    {
      id: 2,
      imageSrc: memories02,
    },
    {
      id: 3,
      imageSrc: memories03,
    },
    {
      id: 4,
      imageSrc: memories04,
    },
  ];

  const imagesRow2 = [
    {
      id: 5,
      imageSrc: memories05,
    },
    {
      id: 6,
      imageSrc: memories06,
    },
    {
      id: 7,
      imageSrc: memories07,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-coveredByYourGrace text-[#BDA6A6] text-4xl md:text-5xl text-center">
        Memories of 2024
      </h2>
      <img src={memoriesArrowLogo} alt="Memories" className="w-40 h-36 my-12" />
      <div className="relative overflow-x-hidden h-full w-full">
        <div className="flex w-max animate-scroll-left">
          {[...imagesRow1, ...imagesRow1].map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 px-1 md:px-3 h-[200px] md:h-[400px] w-auto flex items-center"
            >
              <img
                src={image.imageSrc || "https://placehold.co/600x400"}
                alt={`Memory ${image.id}`}
                className="rounded-xl shadow-lg h-full w-auto object-cover p-0 m-0"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-8" />
      <div className="relative overflow-x-hidden h-full w-full">
        <div className="flex w-max animate-scroll-right">
          {[...imagesRow2, ...imagesRow2].map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 px-1 md:px-3 h-[200px] md:h-[400px] w-auto flex items-center"
            >
              <img
                src={image.imageSrc || "https://placehold.co/600x400"}
                alt={`Memory ${image.id}`}
                className="rounded-xl shadow-lg h-full w-auto object-cover p-0 m-0"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
};

export default Memories;
