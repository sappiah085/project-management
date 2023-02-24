import Image from "next/image";
import Button from "../button/button";
import kid1 from "../../public/assets/kid1.png";
import kid2 from "../../public/assets/kid2.png";
import kid3 from "../../public/assets/kid3.png";
import kid4 from "../../public/assets/kid4.png";
import kid5 from "../../public/assets/kid5.png";
import kid6 from "../../public/assets/kid6.png";
import kid7 from "../../public/assets/kid7.png";
import kid8 from "../../public/assets/kid8.png";
export default function Enroll() {
  return (
    <div className="w-full flex flex-col gap-10 lg:grid grid-cols-12 lg:grid-rows-3 py-24 px-8 lg:gap-0">
      <span className="lg:row-start-2 lg:row-span-4 lg:col-start-5 lg:col-span-4 flex flex-col items-center gap-10">
        <h1 className="lg:text-3xl text-2xl font-bold font-sora">
          Enroll your ward to join over 3000+ successful students
        </h1>
        <Button link="/" label="Enroll your ward now" />
      </span>
      <Image
        className="w-[110px]  aspect-square hidden lg:inline-block rounded-[50%] row-start-2 col-start-2 row-span-2 col-span-2 -mt-9 hover:scale-125 transition-all"
        src={kid1}
        alt="student"
      />
      <Image
        className="w-[90px] aspect-square hidden lg:inline-block rounded-[50%] row-start-2 self-end col-start-3  row-span-1 col-span-1 mt-24 hover:scale-125 transition-all"
        src={kid2}
        alt="student"
      />
      <Image
        className="w-[90px] aspect-square  hidden lg:inline-block rounded-[50%] row-start-3 col-start-4 row-span-1 col-span-1 -mt-12 hover:scale-125 transition-all"
        src={kid3}
        alt="student"
      />
      <Image
        className="w-[110px] aspect-square hidden lg:inline-block rounded-[50%] row-start-3 col-start-5 row-span-2 col-span-2 mt-6 hover:scale-125 transition-all"
        src={kid4}
        alt="student"
      />

      <Image
        className="w-[110px]  aspect-square hidden lg:inline-block rounded-[50%] row-start-2 col-start-11 row-span-2 col-span-2 -mt-9 hover:scale-125 transition-all"
        src={kid5}
        alt="student"
      />
      <Image
        className="w-[90px] aspect-square hidden lg:inline-block rounded-[50%] row-start-2 self-end col-start-10  row-span-1 col-span-1 mt-24 hover:scale-125 transition-all"
        src={kid6}
        alt="student"
      />
      <Image
        className="w-[90px] aspect-square  hidden lg:inline-block rounded-[50%] row-start-3 col-start-9 row-span-1 col-span-1 -mt-12 hover:scale-125 transition-all"
        src={kid7}
        alt="student"
      />
      <Image
        className="w-[110px] aspect-square hidden lg:inline-block rounded-[50%] row-start-3 col-start-8 row-span-2 col-span-2 mt-6 hover:scale-125 transition-all"
        src={kid8}
        alt="student"
      />
    </div>
  );
}
