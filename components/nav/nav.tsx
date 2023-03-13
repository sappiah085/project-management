import Link from "next/link";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";

type link = {
  label: string;
  path: string;
};
const links: link[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Admission",
    path: "/enroll-child",
  },
  {
    label: "Newsletter",
    path: "/newsletter",
  },
];
export default function NavBar({ handleMenu }: { handleMenu: () => void }) {
  const { pathname } = useRouter();

  return (
    <header className="lg:fixed w-full z-10 flex flex-col justify-center">
      <nav className="h-full w-full flex flex-col gap-4 justify-center font-gilroy p-6  bg-white lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-xl italic font-bold z-10">
          deutscheinternationalschool
        </h1>
        <input
          type="checkbox"
          onChange={handleMenu}
          className="hidden peer"
          id="open"
        />
        <label
          htmlFor="open"
          className="inline-block fixed h-12 w-12 bg-white rounded-3xl drop-shadow-lg z-[100] top-5 right-4 after:absolute after:h-[.2rem] after:w-2/3 after:bg-zinc-400 after:top-[40%] after:left-[50%] after:translate-x-[-50%] after:rounded-md before:rounded-md before:absolute before:h-[.2rem] before:w-2/3 before:bg-zinc-400  before:top-[60%] before:left-[50%] before:translate-x-[-50%] peer-checked:after:rotate-[45deg] peer-checked:before:rotate-[-45deg] peer-checked:before:top-6 peer-checked:after:top-6 before:transition-all after:transition-all lg:hidden"
        ></label>
        <ul className="flex flex-col gap-4 w-full transition-[transform] items-center justify-center translate-x-[100%] p-0 opacity-0 overflow-hidden h-0 peer-checked:h-screen peer-checked:translate-x-0 peer-checked:p-9 duration-250 peer-checked:opacity-100 absolute top-0 bg-white left-0 lg:flex-row lg:translate-x-0 lg:h-full lg:opacity-100 lg:static lg:w-max lg:items-center lg:px-2">
          {links.map(({ label, path }) => (
            <li key={label}>
              <Link
                className={`text-xl inline-block relative p-2 link-style ${
                  pathname === path ? "black" : " text-zinc-500"
                }`}
                href={path}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="w-full lg:w-max">
            <label htmlFor="search" className="relative w-full">
              <span className="absolute text-xl top-0.5 left-2 -translate-y-0.5">
                <BiSearch />
              </span>
              <input
                className="w-full bg-zinc-400/40 p-2 pl-12 rounded-sm focus:outline-zinc-800 placeholder:text-zinc-900 lg:focus:bg-zinc-400/40 lg:bg-transparent lg:w-0 lg:focus:w-[100%] lg:focus:outline-none transition-all"
                id="search"
                type="text"
                placeholder="Search"
              />
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
