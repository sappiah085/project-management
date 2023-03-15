import Input from "../input/input";
import SelectInput from "../selectInput/selectInput";

export default function InformationParent({ parent }: { parent: string }) {
  return (
    <>
      {" "}
      <h2 className="font-semibold sticky text-sm lg:text-lg top-16 z-10 bg-white py-1">
        {parent} Information
      </h2>
      <div className="w-full  mb-6 pt-9 grid md:grid-cols-2 gap-5">
        <Input
          name="Full Name"
          type="text"
          label="Full Name"
          placeholder="Nathan Asante"
        />
        <Input
          name="number"
          type="text"
          label="Phone Number"
          placeholder="+36208090899"
        />
        <Input
          name="Email Address"
          type="email"
          label="Email Address "
          placeholder="nanaosei@gmail.com"
        />
        <Input
          name="Address"
          type="text"
          label="Address "
          placeholder="Medina"
        />
        <SelectInput label="Level of Education" months={["Military"]} />
        <Input
          name="Occupation"
          type="text"
          label="Occupation"
          placeholder="Military"
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
