import ImageIllus from "@/components/image/image";
import Head from "next/head";
import woman from "../public/assets/woman.webp";
import Input from "@/components/input/input";
import * as cookie from "cookie";
import SubmitBtn from "@/components/submitButton/submitButton";
import Link from "next/link";
import LogoName from "@/components/logo_name/logoName";
import { useUser } from "@/components/protected/protect";
import { useRouter } from "next/router";
import { useState } from "react";
import { isEmail, setInput, validateEmailInput } from "@/utils/function";
import Alert from "@/components/alert/alert";
import { getSession } from "@/utils/function";
export default function LogIn() {
  const { user } = useUser();
  const router = useRouter();
  const [spin, setSpin] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [open, setOpen] = useState({ status: "", message: "", open: false });
  async function onSubmit(e: any) {
    e.preventDefault();
    if (!isEmail(values.email)) {
      setOpen({
        message: "please provide valid email",
        status: "warning",
        open: true,
      });
      return;
    }
    setSpin(true);

    const data = await fetch(`/api/user`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const info = await data.json();
    setSpin(false);
    if (data.status === 400) {
      setOpen({
        message: info.message,
        status: "warning",
        open: true,
      });
      return;
    }
    router.reload();
  }
  return (
    <>
      <Head>
        <title>Admission - enrollment</title>
      </Head>
      {!user && (
        <main className="flex flex-wrap-reverse gap-6 p-5 font-gilroy min-h-screen items-center max-w-7xl mx-auto w-full justify-around">
          <section className="flex h-full w-full max-w-sm flex-col gap-9">
            {open.open && (
              <Alert
                color={open.status}
                message={open.message}
                setOpen={() => setOpen((pre) => ({ ...pre, open: false }))}
              />
            )}
            <LogoName />
            <form
              className="flex overflow-x-hidden px-2 flex-col gap-3 w-full"
              onSubmit={onSubmit}
            >
              <h2 className="font-semibold text-xl">Welcome Back</h2>
              <h3>Akwaaba! that’s our way of welcoming you back.</h3>
              <Input
                placeholder="Enter email address"
                name="email"
                label="Email"
                type="email"
                onChange={(e: any) => setInput(e, "email", setValues)}
                value={values.email}
                className={validateEmailInput(values.email)}
              />
              <Input
                placeholder=""
                name="password"
                label="Password"
                className="pr-6"
                type="password"
                value={values.password}
                onChange={(e: any) => setInput(e, "password", setValues)}
              />
              <Link className="self-end" href={"/forgot-password"}>
                Forgot password?
              </Link>
              <SubmitBtn
                spin={spin}
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
      )}
    </>
  );
}
export async function getServerSideProps(context: any) {
  const user = await getSession(context);
  if (user)
    return {
      redirect: {
        permanent: false,
        destination: "/enrollment",
      },
    };
  return {
    props: {}, // will be passed to the page component as props
  };
}
