import Button from "../button/button";

type props = {
  children: any;
  title: string;
  label: string;
  subtitle: string;
  back?: string;
};
export default function ItemParentComp({
  children,
  title,
  subtitle,
  label,
  back,
}: props) {
  return (
    <div
      className={`w-full flex flex-col gap-4 items-center px-5 py-14 ${back}`}
    >
      <h2 className="text-2xl font-bold font-sora text-center">{title}</h2>
      <h5 className="text-center text-zinc-500 text-xl mb-16">{subtitle}</h5>
      <div className="flex justify-center items-center flex-wrap gap-5 mb-8 w-full parent-element">
        {children}
      </div>
      <Button link="/" label={label} />
    </div>
  );
}
