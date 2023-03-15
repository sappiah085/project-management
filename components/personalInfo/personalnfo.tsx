import Input from "../input/input";
import SelectInput from "../selectInput/selectInput";
const levels = ["Class 2", "Class 1"];
export default function PersonalInfo() {
  return (
    <>
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
    </>
  );
}
