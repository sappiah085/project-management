import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
type prop = {
  link: string;
  label: string;
};
export default function Button({ link, label }: prop) {
  return (
    <Link
      className="w-max after:w-full z-[2] after:absolute relative after:h-full after:bg-black after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100 hover:after:scale-150 after:transition-all after:duration-700 bg-black text-white flex items-center gap-1 text-2xl p-3 rounded-md group"
      href={link}
    >
      {label}{" "}
      <span className="group-hover:translate-x-1 transition-all font-gilroy">
        <BsArrowRight />
      </span>
    </Link>
  );
}
