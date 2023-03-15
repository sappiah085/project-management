import Emergency from "@/components/emergencyInfo/emergency";
import EnrollmentLayout from "@/components/enrollmentLayout/enrollmentLayOut";
import ParentalInfo from "@/components/parentalInfo/parentalInfo";
import PersonalInfo from "@/components/personalInfo/personalnfo";
import PreviousSchool from "@/components/previousSchool/previousSchool";
import SubmitBtn from "@/components/submitButton/submitButton";
import { useState } from "react";
export default function Enrollment() {
  const [active, setActive] = useState(0);
  const [PopUp, setPopUp] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);
  function handleActive(index: number) {
    setActive(index);
  }
  function handleChangeActive() {
    const newIndex = active + 1;
    setCompleted([...completed, active]);
    setActive(newIndex);
  }
  function popupFunc() {
    setPopUp((pre) => !pre);
  }
  return (
    <EnrollmentLayout
      PopUp={PopUp}
      popupFunc={popupFunc}
      completed={completed}
      handleActive={handleActive}
      active={active}
    >
      <section className="w-full flex flex-col justify-center px-3 lg:px-6 py-10  max-w-5xl rounded-xl bg-white mx-auto min-h-[85vh]">
        {active === 0 && <PersonalInfo />}
        {active === 1 && <ParentalInfo />}
        {active === 2 && <PreviousSchool />}
        {active === 3 && <Emergency />}
        {active === 4 && (
          <>
            <h1 className="font-bold text-xl">Application Preview</h1>
            <h2 className="mb-8">
              Please confirm that the information provided are correct.
            </h2>
            <PersonalInfo />
            <ParentalInfo />
            <PreviousSchool />
            <Emergency />
          </>
        )}
        <div className="my-auto w-full gap-8 flex items-center">
          {active === 4 && (
            <SubmitBtn
              onClick={popupFunc}
              label="Submit"
              className="bg-[#582BE8] after:bg-[#582BE8]"
            />
          )}
          {active < 4 && (
            <>
              <SubmitBtn
                onClick={handleChangeActive}
                label="Save and Continue"
                className="bg-[#582BE8] after:bg-[#582BE8] justify-center "
              />
              <SubmitBtn
                onClick={handleChangeActive}
                label="Save and Exit"
                className="bg-white !text-black border-[1px] rounded-lg justify-center"
              />
            </>
          )}
        </div>
      </section>
    </EnrollmentLayout>
  );
}
