import Linechart from "../../components/shared/charts/Linechart";
import Barchart from "../../components/shared/charts/Barchart";
import Piechart from "../../components/shared/charts/Piechart";
import Doughnutchart from "../../components/shared/charts/Doughnutchart";

function ChosenChart({ chartData }) {
 

  switch (chartData.name) {
    case "LineChart":
      return (
        <Linechart
          chartData={chartData.chartData}
          name={chartData.name}
          chartTitle={chartData.chartTitle}
        />
      );

    case "BarChart":
      return (
        <Barchart
          chartData={chartData.chartData}
          name={chartData.name}
          chartTitle={chartData.chartTitle}
        />
      );

    case "PieChart":
      return (
        <Piechart
          chartData={chartData.chartData}
          name={chartData.name}
          chartTitle={chartData.chartTitle}
        />
      );

    case "DoughnutChart":
      return (
        <Doughnutchart
          chartData={chartData.chartData}
          name={chartData.name}
          chartTitle={chartData.chartTitle}
        />
      );

    default:
      console.log("Error: SelectChart component");
      break;
  }
}

export default ChosenChart;
