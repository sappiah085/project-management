import Emergency from "@/components/emergencyInfo/emergency";
import EnrollmentLayout from "@/components/enrollmentLayout/enrollmentLayOut";
import ParentalInfo from "@/components/parentalInfo/parentalInfo";
import PersonalInfo from "@/components/personalInfo/personalnfo";
import PreviousSchool from "@/components/previousSchool/previousSchool";
import SubmitBtn from "@/components/submitButton/submitButton";
import { fetchData, getId, getSession } from "@/utils/function";
import { useState } from "react";
export default function Enrollment({ id, cookie }: { id: string; cookie: string }) {
  // state values
  const [active, setActive] = useState(0);
  const [PopUp, setPopUp] = useState(false);
  const [spin, setSpin] = useState(false);
  const [generalState, setGeneralState] = useState({ id });
  const [completed, setCompleted] = useState<number[]>([]);

  //submit form
  async function handleSubmit() {
    setSpin(true);
    await fetchData(`api/update/?id=${generalState.id}`, JSON.stringify({ unCompleted: false }), cookie, "PATCH");
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

  return (
    <>
      <EnrollmentLayout cookie={cookie} PopUp={PopUp} popupFunc={popupFunc} completed={completed} handleActive={handleActive} active={active}>
        <section className="w-[95%] flex flex-col justify-center px-3 lg:px-6 py-10  max-w-5xl rounded-xl bg-white mx-auto min-h-[85vh]">
          {active === 0 && (
            <PersonalInfo cookie={cookie} _id={generalState.id} handleChangeActive={handleChangeActive} setId={(val: string) => setGeneralState((pre) => ({ ...pre, id: val }))} />
          )}
          {active === 1 && <ParentalInfo cookie={cookie} handleChangeActive={handleChangeActive} _id={generalState.id} />}
          {active === 2 && <PreviousSchool cookie={cookie} _id={generalState.id} handleChangeActive={handleChangeActive} />}
          {active === 3 && <Emergency cookie={cookie} handleChangeActive={handleChangeActive} _id={generalState.id} />}
          {active === 4 && (
            <>
              <h1 className="font-bold text-xl">Application Preview</h1>
              <h2 className="mb-8">Please confirm that the information provided are correct.</h2>
              <PersonalInfo cookie={cookie} />
              <ParentalInfo cookie={cookie} _id={generalState.id} />
              <PreviousSchool cookie={cookie} _id={generalState.id} />
              <Emergency cookie={cookie} _id={generalState.id} />
            </>
          )}
          <div className="my-auto w-full gap-8 flex items-center">
            {active === 4 && <SubmitBtn spin={spin} onClick={handleSubmit} label="Submit" className="bg-[#582BE8] after:bg-[#582BE8]" />}
          </div>
        </section>
      </EnrollmentLayout>
    </>
  );
}

// serverside checking if user is logged in
export async function getServerSideProps(context: any) {
  const user = await getSession(context.req.headers.cookie || "");
  console.log(user);
  const id = await getId(context.req.headers.cookie || "");
  if (!user)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  return {
    props: {
      user: user,
      id: id,
      cookie: context.req.headers.cookie,
    },
  };
}
