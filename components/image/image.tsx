import Image from "next/image";

export default function ImageIllus({ image, message, name }: any) {
  return (
    <div className="w-full hidden md:flex  max-w-lg  h-[70vh] relative  flex-col justify-end top-0 left-0 after:h-full after:absolute after:w-full after:bg-gradient-to-b  after:from-transparent after:via-transparent after:to-black hover:scale-[1.06] hover:z-[2]  hover:backdrop-blur-lg transition-all hover:outline hover:outline-4 hover:outline-offset-8 outline-black rounded-3xl overflow-hidden">
      <Image
        className="w-full object-cover h-full absolute "
        src={image}
        alt={message.slice(0, 8)}
      />
      <h3 className="z-[1] text-white px-6 py-2 lg:text-lg font-sora">
        {message}
      </h3>
      <h4 className="z-[1] text-white px-6 pb-5 text-sm font-sora">{name}</h4>
    </div>
  );
}
