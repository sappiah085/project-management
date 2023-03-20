import moment from "moment";
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

export const fetchData = async (url: string, body: string, method = "POST") => {
  const data = await fetch(`${url}`, {
    method: method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const dateInfo = await data.json();
  return dateInfo;
};
