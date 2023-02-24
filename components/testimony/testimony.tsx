import Image from "next/image";
import man from "../../public/assets/man.png";
import { motion } from "framer-motion";
export default function Testimony() {
  return (
    <div className="bg-[#052326] flex items-center justify-center gap-5 w-full p-8 flex-wrap-reverse py-24">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col gap-3 text-white  w-full min-w-sm flex-shrink-0 max-w-3xl"
      >
        <h1 className="font-bold text-xl lg:text-4xl font-sora">
          “ We appreciate the school{"'"}s emphasis on diversity, equity, and
          inclusion. Our daughter has been exposed to a wide range of cultures
          and perspectives. ”
        </h1>
        <h5 className="text-md font-gilroy">Mr. Nathan Offei Ansah, Parent</h5>
      </motion.div>
      <Image src={man} alt="testifier " />
    </div>
  );
}
