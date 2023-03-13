import Input from "@/components/input/input";
import SubmitBtn from "@/components/submitButton/submitButton";
import Head from "next/head";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <main className="flex min-h-screen font-gilroy flex-col w-full">
        <header className="w-full flex items-center">
          <nav className="w-full flex items-center p-4">
            <Link className="flex items-center gap-2 text-xl" href={"/login"}>
              <IoArrowBackOutline /> Back
            </Link>
          </nav>
        </header>
        <form
          className="w-full flex flex-col items-center gap-3 p-2 max-w-md m-auto"
          action=""
        >
          <h1 className="text-xl font-bold">Recover your password</h1>
          <p className="text-center mb-6">
            <span className="font-bold"> Enter the email </span> that you used
            when register to recover your password. You will receive a{" "}
            <span className="font-bold">password reset link.</span>
          </p>
          <Input
            label="Email"
            placeholder="Enter email address"
            name="email"
            type="email"
          />
          <SubmitBtn
            className="bg-black justify-center after:bg-black w-full rounded-lg"
            label="Send recovery link"
          />
          <p>
            If you need further assistance contact{" "}
            <span className="text-blue-800">our support team</span>
          </p>
        </form>
      </main>
    </>
  );
}
