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
  const tableRef = useRef(null);
  const values = dataArray.map((el, id) => [id, ...Object.values(el)]);
  return (
    <section className="w-full flex-col flex gap-5">
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
      <div className="w-full z-50 sticky top-16 pb-3 bg-white flex gap-4">
        <div className="relative">
          <span className="absolute top-[50%] left-4 translate-y-[-40%]">
            <BsSearch />
          </span>
          <Input
            className="pl-10 !rounded-3xl"
            placeholder="Search"
            name="search"
            type="text"
          />
        </div>

        <SelectInput
          inputClass="!rounded-3xl  w-[100px] text-center"
          labelOrient="flex-row "
          months={[10, 344, 56]}
          label="Show entries"
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
