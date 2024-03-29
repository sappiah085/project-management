import { useState } from "react";
import AdminNav from "../adminNav/adminNav";
import SideBarAdmin from "../sideBarAdmin/sideBarAdmin";

export default function LayoutAdmin({ children, cookie }: any) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <main className="flex  font-gilroy flex-col w-full">
      <AdminNav cookie={cookie} handleOpen={() => setOpenNav((pre) => !pre)} />
      <div className="w-full flex justify-between items-start">
        <SideBarAdmin
          cookie={cookie}
          handleOpen={() => setOpenNav((pre) => !pre)}
          openNav={openNav}
        />
        <div className="flex flex-grow ">{children}</div>
      </div>
    </main>
  );
}
