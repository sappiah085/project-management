import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import NotificationCard from "@/components/notificationCard/notificationCard";
import { fetchData, getSession, note } from "@/utils/function";
import { url } from "@/utils/urls";

export default function Notifications({
  notifications,
  cookie,
}: {
  notifications: note[];
  cookie: string;
}) {
  return (
    <LayoutAdmin cookie={cookie}>
      <section className="flex max-w-3xl  gap-7 px-2 pb-3 flex-col">
        <h1 className="bg-white text-2xl  font-bold">Notifications</h1>
        <div className="flex flex-col gap-4">
          {notifications.map(({ message, createdAt, title, read }) => (
            <NotificationCard
              read={read}
              key={createdAt}
              slice={200}
              message={message}
              title={title}
            />
          ))}
        </div>
      </section>
    </LayoutAdmin>
  );
}

export async function getServerSideProps(context: any) {
  const user = await getSession(context.req.headers.cookie || "");
  const notifications = await fetchData(
    url.notification,
    undefined,
    context.req.headers.cookie || "",
    "GET"
  );
  if (!user || user.role === "user")
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  return {
    props: {
      cookie: context.req.headers.cookie || "",
      user,
      notifications,
    },
  };
}
