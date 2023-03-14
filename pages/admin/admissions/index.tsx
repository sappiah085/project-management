import Input from "@/components/input/input";
import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import SelectInput from "@/components/selectInput/selectInput";
import StudentCard from "@/components/studentCard/studentCard";
import TabLike from "@/components/tabLike/tabLike";
import Head from "next/head";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
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

export default function AdminDashboard() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <LayoutAdmin>
        <section className="flex w-full flex-col gap-2 p-2">
          <h1 className="text-xl font-bold">Admission</h1>
          <div className="w-full flex items-center gap-5">
            {["Pending Approval", "Approved", "Declined"].map((label, id) => (
              <TabLike
                handleClick={() => setActive(id)}
                active={active === id}
                key={label}
                label={label}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 sticky top-16 z-30 bg-white py-1">
            <SelectInput months={months} />
            <span className="flex items-center relative">
              <span className="absolute top-[50%] -translate-y-[50%] left-3 inline-block">
                <FiSearch />
              </span>
              <Input
                type="text"
                placeholder="Search"
                name="search"
                className="pl-11"
              />
            </span>
          </div>
          <div className="w-full items-center justify-center flex flex-wrap gap-2 ">
            {new Array(70).fill("NA").map((student, key) => (
              <StudentCard name={student} key={key} />
            ))}
          </div>
        </section>
      </LayoutAdmin>
    </>
  );
}
