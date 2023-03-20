import { useEffect, useState } from "react";
import InformationParent from "../information/information";
import SubmitBtn from "../submitButton/submitButton";
import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";

export default function ParentalInfo({
  _id,
  handleChangeActive,
}: {
  _id: string;
  handleChangeActive?: any;
}) {
  const [spin, setSpin] = useState(false);
  const [value, setValue] = useState({
    father: { _id: undefined },
    mother: { _id: undefined },
    guardian: { _id: undefined },
  });
  function getValues(name: string, valueFromChild: any) {
    setValue((pre) => ({ ...pre, [name]: valueFromChild }));
  }
  async function onSubmit(e: any) {
    e.preventDefault();
    setSpin(true);
    const { _id: f, ...fatherData } = value.father;
    const { _id: m, ...motherData } = value.mother;
    const { _id: g, ...guardianData } = value.guardian;
    if (!f) {
      const father = await fetchData(
        `${url.parent}`,
        JSON.stringify(fatherData)
      );
      const mother = await fetchData(
        `${url.parent}`,
        JSON.stringify(motherData)
      );
      const guardian = await fetchData(
        `${url.parent}`,
        JSON.stringify(guardianData)
      );
      const student = await fetchData(
        `${url.student}/${_id}`,
        JSON.stringify({
          mother: mother.data._id,
          father: father.data._id,
          guardian: guardian.data._id,
        }),
        "PATCH"
      );
    } else {
      await fetchData(
        `${url.parent}/${f}`,
        JSON.stringify(value.father),
        "PATCH"
      );
      await fetchData(
        `${url.parent}/${m}`,
        JSON.stringify(value.mother),
        "PATCH"
      );
      await fetchData(
        `${url.parent}/${g}`,
        JSON.stringify(value.guardian),
        "PATCH"
      );
    }
    setSpin(false);
    handleChangeActive();
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="font-bold  text-xl sticky top-16 z-10 bg-white py-1">
          Personal Information
        </h1>
        <InformationParent
          _id={_id}
          name="father"
          getValue={(value: any) => getValues("father", value)}
          parent="Father's"
        />
        <InformationParent
          _id={_id}
          name="mother"
          getValue={(value: any) => getValues("mother", value)}
          parent="Mother's"
        />
        <InformationParent
          _id={_id}
          name="guardian"
          getValue={(value: any) => getValues("guardian", value)}
          parent="Guardian Information (Fill this if you are the guardian)"
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
