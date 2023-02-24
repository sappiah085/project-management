import { motion } from "framer-motion";
export default function ReasonCard({
  icon,
  label,
  message,
  id,
}: {
  icon: string;
  label: string;
  message: string;
  id: number;
}) {
  const variant = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1,
      },
    }),
    hidden: { opacity: 0, y: 5 },
  };
  return (
    <motion.div
      variants={variant}
      whileInView="visible"
      initial="hidden"
      custom={id}
      className="w-full min-w-sm max-w-md flex-shrink-0 p-2 flex flex-col gap-4"
    >
      <span className="text-5xl bg-[#F2F6FE] h-20 w-20 p-5  flex justify-center items-center rounded-md">
        {icon}
      </span>
      <h3 className="text-2xl font-bold font-sora">{label}</h3>
      <p className="text-zinc-500 font-gilroy">{message}</p>
    </motion.div>
  );
}
