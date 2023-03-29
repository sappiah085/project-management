import { useState } from "react";
import EnrollmentNav from "../enrollmentNav/enrollmentNav";
import EnrollmentSideBar from "../enrollmentSideBar/enrollmentSideBar";
import SubmitBtn from "../submitButton/submitButton";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import image from "../../public/assets/success.webp";
export default function EnrollmentLayout({
  children,
  active,
  completed,
  PopUp,
  popupFunc,
  handleActive,
  cookie,
}: any) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <main
      style={{
        height: PopUp ? "100vh" : "inherit",
        overflow: PopUp ? "hidden" : "inherit",
      }}
      className={"flex  relative font-gilroy flex-col w-full "}
    >
      <EnrollmentNav handleOpen={() => setOpenNav((pre) => !pre)} />
      <div className="w-full flex justify-between items-start">
        <EnrollmentSideBar
          completed={completed}
          cookie={cookie}
          active={active}
          handleActive={handleActive}
          handleOpen={() => setOpenNav((pre) => !pre)}
          openNav={openNav}
        />

        <div className="flex bg-zinc-100  py-5 flex-grow ">{children}</div>
      </div>
      <div
        style={{
          height: PopUp ? "100vh" : "0",
          transform: PopUp ? "scale(1)" : "scale(0)",
          width: PopUp ? "100%" : "0px",
        }}
        className="absolute px-3 top-0 left-0 bg-black/10 z-[500] h-screen w-full transition-[transform] ease-out duration-200 overflow-hidden  flex justify-center items-center"
      >
        <div className="bg-white lg:p-7 p-2 py-8 max-w-md rounded-[50px] flex flex-col gap-2 items-center relative">
          <button
            onClick={() => popupFunc(true)}
            className="absolute top-10 bg-zinc-600/10 p-2 rounded-full font-bold right-10"
          >
            <GrClose />
          </button>
          <Image className="h-[60px] object-contain" src={image} alt="news letter" />
          <h1 className="font-bold text-center lg:text-xl">Application Successful</h1>
          <p className="text-sm  text-center">
            Dear parent or guardian, the application of your ward has been successfully received.
            Management will reach out to you shortly on the status of your application. You can
            equally visit here to check your status. Thank you!
          </p>
          <SubmitBtn
            onClick={() => popupFunc(true)}
            label="Back"
            className="bg-white !text-black border-[1px] rounded-lg justify-center w-1/3"
          />
        </div>
      </div>
    </main>
  );
}
