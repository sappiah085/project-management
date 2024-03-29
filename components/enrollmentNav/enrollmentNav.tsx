import { FiMenu } from "react-icons/fi";
import Notification from "../notification/notification";
import { MouseEvent, useState } from "react";
import LogoName from "../logo_name/logoName";
import { useUser } from "../protected/protect";
import { useQuery } from "react-query";
import { checkRead, note } from "@/utils/function";
import ClickOutside from "../common/clickOutside/clickoutside";

export default function EnrollmentNav({ handleOpen, showToggle = true, cookie }: any) {
  const [openNotification, setOpenNotification] = useState(false);

  const user = useUser();
  //query for notifications
  const { data } = useQuery<note[]>("notifications", () =>
    fetch("/api/getNotifications", {
      headers: {
        Cookie: cookie,
      },
    }).then((res) => res.json())
  );

  return (
    <header className="w-full bg-white z-[100] flex items-center p-3 px-5 sticky top-0">
      <nav className="flex items-center relative justify-end w-full  ">
        {showToggle && (
          <button
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              handleOpen();
            }}
            className="lg:hidden"
          >
            <FiMenu />
          </button>
        )}
        <span className="lg:flex items-center gap-2    p-2 px-3 rounded-3xl hidden  mx-auto">
          <LogoName />
        </span>
        <div className="flex gap-4 items-center ">
          {" "}
          <ClickOutside
            onclickOutside={() => {
              if (!openNotification) return;
              setOpenNotification(false);
            }}
          >
            <button
              onClick={() => setOpenNotification((pre) => !pre)}
              className="bg-zinc-300/10 h-[40px] w-[40px] flex justify-center items-center rounded-full"
            >
              <span className="relative">
                {!!checkRead(data || []) && (
                  <span className="rounded-full flex justify-center items-center text-sm  bg-red-500 absolute aspect-square text-white h-[20px] top-[-20px] right-[-28px]">
                    {checkRead(data || []) < 9
                      ? checkRead(data || [])
                      : checkRead(data || []) + "+"}
                  </span>
                )}
              </span>
              <svg
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.52339 19.6255C8.05547 20.2182 8.73855 20.5438 9.44732 20.5438H9.44835C10.1602 20.5438 10.8464 20.2182 11.3795 19.6245C11.665 19.3092 12.1519 19.2835 12.4673 19.568C12.7836 19.8525 12.8093 20.3405 12.5248 20.6558C11.6948 21.5772 10.6029 22.0846 9.44835 22.0846H9.44629C8.29481 22.0836 7.20496 21.5762 6.37807 20.6548C6.09354 20.3394 6.11922 19.8515 6.43559 19.568C6.75197 19.2824 7.23885 19.3081 7.52339 19.6255ZM9.49847 0C14.0643 0 17.1315 3.55614 17.1315 6.87705C17.1315 8.58527 17.566 9.30944 18.0272 10.0778C18.4833 10.8358 19 11.6966 19 13.3237C18.6415 17.4808 14.3016 17.8197 9.49847 17.8197C4.69532 17.8197 0.354409 17.4808 1.35962e-05 13.3894C-0.00305426 11.6966 0.513623 10.8358 0.969697 10.0778L1.1307 9.80676C1.52713 9.12543 1.86541 8.3843 1.86541 6.87705C1.86541 3.55614 4.9326 0 9.49847 0ZM9.49847 1.54079C5.90844 1.54079 3.4062 4.35324 3.4062 6.87705C3.4062 9.01258 2.81351 9.99971 2.28964 10.8708C1.86952 11.5703 1.53773 12.1229 1.53773 13.3237C1.70927 15.261 2.98813 16.2789 9.49847 16.2789C15.9729 16.2789 17.2918 15.2158 17.4623 13.2569C17.4592 12.1229 17.1274 11.5703 16.7073 10.8708C16.1834 9.99971 15.5907 9.01258 15.5907 6.87705C15.5907 4.35324 13.0885 1.54079 9.49847 1.54079Z"
                  fill="black"
                />
              </svg>
            </button>

            {openNotification && !!data?.length && <Notification notifications={data || []} />}
          </ClickOutside>
          <button className="h-[40px] font-bold text-white  rounded-full bg-blue-500 w-[40px] ">
            {user.user?.name.slice(0, 2).toLocaleUpperCase()}
          </button>
        </div>
      </nav>
    </header>
  );
}
