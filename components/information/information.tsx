import { useEffect, useState } from "react";
import Input from "../input/input";
import SelectInput from "../selectInput/selectInput";
import { fetchData, setInput, validateEmailInput } from "@/utils/function";
import { url } from "@/utils/urls";

export default function InformationParent({
  parent,
  name,
  cookie = "",
  getValue,
  _id,
}: {
  parent: string;
  name: string;
  _id?: string;
  cookie?: string;
  getValue: (arg: any) => void;
}) {
  const [value, setValue] = useState({
    education: "",
    religion: "",
    email: "",
    number: "",
    occupation: "",
    address: "",
    name: "",
    _id: "",
  });
  useEffect(() => {
    getValue(value);
  }, [value]);
  useEffect(() => {
    if (!_id) return;
    const fetcher = async () => {
      const body = JSON.stringify({
        query: `
      query { 
        student(id:"${_id}") {
          ${name} {
            _id,
            name,
            number,
            email,
            address,
            religion,
            occupation,
            education
          }
        }
      }
      `,
      });
      const data = await fetchData(
        `${url.student}/student-graphql`,
        body,
        cookie
      );
      if (!data?.data?.student) return;
      setValue(data.data.student[name]);
    };
    fetcher();
  }, []);
  return (
    <>
      {" "}
      <h2 className="font-semibold sticky text-sm lg:text-lg top-16  bg-white  py-1">
        {parent} Information
      </h2>
      <div className="w-full  mb-6 pt-9 grid md:grid-cols-2 gap-5">
        <Input
          name="Full Name"
          type="text"
          label="Full Name"
          value={value.name}
          onChange={(e: any) => {
            setInput(e, "name", setValue);
          }}
          placeholder="Nathan Asante"
        />
        <Input
          name="number"
          type="text"
          label="Phone Number"
          placeholder="+36208090899"
          value={value.number}
          onChange={(e: any) => {
            setInput(e, "number", setValue);
          }}
        />
        <Input
          name="Email Address"
          type="email"
          label="Email Address "
          placeholder="nanaosei@gmail.com"
          value={value.email}
          className={validateEmailInput(value.email)}
          onChange={(e: any) => {
            setInput(e, "email", setValue);
          }}
        />
        <Input
          name="Address"
          type="text"
          label="Address "
          placeholder="Medina"
          value={value.address}
          onChange={(e: any) => {
            setInput(e, "address", setValue);
          }}
        />
        <SelectInput
          setValue={(val: string) => {
            setValue((pre) => ({ ...pre, education: val }));
          }}
          value={value.education}
          label="Level of Education"
          months={["Military", "JHS", "Secondary", "Primary", "Tertiary"]}
        />
        <Input
          name="Occupation"
          type="text"
          label="Occupation"
          placeholder="Military"
          value={value.occupation}
          onChange={(e: any) => {
            setInput(e, "occupation", setValue);
          }}
        />
        <Input
          name="Religious Denomination"
          type="text"
          value={value.religion}
          onChange={(e: any) => {
            setInput(e, "religion", setValue);
          }}
          label="Religious Denomination"
          placeholder="Christianity"
        />
      </div>
    </>
  );
}
