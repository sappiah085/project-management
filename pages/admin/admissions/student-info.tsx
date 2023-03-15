import InformationParent from "@/components/information/information";
import Input from "@/components/input/input";
import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import SelectInput from "@/components/selectInput/selectInput";
import SubmitBtn from "@/components/submitButton/submitButton";
import { AiOutlineDownload } from "react-icons/ai";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
const levels = ["Class 2", "Class 1"];
export default function StudentInfo() {
  const information: any = useRef(null);

  const handleGeneratePdf = async () => {
    const data = await html2canvas(information.current);
    const img = data.toDataURL("image/png");
    const pdf = new jsPDF("portrait", "pt", "a4");
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

          <h1 className="font-bold  text-xl sticky top-16 z-10 bg-white py-1">
            Personal Information
          </h1>
          <div className="w-full mb-4 pt-9 grid md:grid-cols-2 gap-5">
            <Input
              name="surname"
              type="text"
              label="Surname"
              placeholder="Asante"
            />
            <Input
              name="other-name"
              type="text"
              label="Other Names"
              placeholder="Gideon Ofori"
            />
            <Input
              name="Other Names"
              type="date"
              label="Date Of Birth "
              placeholder="12-06-2006"
            />
            <SelectInput label="Class or Level" months={levels} />
            <Input
              name="Nationality"
              type="text"
              label="Nationality"
              placeholder="Ghanaian"
            />
            <Input
              name="Religious Denomination"
              type="text"
              label="Religious Denomination"
              placeholder="Christianity"
            />
          </div>

          {/* Parent and Guardian Information  */}
          <InformationParent parent="Father's" />
          <InformationParent parent="Mother's" />
          <InformationParent parent="Guardian Information (Fill this if you are the guardian)" />

          {/* School information  */}
          <h1 className="font-bold  text-xl sticky top-16 z-10 bg-white py-2">
            Previous School Information
          </h1>
          <div className="w-full mb-4 pt-2 grid md:grid-cols-2 gap-5">
            <Input
              name="school-name"
              type="text"
              label="School Name"
              placeholder="Asante"
            />
            <Input
              name="city"
              type="text"
              label="City or Town"
              placeholder="Accra"
            />
            <Input
              name="country"
              type="text"
              label="Country"
              placeholder="Ghana"
            />
            <Input
              name="level-completed"
              type="text"
              label="Grade Level Completed"
              placeholder="class 3"
            />
            <div className={"w-full flex flex-col gap-1 "}>
              <label className="font-medium" htmlFor="reason">
                Reason for leaving
              </label>
              <textarea
                className="outline-none w-full border-[1px] rounded-md border-zinc-300 p-2 bg-zinc-200/20 invalid:border-red-300 h-[200px] resize-none"
                id="reason"
                placeholder="Please write why your ward left here"
              ></textarea>
            </div>
            <Input
              name="date-left"
              type="date"
              label="Date Left"
              placeholder=""
            />
          </div>

          {/* emergency numbers */}
          <h1 className="font-bold  text-xl top-16 sticky  z-10 bg-white py-1">
            Emergency Contact Information
          </h1>

          <div className="w-full mb-4 pt-2 grid md:grid-cols-2 gap-5">
            <Input
              name="name"
              type="text"
              label="Full Name"
              placeholder="Nathan Offei Asante"
            />
            <Input
              name="City or Town"
              type="text"
              label="City or Town"
              placeholder="Ghanaian"
            />
            <Input
              name="relationship"
              type="text"
              label="Relationship with Student"
              placeholder="Mother"
            />
            <Input
              name="alt-number"
              type="text"
              label="Alternate Phone Number"
              placeholder="+233594400980"
            />
            <Input
              name="number"
              type="text"
              label="Phone Number"
              placeholder="233594400980"
            />
            <Input
              name="email"
              type="email"
              label="E-mail address"
              placeholder="nanaosei@gmail.com"
            />
          </div>
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
