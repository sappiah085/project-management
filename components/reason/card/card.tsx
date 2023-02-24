export default function ReasonCard({
  icon,
  label,
  message,
}: {
  icon: string;
  label: string;
  message: string;
}) {
  return (
    <div className="w-full min-w-sm max-w-md flex-shrink-0 p-2 flex flex-col gap-4">
      <span className="text-5xl bg-[#F2F6FE] h-20 w-20 p-5 inline-block rounded-md">
        {icon}
      </span>
      <h3 className="text-2xl font-bold font-sora">{label}</h3>
      <p className="text-zinc-500 font-gilroy">{message}</p>
    </div>
  );
}
