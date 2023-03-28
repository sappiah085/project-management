import moment from "moment";
import { url } from "./urls";
const emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const isEmail = (email: string) => emailReg.test(email);
export const validateEmailInput = (email: string) =>
  isEmail(email) || !email.length ? "" : "!border-red-300";
export function setInput(e: any, name: string, setState: (args: any) => void) {
  setState((pre: any) => ({ ...pre, [name]: e.target.value }));
}

export const dateFormat = (date: any) => {
  const dateIOS = new Date(date * 1).toISOString();
  const formattedDate = moment(dateIOS).format("YYYY-MM-DD");
  return formattedDate;
};
type context = {
  req: {
    headers: {
      cookie: undefined | string;
    };
  };
};
export const fetchData = async (
  url: string,
  body: string,
  cookie: string,
  method = "POST"
) => {
  const cookies = cookie || "";
  const data = await fetch(`${url}`, {
    method: method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies,
    },
    body,
  });

  const dateInfo = await data.json();
  return dateInfo;
};

type userObj = {
  _d: string;
  name: string;
  email: string;
  role: string;
};

export const getSession = async (con: context) => {
  const cookies = con.req.headers.cookie || "";
  const data = await fetch(`${url.user}/get-user`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies,
    },
    body: JSON.stringify({
      query: `
        query {
          user{
          name,
          email,
          role,
          _id
          }
        }
      `,
    }),
  });
  const json = await data.json();
  const user: userObj = json.data?.user;
  return user || null;
};
