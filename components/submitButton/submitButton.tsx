export default function SubmitBtn({
  className = " bg-black after:bg-black w-max",
  label,
  ...prop
}: any) {
  return (
    <button
      {...prop}
      className={
        "after:w-full z-[2] after:absolute relative after:h-full  after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100  after:scale-75 hover:after:scale-150 after:transition-all after:duration-700 text-white flex items-center gap-1 text-xl px-4 p-2 rounded-sm group " +
        className
      }
      type="submit"
    >
      {label}
    </button>
  );
}
