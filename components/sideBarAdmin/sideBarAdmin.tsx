import Link from "next/link";
import { links, logout } from "./sideBarLinks";
import { useRouter } from "next/router";
export default function SideBarAdmin({
  openNav,
  handleOpen,
}: {
  openNav: boolean;
  handleOpen: () => void;
}) {
  const router = useRouter(); //TODO:change active
  return (
    <>
      <div
        style={{ width: openNav ? "210px" : "0px" }}
        className="flex flex-col h-full  lg:!w-[210px]  pt-24  flex-shrink-0 "
      ></div>
      <nav
        style={{
          width: openNav ? "210px" : "0px",
          padding: openNav ? "6rem 0.75rem" : "0px",
        }}
        className="flex lg:!px-3 flex-col h-screen gap-3 fixed top-0 lg:!pt-24 bg-white transition-all duration-300 overflow-hidden  lg:!w-[210px]"
      >
        {links.slice(0, 4).map(({ url, label, icon }, id) => (
          <Link
            onClick={handleOpen}
            style={{
              backgroundColor: id === 0 ? "#E6DFFC" : "transparent",
              color: id === 0 ? "#4220AE" : "#333342",
            }}
            className="flex w-full items-center gap-4 px-5 py-2 rounded-3xl"
            key={label}
            href={url}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
        <button className="flex w-full items-center text-[#333342] gap-4 px-5 py-2 rounded-3xl">
          {" "}
          {logout.icon}
          <span>{logout.label}</span>
        </button>
      </nav>
    </>
  );
}