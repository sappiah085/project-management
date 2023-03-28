import Emergency from "@/components/emergencyInfo/emergency";
import EnrollmentLayout from "@/components/enrollmentLayout/enrollmentLayOut";
import ParentalInfo from "@/components/parentalInfo/parentalInfo";
import PersonalInfo from "@/components/personalInfo/personalnfo";
import PreviousSchool from "@/components/previousSchool/previousSchool";
import { useUser } from "@/components/protected/protect";
import SubmitBtn from "@/components/submitButton/submitButton";
import { fetchData, getSession } from "@/utils/function";
import { url } from "@/utils/urls";
import { useState } from "react";
export default function Enrollment({
  id,
  cookie,
}: {
  id: string;
  cookie: string;
}) {
  const [active, setActive] = useState(0);
  const [PopUp, setPopUp] = useState(false);
  const [spin, setSpin] = useState(false);
  const [generalState, setGeneralState] = useState({ id });
  const [completed, setCompleted] = useState<number[]>([]);

  //submit form
  async function handleSubmit() {
    setSpin(true);
    await fetchData(
      `${url.student}/${generalState.id}`,
      JSON.stringify({ unCompleted: false }),
      cookie,
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

  //query student and set id

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
                cookie={cookie}
                _id={generalState.id}
                handleChangeActive={handleChangeActive}
                setId={(val: string) =>
                  setGeneralState((pre) => ({ ...pre, id: val }))
                }
              />
            )}
            {active === 1 && (
              <ParentalInfo
                cookie={cookie}
                handleChangeActive={handleChangeActive}
                _id={generalState.id}
              />
            )}
            {active === 2 && (
              <PreviousSchool
                cookie={cookie}
                _id={generalState.id}
                handleChangeActive={handleChangeActive}
              />
            )}
            {active === 3 && (
              <Emergency
                cookie={cookie}
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
                <PersonalInfo cookie={cookie} />
                <ParentalInfo cookie={cookie} _id={generalState.id} />
                <PreviousSchool cookie={cookie} _id={generalState.id} />
                <Emergency cookie={cookie} _id={generalState.id} />
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
export async function getServerSideProps(context: any) {
  const user = await getSession(context);
  const studentInfo = await fetchData(
    `${url.student}/student-graphql`,
    JSON.stringify({
      query: `
            query {
            studentUncompleted {
            _id
          }
        }
        `,
    }),
    context.req.headers.cookie
  );
  if (!user)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };

  let id = null;
  if (studentInfo?.data?.studentUncompleted) {
    const { _id } = studentInfo?.data?.studentUncompleted;
    id = _id;
  }
  return {
    props: {
      user: user,
      id: id,
      cookie: context.req.headers.cookie,
    },
  };
}
