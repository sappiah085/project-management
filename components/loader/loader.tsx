import { useEffect, useRef } from "react";
import { TbLoader } from "react-icons/tb";
import { gsap } from "gsap";
export default function Loader() {
  const container = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ yoyo: true });
      tl.fromTo(
        container.current,
        { opacity: 0, duration: 2, scale: 0 },
        { opacity: 1, scale: 1 }
      );
      tl.from(".text-xl", { y: 20, opacity: 0, duration: 2 });
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={container}
      className="text-4xl flex-col gap-3 h-[100vh] flex justify-center font-gilroy items-center"
    >
      <span className="animate-spin">
        {" "}
        <TbLoader />
      </span>
      <h1 className="text-xl">Loading...</h1>
    </div>
  );
}
