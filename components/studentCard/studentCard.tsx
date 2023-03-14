import Button from "../button/button";

export default function StudentCard({ name }: { name: string }) {
  return (
    <article className="w-[170px] lg:w-full max-w-[230px] border-[1.6px] p-2 rounded-xl flex flex-col gap-1 items-center">
      <h1 className="bg-purple-400 text-white font-semibold p-4 rounded-full">
        {name}
      </h1>
      <h1 className="font-bold text-sm md:text-lg">Nathan Ansong</h1>
      <h3 className="text-zinc-500 text-sm">Date:16th March,2023</h3>
      <Button
        className="bg-white !text-black border-[1.6px] !rounded-xl text-center hover:after:bg-black/20 !text-sm md:text-lg"
        label="View Application"
        link="/admin/admissions/student-info?id=3445"
      >
        <span></span>
      </Button>
    </article>
  );
}
