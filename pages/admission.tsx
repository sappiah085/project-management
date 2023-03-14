import ImageIllus from "@/components/image/image";
import Head from "next/head";
import kid from "../public/assets/kid.webp";
import Input from "@/components/input/input";
import SubmitBtn from "@/components/submitButton/submitButton";
import Link from "next/link";
import LogoName from "@/components/logo_name/logoName";
export default function Admission() {
  return (
    <>
      <Head>
        <title>Admission - enrollment</title>
      </Head>
      <main className="flex font-gilroy flex-wrap-reverse gap-6 p-5  min-h-screen items-center max-w-7xl mx-auto w-full justify-around">
        <section className="flex h-full w-full max-w-sm flex-col gap-9">
          <LogoName />
          <form className="flex flex-col gap-3 w-full" action="">
            <h2 className="font-semibold text-xl">
              Sign Up To Enroll Your Ward
            </h2>
            <h3>Welcome to our Online Admission Portal</h3>
            <Input
              placeholder="Nathan Offei"
              name="name"
              label="Full Name"
              type="text"
            />
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
            <SubmitBtn
              className="w-full bg-black after:bg-black justify-center"
              label="Create an account"
            />
            <p>
              Already have an account?{" "}
              <Link className="font-bold" href={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </section>
        <ImageIllus
          image={kid}
          name="Mr. Nathan Offei Ansah, Parent"
          message="“ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”"
        />
      </main>
    </>
  );
}
