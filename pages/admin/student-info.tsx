import InformationParent from "@/components/information/information";
import Input from "@/components/input/input";
import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import SelectInput from "@/components/selectInput/selectInput";
import { AiOutlineDownload } from "react-icons/ai";
const levels = ["Class 2", "Class 1"];
export default function StudentInfo() {
  return (
    <LayoutAdmin>
      <button className="border-[1px] bg-white z-20 border-black p-2 flex items-center gap-1 rounded-md fixed w-[180px] top-28 right-2">
        <AiOutlineDownload />
        Export Information
      </button>
      <section className="relative flex flex-col w-full px-3">
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

        <InformationParent parent="Father's" />
        <InformationParent parent="Mother's" />
        <InformationParent parent="Guardian Information (Fill this if you are the guardian)" />
      </section>
    </LayoutAdmin>
  );
}
