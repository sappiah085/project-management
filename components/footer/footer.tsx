import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
const linksFooter: { label: string; url: string }[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/",
  },
  {
    label: "Career",
    url: "/",
  },

  {
    label: "Newsletter",
    url: "/",
  },
  {
    label: "Team",
    url: "/",
  },
  {
    label: "Gallery",
    url: "/",
  },
  {
    label: "Contact",
    url: "/",
  },
  {
    label: "FAQs",
    url: "/",
  },
];
export default function Footer() {
  return (
    <footer className="w-full bg-black flex flex-col p-8 md:px-16  text-white">
      <span className="flex flex-wrap gap-10 justify-between w-full border-b-[0.1rem] pb-7">
        <div className="flex flex-col">
          {" "}
          <h1 className="text-xl italic font-bold  ">
            deutscheinternationalschool
          </h1>
          <h4 className="font-gilroy">Building Future Leaders.</h4>
        </div>
        <div className="flex-col flex gap-3">
          <h1 className="text-xl  font-medium  ">Quick Links</h1>
          <ul className="flex flex-col flex-wrap md:h-28 gap-x-4">
            {linksFooter.map(({ label, url }) => (
              <li key={label}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col flex gap-3">
          <h1 className="text-xl  font-medium  ">Contact Information</h1>
          <Link
            className="flex items-center gap-2"
            href="mailto:sappiah5689@gmail.com"
          >
            <AiOutlineMail /> deutscheinternationalschool@gmail.com
          </Link>
          <Link
            className="flex items-center gap-2"
            href={"telephone:+36208090899"}
          >
            <BsTelephone /> +233245679328
          </Link>
          <span className="flex items-center gap-2">
            <HiOutlineLocationMarker />
            Asamankese, near the Pentecost church
          </span>
          <span className="flex items-center gap-2 relative text-black">
            <input
              type="text"
              className="w-full py-2 px-4 placeholder:text-black outline-black rounded-3xl border-none"
              id="sub"
              placeholder="Subscribe to newsletter"
            />
            <button className="absolute z-10 h-9 bg-black rounded-full text-white flex items-center justify-center aspect-square right-1 top-[50%] -translate-y-[50%] ">
              <FiSend />
            </button>
          </span>
        </div>
      </span>
      <span className="flex flex-wrap gap-6 justify-between p-7">
        <span>
          © 2023{" "}
          <h1 className="text-xl italic font-bold  inline ">
            deutscheinternationalschool
          </h1>
          . All rights reserved. Designed and developed by Degriti
        </span>
        <span>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms and Conditions</Link>
          <Link href={"/"}>Cookies Policies</Link>
        </span>
      </span>
    </footer>
  );
}
