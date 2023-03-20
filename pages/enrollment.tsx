import Emergency from "@/components/emergencyInfo/emergency";
import EnrollmentLayout from "@/components/enrollmentLayout/enrollmentLayOut";
import ParentalInfo from "@/components/parentalInfo/parentalInfo";
import PersonalInfo from "@/components/personalInfo/personalnfo";
import PreviousSchool from "@/components/previousSchool/previousSchool";
import { useUser } from "@/components/protected/protect";
import SubmitBtn from "@/components/submitButton/submitButton";
import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Enrollment() {
  const [active, setActive] = useState(0);
  const [PopUp, setPopUp] = useState(false);
  const router = useRouter();
  const [spin, setSpin] = useState(false);
  const [generalState, setGeneralState] = useState({ id: "" });
  const [completed, setCompleted] = useState<number[]>([]);
  async function handleSubmit() {
    setSpin(true);
    const student = await fetchData(
      `${url.student}/${generalState.id}`,
      JSON.stringify({ unCompleted: false }),
      "PATCH"
    );
    setSpin(false);
    popupFunc();
  }
  //handleActive
  function handleActive(index: number) {
    setActive(index);
  }

  //handleChange
  function handleChangeActive() {
    const newIndex = active + 1;
    setCompleted([...completed, active]);
    setActive(newIndex);
  }

  //popup
  function popupFunc() {
    setPopUp((pre) => !pre);
  }
  const data = useUser();
  if (!data?.user) router.push("/login");
  return (
    <>
      {data.user && (
        <EnrollmentLayout
          PopUp={PopUp}
          popupFunc={popupFunc}
          completed={completed}
          handleActive={handleActive}
          active={active}
        >
          <section className="w-[95%] flex flex-col justify-center px-3 lg:px-6 py-10  max-w-5xl rounded-xl bg-white mx-auto min-h-[85vh]">
            {active === 0 && (
              <PersonalInfo
                _id={generalState.id}
                handleChangeActive={handleChangeActive}
                setId={(val: string) =>
                  setGeneralState((pre) => ({ ...pre, id: val }))
                }
              />
            )}
            {active === 1 && (
              <ParentalInfo
                handleChangeActive={handleChangeActive}
                _id={generalState.id}
              />
            )}
            {active === 2 && (
              <PreviousSchool
                _id={generalState.id}
                handleChangeActive={handleChangeActive}
              />
            )}
            {active === 3 && (
              <Emergency
                handleChangeActive={handleChangeActive}
                _id={generalState.id}
              />
            )}
            {active === 4 && (
              <>
                <h1 className="font-bold text-xl">Application Preview</h1>
                <h2 className="mb-8">
                  Please confirm that the information provided are correct.
                </h2>
                <PersonalInfo />
                <ParentalInfo _id={generalState.id} />
                <PreviousSchool _id={generalState.id} />
                <Emergency _id={generalState.id} />
              </>
            )}
            <div className="my-auto w-full gap-8 flex items-center">
              {active === 4 && (
                <SubmitBtn
                  spin={spin}
                  onClick={handleSubmit}
                  label="Submit"
                  className="bg-[#582BE8] after:bg-[#582BE8]"
                />
              )}
            </div>
          </section>
        </EnrollmentLayout>
      )}
    </>
  );
}
