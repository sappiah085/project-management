import Link from "next/link";
import { FiSend } from "react-icons/fi";
import LogoName from "../logo_name/logoName";
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
    <footer className="w-full bg-black flex flex-col p-8 md:px-16  text-white font-gilroy">
      <span className="flex flex-wrap gap-10 justify-between w-full border-b-[0.1rem] pb-7">
        <div className="flex flex-col">
          {" "}
          <LogoName />
          <h4 className="font-gilroy text-zinc-200">
            Building Future Leaders.
          </h4>
        </div>
        <div className="flex-col flex gap-3">
          <h1 className="text-xl  font-medium font-gilroy ">Quick Links</h1>
          <ul className="flex flex-col flex-wrap md:h-28 gap-x-4">
            {linksFooter.map(({ label, url }) => (
              <li key={label}>
                <Link className="font-gilroy text-zinc-200" href={url}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col flex gap-3">
          <h1 className="text-xl  font-medium  font-gilroy">
            Contact Information
          </h1>
          <Link
            className="flex items-center gap-2 font-gilroy text-zinc-200"
            href="mailto:sappiah5689@gmail.com"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.777 11.465C10.108 11.465 9.44098 11.244 8.88298 10.802L4.39798 7.18599C4.07498 6.92599 4.02498 6.45299 4.28398 6.13099C4.54498 5.80999 5.01698 5.75899 5.33898 6.01799L9.81998 9.62999C10.383 10.076 11.176 10.076 11.743 9.62599L16.179 6.01999C16.501 5.75699 16.973 5.80699 17.235 6.12899C17.496 6.44999 17.447 6.92199 17.126 7.18399L12.682 10.796C12.12 11.242 11.448 11.465 10.777 11.465Z"
                fill="white"
              />
              <mask
                id="mask0_290_25"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="22"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H21.4999V19.5H0V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_290_25)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.839 18H15.659C15.661 17.998 15.669 18 15.675 18C16.816 18 17.828 17.592 18.604 16.817C19.505 15.92 20 14.631 20 13.188V6.32C20 3.527 18.174 1.5 15.659 1.5H5.841C3.326 1.5 1.5 3.527 1.5 6.32V13.188C1.5 14.631 1.996 15.92 2.896 16.817C3.672 17.592 4.685 18 5.825 18H5.839ZM5.822 19.5C4.279 19.5 2.901 18.94 1.837 17.88C0.652 16.698 0 15.032 0 13.188V6.32C0 2.717 2.511 0 5.841 0H15.659C18.989 0 21.5 2.717 21.5 6.32V13.188C21.5 15.032 20.848 16.698 19.663 17.88C18.6 18.939 17.221 19.5 15.675 19.5H15.659H5.841H5.822Z"
                  fill="white"
                />
              </g>
            </svg>
            deutscheinternationalschool@gmail.com
          </Link>
          <Link
            className="flex items-center gap-2 font-gilroy text-zinc-200"
            href={"telephone:+36208090899"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.28872 4.08785L3.36127 4.01204C5.28869 2.08444 6.54385 1.57351 7.88307 2.34362C8.2683 2.56515 8.62945 2.87523 9.12054 3.37401L10.6269 4.93603C11.4589 5.84393 11.6481 6.71478 11.3772 7.73465L11.3398 7.86967L11.2984 8.00392L11.097 8.59474C10.666 9.91972 10.846 10.6673 12.3795 12.2004C13.9742 13.7947 14.7186 13.9251 16.1457 13.4264L16.4001 13.338L16.7077 13.2381L16.8423 13.2007C17.9263 12.9115 18.842 13.1423 19.8132 14.1128L21.0269 15.2852L21.3842 15.6366C21.7803 16.0405 22.0421 16.3606 22.2355 16.6989C23.0008 18.0377 22.4893 19.2921 20.5063 21.2677L20.3177 21.4589C20.0216 21.7442 19.745 21.9486 19.3386 22.1416C18.6565 22.4655 17.8506 22.5876 16.9142 22.4573C14.6067 22.1364 11.6802 20.3158 7.97188 16.6085C7.67002 16.3067 7.3809 16.0107 7.10425 15.7205L6.56748 15.1476C1.53762 9.68285 1.09389 6.32588 3.15518 4.2205L3.28872 4.08785ZM7.90641 4.28093C7.58062 3.95973 7.34396 3.76394 7.13532 3.64396C6.67379 3.37856 6.1755 3.49074 5.25329 4.28448L4.96353 4.54334C4.91299 4.59 4.86129 4.63843 4.80838 4.68868L4.47611 5.01231L4.44617 5.04972L4.22091 5.27603C3.67656 5.83204 3.41871 6.51064 3.6409 7.67767C4.00551 9.59269 5.67442 12.1905 9.0324 15.5477C12.5313 19.0456 15.1972 20.7041 17.1208 20.9716C18.2422 21.1276 18.8142 20.856 19.3975 20.2584L19.8424 19.8095C20.051 19.5912 20.2292 19.3933 20.3797 19.2126L20.585 18.9539C21.1097 18.2551 21.1576 17.8358 20.9332 17.4433C20.8479 17.2939 20.7237 17.1302 20.5429 16.93L20.2977 16.671L20.1525 16.5258L18.6213 15.0472C18.1096 14.5753 17.7599 14.5084 17.229 14.65L17.0757 14.6941L16.4414 14.9094C14.6013 15.5037 13.2738 15.2155 11.3189 13.2612C9.29429 11.2371 9.05685 9.88537 9.73522 7.93917L9.77874 7.81411L9.89908 7.45153L9.95823 7.22043C10.0631 6.71746 9.94337 6.36677 9.40269 5.82601C9.38043 5.80375 9.35555 5.77866 9.32847 5.7512L7.90641 4.28093Z"
                fill="white"
              />
            </svg>
            +233245679328
          </Link>
          <span className="flex items-center gap-2 font-gilroy text-zinc-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2505 8.5C11.2855 8.5 10.5005 9.285 10.5005 10.251C10.5005 11.216 11.2855 12 12.2505 12C13.2155 12 14.0005 11.216 14.0005 10.251C14.0005 9.285 13.2155 8.5 12.2505 8.5ZM12.2505 13.5C10.4585 13.5 9.00049 12.043 9.00049 10.251C9.00049 8.458 10.4585 7 12.2505 7C14.0425 7 15.5005 8.458 15.5005 10.251C15.5005 12.043 14.0425 13.5 12.2505 13.5Z"
                fill="white"
              />
              <mask
                id="mask0_31_270"
                maskUnits="userSpaceOnUse"
                x="4"
                y="2"
                width="17"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 2H20.4995V21.5H4V2Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_31_270)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2495 3.5C8.52751 3.5 5.49951 6.557 5.49951 10.313C5.49951 15.092 11.1235 19.748 12.2495 19.996C13.3755 19.747 18.9995 15.091 18.9995 10.313C18.9995 6.557 15.9715 3.5 12.2495 3.5ZM12.2495 21.5C10.4555 21.5 3.99951 15.948 3.99951 10.313C3.99951 5.729 7.70051 2 12.2495 2C16.7985 2 20.4995 5.729 20.4995 10.313C20.4995 15.948 14.0435 21.5 12.2495 21.5Z"
                  fill="white"
                />
              </g>
            </svg>
            Asamankese, near the Pentecost church
          </span>
          <span className="flex items-center gap-2 relative text-black">
            <input
              type="text"
              className="w-full py-2 px-4 placeholder:text-black outline-black rounded-3xl border-none font-gilroy text-black"
              id="sub"
              placeholder="Subscribe to newsletter"
            />
            <button className="absolute z-10 h-9 bg-black rounded-full text-white flex items-center justify-center aspect-square right-1 top-[50%] -translate-y-[50%] ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8325 6.17463L8.10904 11.9592L1.59944 7.88767C0.66675 7.30414 0.860765 5.88744 1.91572 5.57893L17.3712 1.05277C18.3373 0.769629 19.2326 1.67283 18.9456 2.642L14.3731 18.0868C14.0598 19.1432 12.6512 19.332 12.0732 18.3953L8.10601 11.9602"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </span>
        </div>
      </span>
      <span className="flex flex-wrap gap-6 justify-between p-7">
        <span className="font-gilroy text-zinc-200">
          © 2023 <LogoName />. All rights reserved. Designed and developed by
          Degriti
        </span>
        <span className="flex flex-wrap gap-4">
          <Link className="font-gilroy text-zinc-200" href={"/"}>
            Privacy Policy
          </Link>
          <Link className="font-gilroy text-zinc-200" href={"/"}>
            Terms and Conditions
          </Link>
          <Link className="font-gilroy text-zinc-200" href={"/"}>
            Cookies Policies
          </Link>
        </span>
      </span>
    </footer>
  );
}
