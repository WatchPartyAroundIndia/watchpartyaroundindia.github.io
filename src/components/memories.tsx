import memoriesArrowLogo from "../assets/2025/memories-arrow.svg";
import memories01 from "../assets/2025/memories/01.png";
import memories02 from "../assets/2025/memories/02.png";
import memories03 from "../assets/2025/memories/03.png";
import memories04 from "../assets/2025/memories/04.png";
import memories05 from "../assets/2025/memories/05.jpg";
import memories06 from "../assets/2025/memories/06.jpg";
import memories07 from "../assets/2025/memories/07.jpeg";
import memories08 from "../assets/2025/memories/08.jpeg";
import memories09 from "../assets/2025/memories/09.jpeg";
import memories10 from "../assets/2025/memories/10.jpeg";
import memories11 from "../assets/2025/memories/11.jpg";
import memories12 from "../assets/2025/memories/12.jpg";
import memories13 from "../assets/2025/memories/13.jpg";
import memories14 from "../assets/2025/memories/14.jpeg";
import memories15 from "../assets/2025/memories/15.jpeg";
import memories16 from "../assets/2025/memories/16.jpg";
import memories17 from "../assets/2025/memories/17.jpg";
import memories18 from "../assets/2025/memories/18.jpg";
import memories19 from "../assets/2025/memories/19.jpg";
import memories20 from "../assets/2025/memories/20.jpg";
import memories21 from "../assets/2025/memories/21.jpg";
import memories22 from "../assets/2025/memories/22.jpg";
import memories23 from "../assets/2025/memories/23.jpg";
import memories24 from "../assets/2025/memories/24.jpg";
import memories25 from "../assets/2025/memories/25.jpeg";
import memories26 from "../assets/2025/memories/26.jpeg";
import memories27 from "../assets/2025/memories/27.jpeg";
import memories28 from "../assets/2025/memories/28.jpeg";
import memories29 from "../assets/2025/memories/29.jpeg";
import memories30 from "../assets/2025/memories/30.jpeg";
import memories31 from "../assets/2025/memories/31.jpeg";

const Memories = () => {
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
    {
      id: 8,
      imageSrc: memories08,
    },
    {
      id: 9,
      imageSrc: memories09,
    },
    {
      id: 10,
      imageSrc: memories10,
    },
    {
      id: 11,
      imageSrc: memories11,
    },
    {
      id: 12,
      imageSrc: memories12,
    },
    {
      id: 13,
      imageSrc: memories13,
    },
    {
      id: 14,
      imageSrc: memories14,
    },
    {
      id: 15,
      imageSrc: memories15,
    },
  ];

  const imagesRow2 = [
    {
      id: 16,
      imageSrc: memories16,
    },
    {
      id: 17,
      imageSrc: memories17,
    },
    {
      id: 18,
      imageSrc: memories18,
    },
    {
      id: 19,
      imageSrc: memories19,
    },
    {
      id: 20,
      imageSrc: memories20,
    },
    {
      id: 21,
      imageSrc: memories21,
    },
    {
      id: 22,
      imageSrc: memories22,
    },
    {
      id: 23,
      imageSrc: memories23,
    },
    {
      id: 24,
      imageSrc: memories24,
    },
    {
      id: 25,
      imageSrc: memories25,
    },
    {
      id: 26,
      imageSrc: memories26,
    },
    {
      id: 27,
      imageSrc: memories27,
    },
    {
      id: 28,
      imageSrc: memories28,
    },
    {
      id: 29,
      imageSrc: memories29,
    },
    {
      id: 30,
      imageSrc: memories30,
    },
    {
      id: 31,
      imageSrc: memories31,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-coveredByYourGrace text-[#BDA6A6] text-4xl md:text-5xl text-center">
        Memories of 2024
      </h2>
      <img
        loading="lazy"
        alt="Memories"
        src={memoriesArrowLogo}
        className="w-40 h-36 my-12"
      />
      <div
        aria-label="Scrolling event photos from 2024"
        className="relative overflow-x-hidden h-full w-full"
      >
        <div className="flex w-max animate-scroll-left">
          {[...imagesRow1, ...imagesRow1].map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 px-1 md:px-3 h-[200px] md:h-[400px] w-auto flex items-center"
            >
              <img
                loading="lazy"
                alt={`Memory ${image.id}`}
                src={image.imageSrc || "https://placehold.co/600x400"}
                className="rounded-xl shadow-lg h-full w-auto object-cover p-0 m-0"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-4" />
      <div
        aria-label="Scrolling event photos from 2024"
        className="relative overflow-x-hidden h-full w-full"
      >
        <div className="flex w-max animate-scroll-right">
          {[...imagesRow2, ...imagesRow2].map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 px-1 md:px-3 h-[200px] md:h-[400px] w-auto flex items-center"
            >
              <img
                loading="lazy"
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
