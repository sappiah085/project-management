import Image from "next/image";
import Link from "next/link";
export default function NewsLetterCard({
  message,
  image,
  link,
}: {
  message: string;
  image: any;
  link: string;
}) {
  return (
    <div className="w-full h-[300px]   min-w-sm max-w-md flex-shrink-0  hover-element">
      <Link
        href={link}
        className="w-full h-full relative flex flex-col justify-end top-0 left-0 after:h-full after:absolute after:w-full after:bg-gradient-to-b  after:from-transparent after:via-transparent after:to-black hover:scale-[1.1] hover:z-[2]  hover:backdrop-blur-lg transition-all hover:outline hover:outline-4 hover:outline-offset-8 outline-black"
      >
        <Image
          className="w-full object-cover h-full absolute "
          src={image}
          alt={message.slice(0, 8)}
        />
        <h3 className="z-[1] text-white px-5 py-2 text-xl font-sora">
          {message}
        </h3>
      </Link>
    </div>
  );
}
