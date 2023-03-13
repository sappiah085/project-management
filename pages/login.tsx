import ImageIllus from "@/components/image/image";
import Head from "next/head";
import woman from "../public/assets/woman.webp";
import Input from "@/components/input/input";
import SubmitBtn from "@/components/submitButton/submitButton";
import Link from "next/link";
export default function LogIn() {
  return (
    <>
      <Head>
        <title>Admission - enrollment</title>
      </Head>
      <main className="flex flex-wrap-reverse gap-6 p-5 font-gilroy min-h-screen items-center max-w-7xl mx-auto w-full justify-around">
        <section className="flex h-full w-full max-w-sm flex-col gap-9">
          <h1 className="text-xl italic font-bold z-10">
            deutscheinternationalschool
          </h1>
          <form className="flex flex-col gap-3 w-full" action="">
            <h2 className="font-semibold text-xl">Welcome Back</h2>
            <h3>Akwaaba! that’s our way of welcoming you back.</h3>
            <Input
              placeholder="Enter email address"
              name="email"
              label="Email"
              type="email"
            />
            <Input
              placeholder=""
              name="password"
              label="Password"
              className="pr-6"
              type="password"
            />
            <Link className="self-end" href={"/forgot-password"}>
              Forgot password?
            </Link>
            <SubmitBtn
              className="w-full bg-black after:bg-black justify-center"
              label="Sign In"
            />
            <p>
              Don’t have an account?{" "}
              <Link className="font-bold underline" href={"/admission"}>
                Sign Up
              </Link>
            </p>
          </form>
        </section>
        <ImageIllus
          image={woman}
          name="Mr. Nathan Offei Ansah, Parent"
          message="“ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”"
        />
      </main>
    </>
  );
}
