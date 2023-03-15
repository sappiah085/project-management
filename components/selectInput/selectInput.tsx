import { useState } from "react";
import Input from "../input/input";

export default function SelectInput({
  months,
  label,
  labelOrient = "flex-col",
  inputClass = "",
}: any) {
  const [values, setValues] = useState({ month: months[0], openMenu: false });
  return (
    <div className={"relative flex items-center gap-2 " + labelOrient}>
      {label && (
        <label className="font-medium hidden lg:flex" htmlFor={label}>
          {label}
        </label>
      )}
      <div className={"relative"}>
        <Input
          onFocus={() => setValues((pre) => ({ ...pre, openMenu: true }))}
          value={values.month}
          onChange={(e: any) =>
            setValues((pre) => ({ ...pre, month: e.target.value }))
          }
          className={
            "outline-none border-[1.5px] p-2 rounded-md w-[150px] " + inputClass
          }
          name="month"
          id={label || "month"}
        />
        {values.openMenu && (
          <div className="absolute top-10 left-0 p-2 py-0 rounded-md border-b-zinc-300 drop-shadow border-[1px] bg-white w-fit  px-3 flex flex-col gap-2 ">
            {months.map((month: string) => (
              <button
                onClick={() =>
                  setValues((pre) => ({
                    ...pre,
                    month: month,
                    openMenu: false,
                  }))
                }
                className="border-b-zinc-300 p-1 text-sm border-b-[1px] "
                key={month}
              >
                {month}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
