import { SyntheticEvent, useState } from "react";

export default function Input({
  label,
  type,
  placeholder,
  name,
  className = "",
  ...el
}: any) {
  const [change, setChange] = useState(false);
  function handleClick(e: SyntheticEvent) {
    e.preventDefault();
    setChange((pre) => !pre);
  }
  return (
    <div className={"w-full flex flex-col gap-1 "}>
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <span className="w-full items-center relative flex">
        <input
          {...el}
          required
          className={
            "outline-none w-full border-[1px] rounded-md border-zinc-300 p-2 bg-zinc-200/20  " +
            className
          }
          id={name}
          type={!change ? type : "text"}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            onClick={handleClick}
            className="absolute cursor-pointer right-2 top-[50%] translate-y-[-50%] "
          >
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8701 7.25012C20.2301 6.14012 16.7101 0.570116 10.7301 0.750116C5.20007 0.890116 2.00007 5.75012 1.13007 7.25012C0.951436 7.55952 0.951436 7.94071 1.13007 8.25012C1.76007 9.34012 5.13007 14.7501 11.0201 14.7501H11.2701C16.8001 14.6101 20.0101 9.75012 20.8701 8.25012C21.0487 7.94071 21.0487 7.55952 20.8701 7.25012ZM11.0001 11.2501C9.06707 11.2501 7.50007 9.68311 7.50007 7.75012C7.50007 5.81712 9.06707 4.25012 11.0001 4.25012C12.9331 4.25012 14.5001 5.81712 14.5001 7.75012C14.5001 9.68311 12.9331 11.2501 11.0001 11.2501ZM11.0001 9.25012C11.8285 9.25012 12.5001 8.57854 12.5001 7.75012C12.5001 6.92169 11.8285 6.25012 11.0001 6.25012C10.1716 6.25012 9.50007 6.92169 9.50007 7.75012C9.50007 8.57854 10.1716 9.25012 11.0001 9.25012Z"
                fill="#919EAB"
              />
            </svg>
          </button>
        )}
      </span>
    </div>
  );
}
