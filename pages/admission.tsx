import ImageIllus from "@/components/image/image";
import Head from "next/head";
import kid from "../public/assets/kid.webp";
import Input from "@/components/input/input";
import SubmitBtn from "@/components/submitButton/submitButton";
import Link from "next/link";
import LogoName from "@/components/logo_name/logoName";
import { useState } from "react";
import type { NextPageWithLayout } from "./_app";
import { url } from "@/utils/urls";
import { useRouter } from "next/router";
import Alert from "@/components/alert/alert";
import { isEmail, setInput, validateEmailInput } from "@/utils/function";
const Admission: NextPageWithLayout = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cPass: "",
    name: "",
  });
  const [open, setOpen] = useState({ status: "", message: "", open: false });
  const router = useRouter();
  const [spin, setSpin] = useState(false);
  async function onSubmit(e: any) {
    e.preventDefault();
    const { email, password, cPass, name } = values;
    if (
      !email.length ||
      !password.length ||
      !cPass.length ||
      !name.length ||
      !isEmail(email)
    ) {
      setOpen({
        status: "warning",
        message: "Please provide all details",
        open: true,
      });
      return;
    }
    setSpin(true);
    const data = await fetch(`${url.user}/sign-up`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setSpin(false);
    const dataFinal = await data.json();
    if (dataFinal?.status == "failed") {
      setOpen({ status: "warning", message: dataFinal.message, open: true });
      return;
    }
    setValues({
      email: "",
      password: "",
      cPass: "",
      name: "",
    });
    await router.push("/enrollment");
  }

  return (
    <>
      <Head>
        <title>Admission - enrollment</title>
      </Head>
      <main className="flex font-gilroy flex-wrap-reverse gap-6 p-5  min-h-screen overflow-x-hidden items-center max-w-7xl mx-auto w-full justify-around">
        {open.open && (
          <Alert
            message={open.message}
            color={open.status}
            setOpen={() => setOpen((pre) => ({ ...pre, open: !open.open }))}
          />
        )}
        <section className="flex h-full overflow-x-hidden  w-full max-w-sm flex-col gap-9">
          <LogoName />
          <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full ">
            <h2 className="font-semibold text-xl">
              Sign Up To Enroll Your Ward
            </h2>
            <h3>Welcome to our Online Admission Portal</h3>
            <Input
              placeholder="Nathan O"
              name="name"
              label="Full Name"
              type="text"
              value={values.name}
              onChange={(e: any) => setInput(e, "name", setValues)}
            />
            <Input
              placeholder="Enter email address"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              className={validateEmailInput(values.email)}
              onChange={(e: any) => setInput(e, "email", setValues)}
            />
            <Input
              placeholder=""
              name="password"
              label="Password"
              className="pr-6"
              value={values.password}
              type="password"
              onChange={(e: any) => setInput(e, "password", setValues)}
            />
            <Input
              placeholder=""
              name="cPassword"
              label="Confirm Password"
              value={values.cPass}
              type="password"
              className={
                values.cPass === values.password
                  ? "pr-6"
                  : "!border-red-300 pr-6"
              }
              onChange={(e: any) => setInput(e, "cPass", setValues)}
            />
            <SubmitBtn
              spin={spin}
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
          name="Mr. Nathan O, Parent"
          message="“ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”"
        />
      </main>
    </>
  );
};

Admission.getLayout = function getLayout(page) {
  return page;
};
export default Admission;
