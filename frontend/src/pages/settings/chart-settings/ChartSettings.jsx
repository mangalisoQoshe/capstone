import styles from "./ChartSettings.module.css";
import CustomizeChart from "./CustomizeChart";
import { useState } from "react";

function ChartSettings({ changeChartType, sourceData }) {
  const [updateChart1, setUpdateChart1] = useState({
    inputTitle: sourceData.chart1.chartTitle,

    dropdown: sourceData.chart1.name,
  });
  const [updateChart2, setUpdateChart2] = useState({
    inputTitle: sourceData.chart2.chartTitle,

    dropdown: sourceData.chart2.name,
  });

  const handleForm = (e) => {
    e.preventDefault();
    const updatedValue = {
      chart1: {
        name: updateChart1.dropdown,
        chartTitle: updateChart1.inputTitle,
      },
      chart2: {
        name: updateChart2.dropdown,
        chartTitle: updateChart2.inputTitle,
      },
    };

    changeChartType(sourceData.dataInsights.insightType, updatedValue);
  };

  return (
    <form className={styles["chart-settings"]} onSubmit={handleForm}>
     
      <div className={styles["charts-container"]}>
        <div className={`${styles["chart-1"]} ${styles.chart}`}>
          <h3 style={{ textAlign: "center" }}>Chart 1</h3>
          <CustomizeChart
            updateChart={updateChart1}
            setUpdateChart={setUpdateChart1}
            level={`${sourceData.dataInsights.insightType}1`}
          />
        </div>
        <div className={`${styles["chart-2"]} ${styles.chart}`}>
          <h3 style={{ textAlign: "center" }}>Chart 2</h3>
          <CustomizeChart
            updateChart={updateChart2}
            setUpdateChart={setUpdateChart2}
            level={`${sourceData.dataInsights.insightType}2`}
          />
        </div>
       
      </div>
      <button className={styles["form-btn"]}>Save Changes</button>
    </form>
  );
}

export default ChartSettings;
