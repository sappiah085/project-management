import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import NotificationCard from "@/components/notificationCard/notificationCard";

export default function Notifications() {
  return (
    <LayoutAdmin>
      <section className="flex max-w-3xl  gap-7 px-2 pb-3 flex-col">
        <h1 className="bg-white text-2xl  font-bold">
          Notifications
        </h1>
        <div className="flex flex-col gap-4">
          {new Array(20).fill(0).map((message, id) => (
            <NotificationCard
              key={id}
              slice={200}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis aliquid dignissimos neque veritatis labore rerum doloribus animi a consequuntur, perferendis sapiente eos in? Doloribus, iusto veritatis tempore sint nobis libero! Ea laudantium ipsum placeat perferendis aspernatur laboriosam maiores mollitia provident deleniti ut, sed iure."
            />
          ))}
        </div>
      </section>
    </LayoutAdmin>
  );
}
