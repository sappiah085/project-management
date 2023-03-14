import LogoName from "@/components/logo_name/logoName";
import Head from "next/head";
import Image from "next/image";
import admin from "../../public/assets/admin.webp";
import Input from "@/components/input/input";
import SubmitBtn from "@/components/submitButton/submitButton";
export default function AdminLogin() {
  return (
    <>
      <Head>
        <title>Admin login</title>
      </Head>
      <main className="font-gilroy w-full min-h-screen flex justify-center items-center">
        <form
          className="w-full px-3 py-5 max-w-md flex flex-col gap-3"
          action="/admin/admissions" //TODO:Admin link
        >
          <div className="flex flex-col items-center w-full gap-1">
            <Image
              className="h-[100px] w-fit"
              src={admin}
              alt="Admin image shield"
            />
            <LogoName />
          </div>
          <div className="flex flex-col items-center w-full gap-0">
            <h1 className="text-lg font-bold">Hi Admin,</h1>
            <h2 className="text-zinc-600">Welcome back.</h2>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Input
              label="Email"
              placeholder="Enter email address"
              type="email"
              name="email"
            />
            <Input
              label="Password"
              placeholder=" "
              type="password"
              name="password"
            />
          </div>
          <SubmitBtn
            label="Sign In"
            className="bg-[#582BE8] after:bg-[#582BE8] w-full justify-center rounded-md"
          />
        </form>
      </main>
    </>
  );
}
