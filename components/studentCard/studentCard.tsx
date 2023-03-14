import Button from "../button/button";

export default function StudentCard({ name }: { name: string }) {
  return (
    <article className="w-[190px] lg:w-full max-w-[250px] border-[1.6px] p-2 rounded-xl flex flex-col gap-1 items-center">
      <h1 className="bg-purple-400 text-white font-semibold p-4 rounded-full">
        {name}
      </h1>
      <h1 className="font-bold">Nathan Ansong</h1>
      <h3 className="text-zinc-500"> Date: 16th March,2023</h3>
      <Button
        className="bg-white !text-black border-[1.6px] !rounded-xl hover:after:bg-black/20 !text-sm md:text-lg"
        label="View Application"
        link="/"
      >
        <span></span>
      </Button>
    </article>
  );
}
