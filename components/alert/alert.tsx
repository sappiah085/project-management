import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Alert({
  message,
  color,
  setOpen,
}: {
  message: string;
  color: string;
  setOpen: () => void;
}) {
  const container = useRef(null);
  const warn = color == "warning";

  //unmount alert
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen();
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  });

  //animate alert
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.current,
        { top: -20, opacity: 0.5, duration: 1 },
        { opacity: 1, top: "0.25rem" }
      );
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={container}
      className={`absolute top-1 font-semibold flex items-center justify-center w-[90%]  max-w-sm px-5 p-2 rounded-sm left-[50%] translate-x-[-50%] ${
        warn
          ? "bg-[#f8d7da] border-[1px] border-b-[#842029]/80 text-[#842029]"
          : "bg-[#d1e7dd] text-[#0f5132] border-[1px] border-b-[#0f5132]"
      }`}
    >
      <h1 className=" text-sm">{message}</h1>
    </div>
  );
}
