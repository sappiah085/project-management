import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import dynamic from "next/dynamic";
const Chart = dynamic(
  () => import("../../components/chart/chart"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
export default function Analytics() {
  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dataPoints: { label: any; y: any }[] = months.map((month, id) => ({
    label: month,
    y: id + 10,
  }));
  return (
    <LayoutAdmin>
      <section className="flex w-full flex-col gap-4">
        <h1 className="font-bold text-xl">Analytics</h1>
        <div className="w-full flex flex-wrap gap-4">
          <div className="w-full max-w-xl p-5 my-auto border-[1px] rounded-md">
            <Chart
              title={"Visitor analytics"}
              typeChart={"line"}
              dataPoints={dataPoints}
            />
          </div>
          <div className="w-full max-w-xl p-5 my-auto border-[1px] rounded-md">
            <Chart
              title={"Visitor analytics"}
              typeChart="column"
              dataPoints={dataPoints}
            />
          </div>
          <div className="w-full max-w-xl p-5 my-auto border-[1px] rounded-md">
            <Chart
              title={"Visitor analytics"}
              typeChart="doughnut"
              dataPoints={dataPoints}
            />
          </div>
          <div className="w-full max-w-xl p-5 my-auto border-[1px] rounded-md">
            <Chart
              title={"Visitor analytics"}
              typeChart="splineArea"
              dataPoints={dataPoints}
            />
          </div>
        </div>
      </section>
    </LayoutAdmin>
  );
}
