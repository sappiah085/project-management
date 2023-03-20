import { TbLoader } from "react-icons/tb";

export default function SubmitBtn({
  className = " bg-black after:bg-black w-max",
  label,
  spin,
  ...prop
}: any) {
  return (
    <button
      {...prop}
      className={
        `after:w-full z-[2] after:absolute relative after:h-full  after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100  after:scale-75 hover:after:scale-150 after:transition-all after:duration-700 text-white flex items-center gap-1 lg:text-xl px-4  p-2 h-12 rounded-sm group ` +
        className
      }
      disabled={spin}
      type="submit"
    >
      <span className={`${!spin ? "inline-block transition-all" : "hidden"}`}>
        {label}
      </span>

      <span className={`animate-spin ${spin ? "inline-block" : "hidden"}`}>
        {" "}
        <TbLoader />
      </span>
    </button>
  );
}
