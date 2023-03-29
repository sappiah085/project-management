import { useEffect, useState } from "react";
import Input from "../input/input";
import SubmitBtn from "../submitButton/submitButton";
import { fetchData, setInput } from "@/utils/function";
import { url } from "@/utils/urls";
type props = { _id?: string; handleChangeActive?: any; cookie?: string };
export default function Emergency({ _id, handleChangeActive, cookie = "" }: props) {
  // state values
  const [spin, setSpin] = useState(false);
  const [values, setValues] = useState({
    relationship: "",
    name: "",
    city: "",
    phoneNumber: "",
    altPhoneNumber: "",
    email: "",
  });
  // update handler
  async function onSubmit(e: any) {
    e.preventDefault();
    setSpin(true);
    await fetchData(
      `/api/update/?id=${_id}`,
      JSON.stringify({ emergency: values }),
      cookie,
      "PATCH"
    );
    setSpin(false);
    handleChangeActive();
  }

  // query for emergency
  useEffect(() => {
    if (!_id) return;
    const fetcher = async () => {
      const data = await fetchData(`/api/emergency/?id=${_id}`, "", cookie);
      if (!data?.data?.student?.emergency) return;
      setValues(data?.data?.student?.emergency);
    };
    fetcher();
  }, [cookie]);
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="font-bold  text-xl top-16 sticky  z-10 bg-white py-1">
          Emergency Contact Information
        </h1>

        <div className="w-full mb-4 pt-2 grid md:grid-cols-2 gap-5">
          <Input
            name="name"
            type="text"
            label="Full Name"
            placeholder="Nathan Offei Asante"
            value={values.name}
            onChange={(e: any) => setInput(e, "name", setValues)}
          />
          <Input
            name="City or Town"
            type="text"
            label="City or Town"
            placeholder="Ghanaian"
            value={values.city}
            onChange={(e: any) => setInput(e, "city", setValues)}
          />
          <Input
            name="relationship"
            type="text"
            label="Relationship with Student"
            placeholder="Mother"
            value={values.relationship}
            onChange={(e: any) => setInput(e, "relationship", setValues)}
          />
          <Input
            name="alt-number"
            type="text"
            label="Alternate Phone Number"
            placeholder="+233594400980"
            value={values.altPhoneNumber}
            onChange={(e: any) => setInput(e, "altPhoneNumber", setValues)}
          />
          <Input
            name="number"
            type="text"
            label="Phone Number"
            placeholder="233594400980"
            value={values.phoneNumber}
            onChange={(e: any) => setInput(e, "phoneNumber", setValues)}
          />
          <Input
            name="email"
            type="email"
            label="E-mail address"
            placeholder="nanaosei@gmail.com"
            value={values.email}
            onChange={(e: any) => setInput(e, "email", setValues)}
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
