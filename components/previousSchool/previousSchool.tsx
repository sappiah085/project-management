import Input from "../input/input";

export default function PreviousSchool() {
  return (
    <>
      {" "}
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
        <Input name="country" type="text" label="Country" placeholder="Ghana" />
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
        <Input name="date-left" type="date" label="Date Left" placeholder="" />
      </div>
    </>
  );
}
