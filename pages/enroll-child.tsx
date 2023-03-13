import Head from "next/head";
import Image from "next/image";
import enroll from "../public/assets/enroll.webp";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import EnrollCard from "@/components/enrollCard/enrollCard";
import ImageIllus from "@/components/image/image";
const steps = [
  {
    url: "/",
    title: "Online Application",
    message:
      "Applying for admission has never been easier! Our online application process is fast, simple, and secure. With just a few clicks, you can complete your application and submit it to us in minutes. No more waiting in long lines or filling out endless forms by hand.",
    label: "Get Started Online",
    icon: <BsArrowRight />,
  },
  {
    url: "/",
    title: "Manual Application",
    message:
      "For those who prefer a more traditional approach, we offer a manual application process. Simply download and print the application form from our website, fill it out by hand, and submit it to us by mail or in person.",
    label: "Download form",
    icon: <BsDownload />,
  },
];
export default function EnrollChild() {
  return (
    <>
      <Head>
        <title>Enroll your child</title>
      </Head>
      <main className="font-gilroy flex justify-around max-w-[2500px] mx-auto min-h-screen items-center flex-wrap-reverse gap-9 p-4">
        <section className="flex-1 max-w-xl flex flex-col gap-5 ">
          <h1 className="text-xl lg:pl-20 font-semibold">
            Let’s Get You Started. Apply today to join a world of students doing
            amazing things
          </h1>
          {steps.map((el, id) => (
            <EnrollCard number={id + 1} {...el} key={el.label} />
          ))}
        </section>
        <ImageIllus
          image={enroll}
          name="Mr. Nathan Offei Ansah, Parent"
          message={
            "“ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”"
          }
        />
      </main>
    </>
  );
}
