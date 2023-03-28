import { createContext, useContext, useMemo, useState } from "react";

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

export default UserProvider;
