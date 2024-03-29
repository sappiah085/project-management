import { useEffect, useState } from "react";
import Input from "../input/input";
import { dateFormat, fetchData, setInput } from "@/utils/function";
import SubmitBtn from "../submitButton/submitButton";
import { url } from "@/utils/urls";

export default function PreviousSchool({
  handleChangeActive,
  _id,
  cookie = "",
}: {
  handleChangeActive?: any;
  _id?: string;
  cookie?: string;
}) {
  //state values
  const [spin, setSpin] = useState(false);
  const [values, setValues] = useState({
    schoolName: "",
    city: "",
    country: "",
    levelCompleted: "",
    reason: "",
    dateLeft: "",
  });
  //patch data
  async function onSubmit(e: any) {
    e.preventDefault();
    setSpin(true);
    await fetchData(
      `/api/update/?id=${_id}`,
      JSON.stringify({ previousSchool: values }),
      cookie,
      "PATCH"
    );
    setSpin(false);
    handleChangeActive();
  }
  //query previous school info
  useEffect(() => {
    if (!_id) return;
    const fetcher = async () => {
      const data = await fetchData(
        `/api/query-previous-school/?_id=${_id}`,
        JSON.stringify({}),
        cookie
      );
      if (!data?.data?.student?.previousSchool) return;
      const { dateLeft, ...dataSchool } = data?.data?.student?.previousSchool;
      setValues({ dateLeft: dateFormat(dateLeft), ...dataSchool });
    };
    fetcher();
  }, []);
  return (
    <>
      <form onSubmit={onSubmit}>
        {" "}
        <h1 className="font-bold  text-xl sticky top-16 z-10 bg-white py-2">
          Previous School Information
        </h1>
        <div className="w-full mb-4 pt-2 grid md:grid-cols-2 gap-5">
          <Input
            name="school-name"
            type="text"
            label="School Name"
            placeholder="Ashanti"
            value={values.schoolName}
            onChange={(e: any) => setInput(e, "schoolName", setValues)}
          />
          <Input
            name="city"
            type="text"
            label="City or Town"
            placeholder="Accra"
            value={values.city}
            onChange={(e: any) => setInput(e, "city", setValues)}
          />
          <Input
            name="country"
            type="text"
            label="Country"
            placeholder="Ghana"
            value={values.country}
            onChange={(e: any) => setInput(e, "country", setValues)}
          />
          <Input
            name="level-completed"
            type="text"
            label="Grade Level Completed"
            placeholder="class 3"
            value={values.levelCompleted}
            onChange={(e: any) => setInput(e, "levelCompleted", setValues)}
          />
          <div className={"w-full flex flex-col gap-1 "}>
            <label className="font-medium" htmlFor="reason">
              Reason for leaving
            </label>
            <textarea
              required
              value={values.reason}
              onChange={(e: any) => setInput(e, "reason", setValues)}
              className="outline-none w-full border-[1px] rounded-md border-zinc-300 p-2 bg-zinc-200/20 invalid:border-red-300 h-[200px] resize-none"
              id="reason"
              placeholder="Please write why your ward left here"
            ></textarea>
          </div>
          <Input
            name="date-left"
            type="date"
            label="Date Left"
            placeholder=""
            value={values.dateLeft}
            onChange={(e: any) => setInput(e, "dateLeft", setValues)}
          />
        </div>
        {handleChangeActive && (
          <div className="flex items-center gap-4">
            <SubmitBtn
              spin={spin}
              label="Save and Continue"
              className="bg-[#582BE8]  after:bg-[#582BE8] justify-center "
            />
          </div>
        )}
      </form>
    </>
  );
}
