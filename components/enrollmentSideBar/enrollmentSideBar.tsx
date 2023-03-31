import { fetchData } from "@/utils/function";
import { logout } from "../sideBarAdmin/sideBarLinks";
import { useRouter } from "next/router";
import { SideBarProps } from "./interface";
import { FC, MouseEvent } from "react";
import ClickOutside from "../common/clickOutside/clickoutside";

const steps = [
  "Personal Information",
  "Parental Information",
  "Previous School",
  "Emergency Information",
  "Application Preview",
];

const EnrollmentSideBar: FC<SideBarProps> = ({
  openNav,
  active,
  handleOpen,
  handleActive,
  completed,
  cookie,
}) => {
  //router reference
  const router = useRouter();
  // check tab-color or progress
  function checkColors(id: number) {
    if (id === active) return { active: true, bg: "#582BE8", color: "white", completed: false };
    if (completed.includes(id))
      return { active: false, bg: "#0CBB52", color: "white", completed: true };
    return {
      active: false,
      bg: "rgb(212 212 216 / 0.6)",
      color: "black",
      completed: false,
    };
  }
  // sign out handler
  async function signOut(e: MouseEvent) {
    e.stopPropagation();
    await fetchData(`/api/logout`, JSON.stringify({ logout: true }), cookie);
    router.push("/login");
  }

  return (
    <>
      <ClickOutside onclickOutside={() => handleOpen(false)}>
        <div
          style={{ width: "0px" }}
          className="flex flex-col h-full  lg:!w-[290px]  pt-24  flex-shrink-0 "
        ></div>
        <nav
          style={{
            width: openNav ? "270px" : "0px",
            padding: openNav ? "6rem 0.75rem" : "0px",
          }}
          className="flex lg:!pr-3 flex-col h-screen gap-3 fixed top-0 lg:!pt-24 bg-white transition-all  duration-300 overflow-hidden  z-50 lg:!w-[290px]"
        >
          {steps.map((step, id) => (
            <button
              disabled={id > active}
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                handleActive(id);
                if (!openNav) return;
                handleOpen(false);
              }}
              className={`flex after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] relative disabled:opacity-70 after:h-full after:w-[5px]  items-center font-semibold w-full  gap-4 px-5 py-1 rounded-3xl  ${
                !checkColors(id).active ? "after:bg-transparent " : "after:bg-[#582BE8]"
              }`}
              key={step}
            >
              <span
                style={{
                  backgroundColor: checkColors(id).bg,
                  color: checkColors(id).color,
                }}
                className="text-lg h-[40px] flex justify-center items-center bg-zinc-300/60 font-bold p-1 aspect-square rounded-full"
              >
                {id + 1}
              </span>
              <span
                style={{ color: checkColors(id).completed ? "#0CBB52" : "black" }}
                className="flex-shrink-0"
              >
                {step}
              </span>
            </button>
          ))}
          <button
            onClick={signOut}
            className="flex my-auto mx-auto text-xl w-full items-center text-[#333342] gap-4 px-5 py-2 rounded-3xl"
          >
            {" "}
            {logout.icon}
            {<span>{logout.label}</span>}
          </button>
        </nav>
      </ClickOutside>
    </>
  );
};
export default EnrollmentSideBar;
