import AdminNav from "@/components/adminNav/adminNav";
import SubmitBtn from "@/components/submitButton/submitButton";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import image from "../../../public/assets/news.webp";
import { IoIosArrowBack } from "react-icons/io";
import { GrClose } from "react-icons/gr";
export default function PostLetter() {
  const [PopUp, setPopUp] = useState(false);
  const editorRef: any = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <>
      <Head>Post a letter</Head>
      <main className="p-5 font-gilroy flex flex-col gap-4 min-h-screen">
        <AdminNav showToggle={false} />
        <div className="flex  pt-5  items-center w-full justify-between px-4">
          <Link href={"/admin/newsletters"} className="font-bold text-2xl">
            <IoIosArrowBack />
          </Link>

          <SubmitBtn
            onClick={() => setPopUp((pre) => !pre)}
            label="Continue"
            className="bg-[#582be8] after:bg-[#582be8]"
          />
        </div>
        <section className="w-full">
          {editorLoaded ? (
            <CKEditor
              type=""
              editor={ClassicEditor}
              // data={value}
              onChange={(event: any, editor: any) => {
                const data = editor.getData();
              }}
            />
          ) : (
            <div>Editor loading</div>
          )}
        </section>
        <div
          style={{
            height: PopUp ? "100vh" : "0",
            transform: PopUp ? "scale(1)" : "scale(0)",
            width: PopUp ? "100%" : "0",
          }}
          className="absolute px-3 top-0 left-0 bg-black/10 z-[500] h-screen w-full transition-[transform] ease-out duration-200 overflow-hidden  flex justify-center items-center"
        >
          <div className="bg-white lg:p-7 p-2 py-8 max-w-md rounded-[50px] flex flex-col gap-2 items-center relative">
            <button
              onClick={() => setPopUp((pre) => !pre)}
              className="absolute top-10 bg-zinc-600/10 p-2 rounded-full font-bold right-10"
            >
              <GrClose />
            </button>
            <Image
              className="h-[60px] object-contain"
              src={image}
              alt="news letter"
            />
            <h1 className="font-bold text-center lg:text-xl">
              Newsletter is Ready for publication
            </h1>
            <p className="text-sm  text-center">
              Hi Admin, The newsletter is all set and ready to be published. But
              before you hit that publish button, don{"'"}t forget to select who
              gets to see it. That way, we can make sure that the right people
              get the right information
            </p>
            <label className="flex items-center gap-2" htmlFor="website">
              <input type="checkbox" id="website" />
              Entire Website
            </label>
            <label className="flex items-center gap-2" htmlFor="sub">
              <input type="checkbox" id="sub" />
              Newsletter Subscribers
            </label>
            <SubmitBtn
              onClick={() => setPopUp((pre) => !pre)}
              label="Publish Now"
              className="bg-[#582BE8] after:bg-[#582BE8] justify-center w-2/3"
            />
          </div>
        </div>
      </main>
    </>
  );
}
