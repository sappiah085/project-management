import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
export default function HeroCard({ image, label }: any) {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ duration: 0.5 });
      tl.fromTo(ref.current, { scale: 1.02 }, { scale: 1 });
      tl.fromTo(".label", { opacity: 0, y: 5 }, { opacity: 1, y: 0 });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <span
      ref={ref}
      className={`h-full w-full absolute pt-9 flex flex-col gap-2 justify-center after:absolute after:w-full after:h-full after:bg-black/25 after:top-0 after:left-0  after:-z-20 top-0 left-0 transition-all`}
    >
      <Image
        src={image}
        className="w-full  h-full -z-20 object-cover absolute top-0 left-0 lg:pt-20 img"
        alt={label}
      />
      <h1 className="z-[2] px-4  text-white font-sora text-3xl lg:text-5xl label  font-bold md:w-[700px] lg:px-14">
        {label}
      </h1>
    </span>
  );
}
