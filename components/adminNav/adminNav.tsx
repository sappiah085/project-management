import Image from "next/image";
import Link from "next/link";
import user from "../../public/assets/woman.webp";
import { FiMenu } from "react-icons/fi";
import Notification from "../notification/notification";
import { useState } from "react";
import { useQuery } from "react-query";
import { checkRead, note } from "@/utils/function";
export default function AdminNav({ handleOpen, showToggle = true, cookie }: any) {
  const [openNotification, setOpenNotification] = useState(false);
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
          <button onClick={handleOpen} className="lg:hidden">
            <FiMenu />
          </button>
        )}
        <Link
          className="flex items-center gap-2 border-[1px] border-black  p-2 px-3 rounded-3xl mx-auto"
          href={"/"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.78174 13.1667C3.51301 14.4339 4.56516 15.4862 5.83232 16.2177C7.09948 16.9491 8.53695 17.3339 10.0001 17.3333C11.4632 17.3339 12.9007 16.9491 14.1678 16.2177C15.435 15.4862 16.4871 14.4339 17.2184 13.1667M2.78174 4.83334C3.51301 3.56607 4.56516 2.51377 5.83232 1.78232C7.09948 1.05087 8.53695 0.666079 10.0001 0.666672C11.4632 0.666079 12.9007 1.05087 14.1678 1.78232C15.435 2.51377 16.4871 3.56607 17.2184 4.83334"
              stroke="#333342"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8335 17.2917C10.8335 17.2917 12.0068 15.7475 12.746 13.1667M10.8335 0.708344C10.8335 0.708344 12.0068 2.25168 12.746 4.83334M9.16683 17.2917C9.16683 17.2917 7.9935 15.7483 7.25433 13.1667M9.16683 0.708344C9.16683 0.708344 7.9935 2.25168 7.25433 4.83334M7.50016 7.33334L8.75016 11.5L10.0002 7.33334L11.2502 11.5L12.5002 7.33334M0.833496 7.33334L2.0835 11.5L3.3335 7.33334L4.5835 11.5L5.8335 7.33334M14.1668 7.33334L15.4168 11.5L16.6668 7.33334L17.9168 11.5L19.1668 7.33334"
              stroke="#333342"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          Visit Website
        </Link>
        <div className="flex gap-4 items-center ">
          {" "}
          <button
            onClick={() => setOpenNotification((pre) => !pre)}
            className="bg-zinc-300/10 h-[40px] w-[40px] flex justify-center items-center rounded-full"
          >
            <span className="relative">
              {!!checkRead(data || []) && (
                <span className="rounded-full block h-[9px] w-[9px] bg-red-500 absolute top-[-10px] right-[-20px]">
                  {checkRead(data || []) < 9 ? checkRead(data || []) : checkRead(data || []) + "+"}
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
          {openNotification && !!data?.length && (
            <Notification url="/admin/notifications" notifications={data || []} />
          )}
          <button className="h-[40px] w-[40px] ">
            <Image className="w-full h-full rounded-full object-cover" src={user} alt="admin" />
          </button>
        </div>
      </nav>
    </header>
  );
}
