import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import SubmitBtn from "@/components/submitButton/submitButton";
import { AiOutlineDownload } from "react-icons/ai";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import PersonalInfo from "@/components/personalInfo/personalnfo";
import ParentalInfo from "@/components/parentalInfo/parentalInfo";
import PreviousSchool from "@/components/previousSchool/previousSchool";
import Emergency from "@/components/emergencyInfo/emergency";
import { dateFormat, fetchData, getSession } from "@/utils/function";
import { url } from "@/utils/urls";
import { useRouter } from "next/router";
export default function StudentInfo({
  id,
  cookie,
  student,
}: {
  cookie: string;
  id: string;
  student: any;
}) {
  const [spin, setSpin] = useState(false);
  const router = useRouter();
  async function handleClick(approved: string) {
    setSpin(true);
    await fetchData(`/api/update/?id=${id}`, JSON.stringify({ approved }), cookie);
    setSpin(false);
    router.push("/admin/admissions");
  }
  const {
    name: { surname, otherNames },
    DOB,
    ...el
  } = student;
  const date = dateFormat(DOB);
  const information: any = useRef(null);
  const handleGeneratePdf = async () => {
    const data = await html2canvas(information.current);
    const img = data.toDataURL("image/png");
    const pdf = new jsPDF("portrait", "mm", "a4");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.setFont("Gilroy-Medium", "normal");
    pdf.save("information.pdf");
  };

  return (
    <LayoutAdmin>
      <button
        onClick={handleGeneratePdf}
        className="border-[1px] bg-white z-20 border-black p-2 flex items-center gap-1 rounded-md absolute w-[180px] top-28 right-2"
      >
        <AiOutlineDownload />
        Export Information
      </button>
      <section className="relative flex flex-col w-full pb-32 px-3">
        <span className="flex flex-col w-full p-2" ref={information}>
          {/* personal information  */}
          <PersonalInfo data={{ ...el, otherNames, surname, DOB: date }} />
          {/* Parent and Guardian Information  */}
          <ParentalInfo _id={id} cookie={cookie} />

          {/* School information  */}
          <PreviousSchool _id={id} cookie={cookie} />

          {/* emergency numbers */}
          <Emergency _id={id} cookie={cookie} />
        </span>

        {/* buttons */}
        <div className="flex fixed bottom-0 z-10 bg-white/95 w-full lg:pl-52  items-center px-6 p-3 gap-9">
          <SubmitBtn
            spin={spin}
            onClick={() => handleClick("accepted")}
            className="bg-green-500 rounded-xl after:bg-green-500"
            label="Approve Admission"
          />
          <SubmitBtn
            spin={spin}
            onClick={() => handleClick("rejected")}
            className="bg-red-500  rounded-xl after:bg-red-500"
            label="Decline Admission"
          />
        </div>
      </section>
    </LayoutAdmin>
  );
}

export async function getServerSideProps(context: any) {
  const user = await getSession(context.req.headers.cookie);
  const student = await fetchData(
    `${url.student}/student-graphql`,
    JSON.stringify({
      query: `
      query{
      student(id:"${context.query.id}"){
      name{
        surname
        otherNames
      }
      appliedOn
      _id
      DOB
      class
      nationality
      religion
    }
    }
    `,
    }),
    context.req.headers.cookie || ""
  );
  if (!user || user.role === "user")
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  return {
    props: {
      cookie: context.req.headers.cookie || "",
      id: context.query.id,
      student: student.data.student,
    },
  };
}
