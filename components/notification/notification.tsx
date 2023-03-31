import Link from "next/link";
import NotificationCard from "../notificationCard/notificationCard";
import { note } from "@/utils/function";
import { useQueryClient } from "react-query";

export default function Notification({
  notifications,
  url = "/notifications",
}: {
  notifications: note[];
  url?: string;
}) {
  const mark = notifications.map(({ _id }) => _id);
  const queryClient = useQueryClient();
  async function handleMarkAllRead() {
    const promises = mark.map(async (id) => {
      return (
        await fetch(`/api/getNotifications/?id=${id}`, {
          method: "PATCH",
        })
      ).json();
    });

    await Promise.all(promises);
    await queryClient.invalidateQueries("notifications");
  }
  return (
    <div className="absolute drop-shadow-sm overflow-hidden flex flex-col top-[120%] border-[1px]  rounded-2xl right-4   z-20 bg-white w-full max-w-md">
      <h1 className="  pt-5 pb-2 px-5 text-sm border-b-[1px] lg:text-xl">Notifications</h1>

      <div className="flex gap-4 w-full flex-col max-h-[60vh] overflow-y-auto">
        {notifications.map(({ message, title, createdAt, read }) => (
          <NotificationCard read={read} title={title} key={createdAt} message={message} />
        ))}
      </div>
      <div className="flex px-5 text-sm pt-5 lg:text-lg border-t-[1px] bg-white  items-center justify-between pb-2">
        <Link href={url}>See all notifications</Link>
        <button onClick={handleMarkAllRead} className="text-zinc-600">
          Mark all as read
        </button>
      </div>
    </div>
  );
}
