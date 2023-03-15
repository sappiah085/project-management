import InformationParent from "@/components/information/information";
import Input from "@/components/input/input";
import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import SelectInput from "@/components/selectInput/selectInput";
import SubmitBtn from "@/components/submitButton/submitButton";
import { AiOutlineDownload } from "react-icons/ai";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import PersonalInfo from "@/components/personalInfo/personalnfo";
import ParentalInfo from "@/components/parentalInfo/parentalInfo";
import PreviousSchool from "@/components/previousSchool/previousSchool";
import Emergency from "@/components/emergencyInfo/emergency";
const levels = ["Class 2", "Class 1"];
export default function StudentInfo() {
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
          <PersonalInfo />
          {/* Parent and Guardian Information  */}
          <ParentalInfo />

          {/* School information  */}
          <PreviousSchool />

          {/* emergency numbers */}
          <Emergency />
        </span>

        {/* buttons */}
        <div className="flex fixed bottom-0 z-10 bg-white/95 w-full lg:pl-52  items-center px-6 p-3 gap-9">
          <SubmitBtn
            className="bg-green-500 rounded-xl after:bg-green-500"
            label="Approve Admission"
          />
          <SubmitBtn
            className="bg-red-500  rounded-xl after:bg-red-500"
            label="Decline Admission"
          />
        </div>
      </section>
    </LayoutAdmin>
  );
}
