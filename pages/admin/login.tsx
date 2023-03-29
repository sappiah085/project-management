import LogoName from "@/components/logo_name/logoName";
import Head from "next/head";
import Image from "next/image";
import admin from "../../public/assets/admin.webp";
import Input from "@/components/input/input";
import SubmitBtn from "@/components/submitButton/submitButton";
import { getSession, isEmail, validateEmailInput } from "@/utils/function";
import { FormEvent, useState } from "react";
import Alert from "@/components/alert/alert";
import { useRouter } from "next/router";
type stateValues = {
  email: string;
  password: string;
};
export default function AdminLogin() {
  //router instance
  const router = useRouter();
  // state
  const [spin, setSpin] = useState(false);
  const [alert, setAlert] = useState({ open: false, status: "", message: "" });
  const [values, setValues] = useState<stateValues>({ email: "", password: "" });
  //submit
  async function submit(e: FormEvent) {
    e.preventDefault();
    setSpin(true);
    if (!isEmail(values.email)) {
      setAlert({
        message: "please provide valid email",
        status: "warning",
        open: true,
      });
      return;
    }
    const api = await fetch("/api/user", {
      body: JSON.stringify(values),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    });
    const user = await api.json();
    setSpin(false);
    if (user.status === "error") {
      setAlert({
        message: user.message,
        status: "warning",
        open: true,
      });
      return;
    }
    if (user.data.role === "user") {
      setAlert({
        message: "You are not an admin",
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
        <title>Admin login</title>
      </Head>
      <main className="font-gilroy w-full min-h-screen flex justify-center items-center">
        {alert.open && (
          <Alert
            color={alert.status}
            message={alert.message}
            setOpen={() => setAlert((pre) => ({ ...pre, open: false }))}
          />
        )}
        <form className="w-full px-3 py-5 max-w-md flex flex-col gap-3" onSubmit={submit}>
          <div className="flex flex-col items-center w-full gap-1">
            <Image priority className="h-[100px] w-fit" src={admin} alt="Admin image shield" />
            <LogoName />
          </div>
          <div className="flex flex-col items-center w-full gap-0">
            <h1 className="text-lg font-bold">Hi Admin,</h1>
            <h2 className="text-zinc-600">Welcome back.</h2>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Input
              onChange={(e: any) => setValues((pre) => ({ ...pre, email: e.target.value }))}
              className={validateEmailInput(values.email)}
              label="Email"
              value={values.email}
              placeholder="Enter email address"
              type="email"
              name="email"
            />
            <Input
              value={values.password}
              onChange={(e: any) => setValues((pre) => ({ ...pre, password: e.target.value }))}
              label="Password"
              placeholder=" "
              type="password"
              name="password"
            />
          </div>
          <SubmitBtn
            spin={spin}
            label="Sign In"
            className="bg-[#582BE8] after:bg-[#582BE8] w-full justify-center rounded-md"
          />
        </form>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const user = await getSession(context.req.headers.cookie);
  if (user && user.role === "admin")
    return {
      redirect: {
        destination: "/admin/admissions",
        permanent: false,
      },
    };
  return {
    props: {},
  };
}
