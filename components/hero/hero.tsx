import Image from "next/image";
import hero from "../../public/assets/image.png";
import img2 from "../../public/assets/2.png";
import img3 from "../../public/assets/3.png";
import img4 from "../../public/assets/4.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const land: { label: string; image: any }[] = [
  {
    label:
      "Join us on this exciting journey of discovery and become a hero in your own story.",
    image: hero,
  },
  {
    label:
      "we strive to provide an excellent education that is grounded in innovation, creativity, and critical thinking.",
    image: img2,
  },

  {
    label:
      "We believe that every student has the potential to become a leader and make a positive impact.",
    image: img3,
  },
  {
    label:
      "A vibrant and inclusive community where students, teachers, and families come together.",
    image: img4,
  },
];
export default function Hero() {
  const [index, setIndex] = useState(0);
  const selected = land[index];
  const numberVariant = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0, y: 5 },
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (index < 3) {
        const newIndex = index + 1;
        setIndex(newIndex);
      } else {
        setIndex(0);
      }
    }, 7500);
    return () => {
      clearInterval(timer);
    };
  }, [index]);
  return (
    <div className="h-screen w-full relative pt-9 left-0 top-0 flex flex-col gap-2 justify-center after:absolute after:w-full after:h-full after:bg-black/25 after:top-0 after:left-0  after:-z-20 transition-all">
      <img
        className="w-full h-full -z-20 object-cover absolute top-0 left-0 lg:pt-20"
        src={selected.image.src}
        alt="school boy"
      />
      <motion.h1
        initial={{ opacity: 0, x: "-50px" }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="z-[2] px-4  text-white font-sora text-3xl lg:text-5xl  font-bold md:w-[700px] lg:px-14"
      >
        {selected.label}
      </motion.h1>
      <div className="z-[2] flex items-center w-full px-4 gap-2 lg:px-14">
        {[1, 2, 3, 4].map((number) => (
          <motion.button
            onClick={() => setIndex(number - 1)}
            custom={number}
            animate="visible"
            initial="hidden"
            variants={numberVariant}
            className={`text-white text-2xl border-b-2 px-2 font-gilroy ${
              number === index + 1 ? "font-bold border-b-4" : ""
            } `}
            key={number}
          >
            {number}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
