import Image from "next/image";
import hero from "../../public/assets/image.png";
export default function Hero() {
  return (
    <div className="h-screen w-full relative pt-9 left-0 top-0 flex flex-col gap-2 justify-center after:absolute after:w-full after:h-full after:bg-black/25 after:top-0 after:left-0">
      <Image
        className="w-full h-full object-cover absolute top-0 left-0 lg:pt-20"
        src={hero}
        alt="school boy"
      />
      <h1 className="z-[2] px-4 text-white font-sora text-3xl lg:text-5xl  font-bold md:w-[700px] lg:px-14">
        Join us on this exciting journey of discovery and become a hero in your
        own story.
      </h1>
      <div className="z-[2] flex items-center w-full px-4 gap-2 lg:px-14">
        {[1, 2, 3, 4].map((number) => (
          <button
            className="text-white text-2xl border-b-2 px-2 font-gilroy"
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
