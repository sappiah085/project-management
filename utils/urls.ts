export const url = {
  //localhost
  // user: "http://192.168.0.116:3000/api/user",
  // student: "http://192.168.0.116:3000/api/student",
  // parent: "http://192.168.0.116:3000/api/parent",
  // user: "http://127.0.0.1:3000/api/user",
  //deployed
  user: "https://dutch-backend.vercel.app/api/user",
  student: "https://dutch-backend.vercel.app/api/student",
  parent: "https://dutch-backend.vercel.app/api/parent",
};
type context = {
  req: {
    headers: {
      cookie: undefined | string;
    };
  };
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
