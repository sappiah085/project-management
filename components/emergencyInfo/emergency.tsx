import Input from "../input/input";

export default function Emergency() {
  return (
    <>
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
    </>
  );
}
