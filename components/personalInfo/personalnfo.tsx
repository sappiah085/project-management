import { useEffect, useState } from "react";
import Input from "../input/input";
import SelectInput from "../selectInput/selectInput";
import SubmitBtn from "../submitButton/submitButton";
import { dateFormat, fetchData, setInput } from "@/utils/function";
// levels
const levels = [
  "class 2",
  "Class 1",
  "class 3",
  "class 4",
  "class 5",
  "class 6",
  "JHS 1",
  "JHS 2",
  "JHS 3",
];
type info = {
  setId?: (arg: string) => void;
  handleChangeActive?: any;
  _id?: string;
  cookie?: string;
  data?: {
    surname: string;
    otherNames: string;
    DOB: string;
    class: string;
    nationality: string;
    religion: string;
  };
};
export default function PersonalInfo({ setId, _id, handleChangeActive, cookie = "", data }: info) {
  // state values
  const [value, setValues] = useState(
    data || {
      surname: "",
      otherNames: "",
      DOB: "",
      class: "",
      nationality: "",
      religion: "",
    }
  );
  const [spin, setSpin] = useState(false);

  //create student
  async function onSubmit(e: any) {
    e.preventDefault();
    setSpin(true);
    // body of api call
    const newStudent = JSON.stringify({
      name: {
        surname: value.surname,
        otherNames: value.otherNames,
      },
      DOB: value.DOB,
      class: value.class,
      nationality: value.nationality,
      religion: value.religion,
    });
    if (!_id) {
      //create new student
      const studentInfo = await fetchData("/api/create-student", newStudent, cookie);
      if (setId) setId(studentInfo.data.id);
    } else {
      await fetchData(`api/update/?id=${_id}`, newStudent, cookie, "PATCH");
    }
    setSpin(false);
    handleChangeActive();
  }

  //query student
  useEffect(() => {
    const fetcher = async () => {
      try {
        const studentInfo = await fetchData(`/api/query-student`, JSON.stringify({}), cookie);
        if (!studentInfo?.data?.studentUncompleted) return;
        const {
          name: { surname, otherNames },
          DOB,
          _id,
          ...el
        } = studentInfo?.data?.studentUncompleted;
        setValues({
          ...el,
          surname,
          DOB: dateFormat(DOB),
          otherNames,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, [cookie]);
  return (
    <>
      <h1 className="font-bold  text-xl sticky top-16 z-10 bg-white py-1">Personal Information</h1>
      <form onSubmit={onSubmit} className="w-full mb-4 pt-9 grid md:grid-cols-2 gap-5">
        <Input
          name="surname"
          type="text"
          label="Surname"
          placeholder="Kim"
          value={value.surname}
          onChange={(e: any) => setInput(e, "surname", setValues)}
        />

        <Input
          name="other-name"
          type="text"
          label="Other Names"
          placeholder="Gideon Ofori"
          value={value.otherNames}
          onChange={(e: any) => setInput(e, "otherNames", setValues)}
        />

        <Input
          name="DOB"
          type="date"
          label="Date Of Birth "
          value={value.DOB}
          onChange={(e: any) => setInput(e, "DOB", setValues)}
          placeholder="12-06-2006"
        />

        <SelectInput
          value={value.class}
          setValue={(val: string) => setValues((pre) => ({ ...pre, class: val }))}
          label="Class or Level"
          months={levels}
        />

        <Input
          name="Nationality"
          type="text"
          label="Nationality"
          value={value.nationality}
          onChange={(e: any) => setInput(e, "nationality", setValues)}
          placeholder="Ghanaian"
        />
        <Input
          name="Religious Denomination"
          type="text"
          label="Religious Denomination"
          placeholder="Christianity"
          value={value.religion}
          onChange={(e: any) => setInput(e, "religion", setValues)}
        />

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
