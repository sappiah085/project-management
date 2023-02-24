import { motion } from "framer-motion";
export default function Numbers() {
  return (
    <div className="bg-[#006E90] w-full p-12 flex items-center justify-around flex-wrap gap-3 py-24">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="text-3xl text-white font-bold font-sora max-w-xs"
      >
        Join the winning school now
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex text-white flex-wrap gap-3"
      >
        <span className="flex flex-col items-center justify-center text-3xl text-white font-bold">
          3000+
          <span className="text-sm text-white font-normal">
            Enrolled Students
          </span>
        </span>
        <span className="flex flex-col items-center justify-center text-3xl text-white font-bold">
          30
          <span className="text-sm text-white font-normal">Staff</span>
        </span>
        <span className="flex flex-col items-center justify-center text-3xl text-white font-bold">
          10,000
          <span className="text-sm text-white font-normal">Global Alumini</span>
        </span>
      </motion.div>
    </div>
  );
}
