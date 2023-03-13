import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
type prop = {
  link: string;
  label: string;
  children?: any;
  className?: string;
};
export default function Button({
  link,
  label,
  children,
  className = " bg-black after:bg-black w-max",
}: prop) {
  return (
    <Link
      className={
        "after:w-full z-[2] after:absolute relative after:h-full  after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100  after:scale-75 hover:after:scale-150 after:transition-all after:duration-700 text-white flex items-center gap-1 text-xl px-4 p-2 rounded-sm group " +
        className
      }
      href={link}
    >
      {label}{" "}
      <span className="group-hover:translate-x-1 transition-all font-gilroy pl-2">
        {"    "}
        {children || <BsArrowRight />}
      </span>
    </Link>
  );
}
