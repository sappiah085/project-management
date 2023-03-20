import { url } from "@/utils/urls";
import { useRouter } from "next/router";
import { createContext, useContext, useMemo, useState, FC } from "react";
import { useQuery } from "react-query";
import Loader from "../loader/loader";
type userObj = {
  _d: string;
  name: string;
  email: string;
  role: string;
};
export interface UserContextImplicit {
  user?: userObj;
  setUser?: (user: userObj) => void;
}
export const userContext = createContext<UserContextImplicit>(null!);
export const useUser = () => useContext(userContext);
function UserProvider({
  children,
  initialUser,
}: {
  children: any;
  initialUser?: userObj;
}) {
  const [user, setUser] = useState(initialUser);

  const userOb = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);
  return <userContext.Provider value={userOb}>{children}</userContext.Provider>;
}
const fetcher = async () => {
  try {
    const data = await fetch(`${url.user}/get-user`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
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
    return json;
  } catch (error) {
    return null;
  }
};
const Protect = ({ children }: { children: any }) => {
  const { isLoading, data } = useQuery("user", fetcher);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <UserProvider initialUser={data?.data?.user}>{children}</UserProvider>
      )}
    </>
  );
};
export default Protect;
