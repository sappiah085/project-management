
import EnrollmentNav from "@/components/enrollmentNav/enrollmentNav";

import NotificationCard from "@/components/notificationCard/notificationCard";
import { fetchData, getSession, note } from "@/utils/function";
import { url } from "@/utils/urls";

export default function Notifications({
  cookie,
  notifications,
}: {
  cookie: string;
  notifications: note[];
}) {
  return (
    <>
      <section className="flex max-w-3xl mx-auto  gap-7 px-2 pb-3 flex-col">
        <EnrollmentNav cookie={cookie} />
        <h1 className="bg-white text-2xl  font-bold">Notifications</h1>
        <div className="flex flex-col gap-4">
          {notifications.map(({ message, createdAt, title }) => (
            <NotificationCard key={createdAt} slice={200} message={message} title={title} />
          ))}
        </div>
      </section>
    </>
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
  if (!user)
    return {
      redirect: {
        destination: "/login",
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
