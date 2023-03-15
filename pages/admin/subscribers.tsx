import DataTable from "@/components/dataTable/dataTable";
import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
const data = new Array(200).fill({
  email: "same@gmail.com",
  date: "30th November,2022}",
});
export default function Subscribers() {
  return (
    <LayoutAdmin>
      <section className="w-full relative px-2 pb-12 flex flex-col gap-5 font-gilroy">
        <h1 className="text-xl font-gilroy font-bold">Subscribers</h1>
        <div className="w-full  max-w-3xl">
          <DataTable
            headerArray={["#", "E-Mail", "Subscription Date"]}
            dataArray={data}
          />
        </div>
      </section>
    </LayoutAdmin>
  );
}
