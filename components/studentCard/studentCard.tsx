import { useEffect, useState } from "react";
import Button from "../button/button";
type studentProp = {
  name: string;
  otherNames: string;
  _id: string;
  appliedOn: string;
};
export default function StudentCard({ name, otherNames, _id, appliedOn }: studentProp) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date(parseInt(appliedOn)).toLocaleDateString());
  }, [appliedOn]);
  return (
    <article className="w-[170px] lg:w-full max-w-[230px] border-[1.6px] p-2 rounded-xl flex flex-col gap-1 items-center">
      <h1 className="bg-purple-400 text-white font-semibold  rounded-full text-xl h-[60px] w-[60px] flex justify-center items-center uppercase">
        {name.slice(0, 2)}
      </h1>
      <h1 className="font-bold text-sm md:text-lg">
        {name} {otherNames}
      </h1>
      <h3 className="text-zinc-500 text-sm">Date: {date}</h3>
      <Button
        className="bg-white !text-black border-[1.6px] !rounded-xl text-center hover:after:bg-black/20 !text-sm md:text-lg"
        label="View Application"
        link={`/admin/admissions/student-info?id=${_id}`}
      >
        <span></span>
      </Button>
    </article>
  );
}
