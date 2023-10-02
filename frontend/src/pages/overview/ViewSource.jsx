import styles from "./ViewSource.module.css"
import ChosenChart from "./ChosenChart";
import DataInsight from "../../components/data-insights/DataInsight";

function ViewSource({data}) {
  return (
    <div className={styles.overview}>
    <div className={styles["charts-container"]}>
      <div className={styles.chart}>
        {data.chart1 && <ChosenChart chartData={data.chart1} />}
      </div>
      <div className={styles.chart}>
        {data.chart2 && <ChosenChart chartData={data.chart2} />}
      </div>
    </div>
    <div className={styles["insights-container"]}>
      <DataInsight data={data.dataInsights} />
    </div>
  </div>
  )
}

export default ViewSource