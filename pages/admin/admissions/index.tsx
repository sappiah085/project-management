import Input from "@/components/input/input";
import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import SelectInput from "@/components/selectInput/selectInput";
import StudentCard from "@/components/studentCard/studentCard";
import TabLike from "@/components/tabLike/tabLike";
import { fetchData, getSession } from "@/utils/function";
import { url } from "@/utils/urls";
import Head from "next/head";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TbLoader } from "react-icons/tb";
const months = [
  "Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
type student = {
  name: {
    surname: string;
    otherNames: string;
  };
  _id: string;
  appliedOn: string;
};

export default function AdminDashboard({
  cookie,
  students,
}: {
  cookie: string;
  students: student[];
}) {
  const [active, setActive] = useState(0);
  const [load, setLoad] = useState(false);
  const [studentArray, setStudents] = useState<student[]>(students);
  async function handleChangTab(id: number) {
    setLoad(true);
    setActive(id);
    if (id === 0) {
      const data = await fetchData(
        "/api/admin/query",
        JSON.stringify({
          query: `
      query{
      pendingApproval{
      name{
        surname
        otherNames
      }
      appliedOn
      _id
    }
    }
    `,
        }),
        cookie
      );
      setStudents(data?.data?.pendingApproval);
    } else if (id === 1) {
      const data = await fetchData(
        "/api/admin/query",
        JSON.stringify({
          query: `
      query{
      accepted{
      name{
        surname
        otherNames
      }
      appliedOn
      _id
    }
    }
    `,
        }),
        cookie
      );
      setStudents(data?.data?.accepted);
    } else {
      const data = await fetchData(
        "/api/admin/query",
        JSON.stringify({
          query: `
      query{
      rejected{
      name{
        surname
        otherNames
      }
      appliedOn
      _id
    }
    }
    `,
        }),
        cookie
      );
      setStudents(data?.data?.rejected);
    }
    setLoad(false);
  }
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <LayoutAdmin cookie={cookie}>
        <section className="flex w-full flex-col gap-2 p-2">
          <h1 className="text-xl font-bold">Admission</h1>
          <div className="w-full flex items-center gap-5">
            {["Pending Approval", "Approved", "Declined"].map((label, id) => (
              <TabLike
                handleClick={() => handleChangTab(id)}
                active={active === id}
                key={label}
                label={label}
              />
            ))}
          </div>
          <div className="flex items-center  gap-4 sticky top-16 z-30 bg-white py-1">
            <SelectInput months={months} />
            <span className="flex items-center relative">
              <span className="absolute top-[50%] -translate-y-[50%] left-3 inline-block">
                <FiSearch />
              </span>
              <Input type="text" placeholder="Search" name="search" className="pl-11" />
            </span>
          </div>
          <div className="w-full items-center justify-center sm:justify-start flex flex-wrap gap-2 ">
            {load && (
              <span className="animate-spin text-3xl m-auto">
                {" "}
                <TbLoader />
              </span>
            )}
            {!load &&
              studentArray.map(({ _id, name: { surname, otherNames }, appliedOn }) => (
                <StudentCard
                  otherNames={otherNames}
                  appliedOn={appliedOn}
                  _id={_id}
                  name={surname}
                  key={_id}
                />
              ))}
          </div>
        </section>
      </LayoutAdmin>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const user = await getSession(context.req.headers.cookie);
  const students = await fetchData(
    `${url.student}/student-graphql`,
    JSON.stringify({
      query: `
      query{
      pendingApproval{
      name{
        surname
        otherNames
      }
      appliedOn
      _id
    }
    }
    `,
    }),
    context.req.headers.cookie || ""
  );

  if (!user)
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  return {
    props: {
      cookie: context.req.headers.cookie,
      user: user,
      students: students?.data?.pendingApproval || [],
    },
  };
}
