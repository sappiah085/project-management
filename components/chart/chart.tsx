/* Chart.js */
import CanvasJSReact from "../../public/canvasjs-3/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Chart({
  dataPoints,
  typeChart,
  title,
}: {
  dataPoints: { label: any; y: any };
  typeChart: string;
  title: any;
}) {
  const options = {
    title: {
      text: title,
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: typeChart,
        dataPoints: dataPoints,
      },
    ],
  };
  return (
    <CanvasJSChart
      containerProps={{
        width: "100%",
        padding: "10px",
        height: "360px",
        border: "1px solid transparent",
      }}
      options={options}
      /* onRef={ref => this.chart = ref} */
    />
  );
}

module.exports = Chart;
