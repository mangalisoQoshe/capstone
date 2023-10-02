
import {
  CostSavingsIcon,
  TreeIcon,
  WaterIconFilled,
  CarbonEmissionIcon,
  PowerIcon,
} from "../../assets/Icons";
import Insights from "./insights-container/Insights";

function DataInsight({ data }) {
  switch (data.insightType) {
    case "water":
      return (
        <Insights
          data={data}
          icons={{
            insight1: <CostSavingsIcon />,
            insight2: <TreeIcon />,
            insight3: <WaterIconFilled />,
          }}
        />
      );

    case "energy":
      return (
        <Insights
          data={data}
          icons={{
            insight1: <CostSavingsIcon />,
            insight2: <CarbonEmissionIcon />,
            insight3: <PowerIcon />,
          }}
        />
      );

    default:
      return <div>Error</div>;
  }
}

export default DataInsight;
