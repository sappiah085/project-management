/* eslint-disable @next/next/no-img-element */
import hero from "../../public/assets/image.png";
import img2 from "../../public/assets/2.png";
import img3 from "../../public/assets/3.webp";
import img4 from "../../public/assets/4.png";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroCard from "../heroCard/heroCard";

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
    <div className="h-screen w-full relative flex flex-col justify-center overflow-hidden ">
      {land.map(({ image, label }, id) => {
        return (
          <span key={label}>
            {id == index && <HeroCard image={image} label={label} />}
          </span>
        );
      })}
      <div className="z-[2] flex items-center w-full px-4 gap-2 lg:px-14 mt-96">
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
