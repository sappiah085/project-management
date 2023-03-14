import Image from "next/image";
import image from "../../public/assets/woman.webp";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";
export default function NewsCard() {
  const [show, setShow] = useState(false);
  return (
    <article className="w-full justify-between flex gap-3 flex-wrap-reverse">
      <div className="min-w-[250px] flex-shrink-0 flex flex-col gap-2 w-full max-w-2xl">
        <h2 className="font-bold text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          corporis velit, porro hic qui molestias optio minima rerum cumque
          dolorum repudiandae quo dignissimos libero ab quia facilis eos id
          veritatis reprehenderit. Veritatis, quidem voluptatem sed molestiae
          mollitia, cupiditate et repudiandae dolores, dolor illum voluptatibus
          sunt.
        </p>
        <div className="relative">
          <button
            onClick={() => setShow((pre) => !pre)}
            className="bg-zinc-400/25 flex items-center gap-2 px-4 py-1 rounded-3xl"
          >
            <FiSettings />
            <MdOutlineKeyboardArrowDown />
          </button>
          <ul
            style={{
              height: show ? "fit-content" : "0px",
              padding: show ? "1rem 2.25rem" : "0px",
              border: show ? "1px solid rgb(161 161 170 / 0.3)" : "transparent",
            }}
            className="bg-white absolute top-[100%] left-[2%]  rounded-md overflow-hidden transition-all duration-75 w-fit flex flex-col gap-2"
          >
            <li>
              <button
                onClick={() => setShow((pre) => !pre)}
                className="flex items-center gap-2"
              >
                {" "}
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_326_125"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="19"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.000152588H17.1806V18.9397H0V0.000152588Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_326_125)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.1103 2.0168L1.69527 13.7918C1.52427 14.0058 1.46127 14.2818 1.52427 14.5468L2.20527 17.4318L5.24427 17.3938C5.53327 17.3908 5.80027 17.2618 5.97727 17.0418C9.19427 13.0168 15.3273 5.3428 15.5013 5.1178C15.6653 4.8518 15.7293 4.4758 15.6433 4.1138C15.5553 3.7428 15.3243 3.4278 14.9913 3.2268C14.9203 3.1778 13.2353 1.8698 13.1833 1.8288C12.5493 1.3208 11.6243 1.4088 11.1103 2.0168ZM1.61327 18.9398C1.26627 18.9398 0.964274 18.7018 0.883274 18.3628L0.0642743 14.8918C-0.104726 14.1728 0.0632743 13.4308 0.524274 12.8548L9.94427 1.0728C9.94827 1.0688 9.95127 1.0638 9.95527 1.0598C10.9883 -0.175205 12.8563 -0.357205 14.1163 0.653795C14.1663 0.692795 15.8393 1.9928 15.8393 1.9928C16.4473 2.3548 16.9223 3.0018 17.1023 3.7678C17.2813 4.5258 17.1513 5.3078 16.7343 5.9688C16.7033 6.0178 16.6763 6.0598 7.14827 17.9798C6.68927 18.5518 6.00127 18.8848 5.26227 18.8938L1.62327 18.9398H1.61327Z"
                      fill="black"
                    />
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.2234 8.68481C14.0634 8.68481 13.9034 8.63381 13.7664 8.52981L8.31442 4.34181C7.98642 4.08981 7.92442 3.61981 8.17642 3.28981C8.42942 2.96181 8.89942 2.90081 9.22842 3.15281L14.6814 7.33981C15.0094 7.59181 15.0714 8.06281 14.8184 8.39181C14.6714 8.58381 14.4484 8.68481 14.2234 8.68481Z"
                    fill="black"
                  />
                </svg>
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => setShow((pre) => !pre)}
                className="flex items-center gap-2"
              >
                {" "}
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
                    d="M12.2464 22C10.8914 22 9.57035 21.985 8.26335 21.958C6.59135 21.925 5.43435 20.841 5.24535 19.129C4.93035 16.289 4.39135 9.595 4.38635 9.528C4.35235 9.115 4.66035 8.753 5.07335 8.72C5.48035 8.709 5.84835 8.995 5.88135 9.407C5.88635 9.475 6.42435 16.146 6.73635 18.964C6.84335 19.937 7.36835 20.439 8.29435 20.458C10.7944 20.511 13.3454 20.514 16.0954 20.464C17.0794 20.445 17.6114 19.953 17.7214 18.957C18.0314 16.163 18.5714 9.475 18.5774 9.407C18.6104 8.995 18.9754 8.707 19.3844 8.72C19.7974 8.754 20.1054 9.115 20.0724 9.528C20.0664 9.596 19.5244 16.307 19.2124 19.122C19.0184 20.869 17.8644 21.932 16.1224 21.964C14.7894 21.987 13.5034 22 12.2464 22Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.708 6.98932H3.75C3.336 6.98932 3 6.65332 3 6.23932C3 5.82532 3.336 5.48932 3.75 5.48932H20.708C21.122 5.48932 21.458 5.82532 21.458 6.23932C21.458 6.65332 21.122 6.98932 20.708 6.98932Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4406 6.98931C16.3026 6.98931 15.3146 6.17831 15.0906 5.06231L14.8476 3.84631C14.7966 3.66131 14.5856 3.50031 14.3456 3.50031H10.1126C9.87258 3.50031 9.66158 3.66131 9.60058 3.89231L9.36758 5.06231C9.14458 6.17831 8.15558 6.98931 7.01758 6.98931C6.60358 6.98931 6.26758 6.65331 6.26758 6.23931C6.26758 5.8253 6.60358 5.48931 7.01758 5.48931C7.44358 5.48931 7.81358 5.18531 7.89758 4.76731L8.14058 3.55131C8.38758 2.61931 9.19458 2.00031 10.1126 2.00031H14.3456C15.2636 2.00031 16.0706 2.61931 16.3076 3.50631L16.5616 4.76731C16.6446 5.18531 17.0146 5.48931 17.4406 5.48931C17.8546 5.48931 18.1906 5.8253 18.1906 6.23931C18.1906 6.65331 17.8546 6.98931 17.4406 6.98931Z"
                    fill="black"
                  />
                </svg>
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Image
        className="max-h-[200px] flex-shrink-0 min-w-[250px] w-full max-w-sm object-cover"
        src={image}
        alt="image"
      />
    </article>
  );
}
