import { MouseEvent, useState } from "react";
import Input from "../input/input";
import ClickOutside from "../common/clickOutside/clickoutside";

export default function SelectInput({
  months,
  label,
  setValue,
  labelOrient = "flex-col",
  inputClass = "",
  value,
  hide = "",
}: any) {
  const [values, setValues] = useState({ openMenu: false });

  return (
    <div className={"relative z-[6]  flex items-start gap-1 " + labelOrient}>
      {label && (
        <label className={"font-medium " + hide} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={"relative"}>
        <ClickOutside
          onclickOutside={() =>
            setValues((pre) => ({
              ...pre,
              openMenu: false,
            }))
          }
        >
          <Input
            onFocus={() => setValues((pre) => ({ ...pre, openMenu: true }))}
            value={value}
            onChange={(e: any) => setValues((pre) => ({ ...pre, month: e.target.value }))}
            className={"outline-none border-[1.5px] p-2 rounded-md w-[150px] " + inputClass}
            name="month"
            id={label || "month"}
          />

          {values.openMenu && (
            <div className="absolute top-10 left-0 p-2 py-0 rounded-md border-b-zinc-300 drop-shadow border-[1px] bg-white w-fit  px-3 flex flex-col gap-2 ">
              {months.map((month: string) => (
                <button
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    setValue(month);
                    setValues((pre) => ({
                      ...pre,
                      openMenu: false,
                    }));
                  }}
                  className="border-b-zinc-300 p-1 text-sm border-b-[1px] "
                  key={month}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </ClickOutside>
      </div>
    </div>
  );
}
