import Button from "../button/button";

export default function EnrollCard({
  number,
  title,
  message,
  icon,
  label,
  url,
}: any) {
  return (
    <article className="flex items-start gap-4 w-full">
      <h2 className="flex-shrink-0 h-[70px] w-[70px]  justify-center items-center text-3xl rounded-full  text-center bg-zinc-300/40 font-extrabold hidden md:flex">
        {number}
      </h2>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-[#333342]">{title}</h2>
        <p className="font-normal font-gilroy">{message}</p>
        <Button
          className="bg-[#582BE8] justify-center rounded-lg after:bg-[#582BE8] w-full lg:w-fit"
          link={url}
          label={label}
        >
          {icon}
        </Button>
      </div>
    </article>
  );
}
