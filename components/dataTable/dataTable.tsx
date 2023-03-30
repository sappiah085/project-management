import { BsSearch } from "react-icons/bs";
import Input from "../input/input";
import SelectInput from "../selectInput/selectInput";
import { AiOutlineDownload } from "react-icons/ai";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useRef } from "react";
export default function DataTable({
  headerArray,
  dataArray,
}: {
  headerArray: string[];
  dataArray: any[];
}) {
  const tableRef = useRef<HTMLTableElement>(null!);
  const values = dataArray.map((el, id) => [id + 1, ...Object.values(el)]);
  return (
    <section className="w-full flex-col flex gap-1">
      <DownloadTableExcel
        filename="subscribers table"
        sheet="subscribers"
        currentTableRef={tableRef.current}
      >
        <button
          // onClick={handleGeneratePdf}
          className="border-[1px] bg-white z-20 border-black p-2 flex items-center gap-1 rounded-md absolute w-[180px] top-28 right-2 justify-center"
        >
          <AiOutlineDownload />
          Export Data
        </button>
      </DownloadTableExcel>
      <div className="w-full z-40 sticky top-16 pb-3 bg-white flex lg:gap-4 justify-between mb-12 lg:mb-0 lg:justify-start">
        <div className="relative">
          <span className="absolute top-[50%] left-4 translate-y-[-40%]">
            <BsSearch />
          </span>
          <Input className="pl-10 !rounded-3xl" placeholder="Search" name="search" type="text" />
        </div>

        <SelectInput
          inputClass="!rounded-3xl  !w-[70px] text-center"
          labelOrient="flex-row text-sm items-center !gap-2 justify-end lg:justify-start"
          months={[10, 344, 56]}
          label="Show entries"
          // hide="hidden lg:flex"
        />
      </div>
      <table ref={tableRef}>
        <tbody>
          <tr className="sticky  top-[7.5rem]">
            {headerArray.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
          {values.map((el: any[]) => (
            <tr key={el[0]}>
              {el.map((data: any) => (
                <td key={data}>{data}</td>
              ))}{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
