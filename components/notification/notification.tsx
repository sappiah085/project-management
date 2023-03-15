import Link from "next/link";
import NotificationCard from "../notificationCard/notificationCard";

export default function Notification() {
  return (
    <div className="absolute drop-shadow-sm flex flex-col top-[100%] border-[1px] px-4  rounded-2xl right-4  gap-4 z-50 bg-white w-full max-w-md">
      <h1 className="font-bold pt-5 px-3 text-xl">Notifications</h1>

      <div className="flex gap-4 flex-col max-h-[70vh] overflow-y-auto">
        {[1, 2, 4, 6, 5].map((message) => (
          <NotificationCard
            key={message}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis aliquid dignissimos neque veritatis labore rerum doloribus animi a consequuntur, perferendis sapiente eos in? Doloribus, iusto veritatis tempore sint nobis libero! Ea laudantium ipsum placeat perferendis aspernatur laboriosam maiores mollitia provident deleniti ut, sed iure."
          />
        ))}
      </div>
      <div className="flex px-5 items-center justify-between pb-2">
        <Link href={"/admin/notifications"}>See all notifications</Link>
        <button className="text-zinc-600">Mark all as read</button>
      </div>
    </div>
  );
}
