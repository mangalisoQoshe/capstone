import styles from "./Insights.module.css";

function Insights({ data, icons }) {
  return (
    <div className={styles["data-insights"]}>
      <h2 className={styles["insights-title"]}>{data.title}</h2>
      <div className={styles["insights-containter"]}>
        <div className={styles.ocean}>
          <div style={{ width: "100%", height: "100%" }} className={styles["source-container"]}>
            <div className={styles["water-container"]}>{icons.insight3}</div>
            <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
              {data.waterIconTitle}
            </h1>
          </div>
        </div>
        <div className={styles["impact-container"]}>
          <div className={styles.impact}>
            <div className={styles["savings-icon"]}>{icons.insight1}</div>
            <p className={styles["insight-text"]}>{data.insight1}</p>
          </div>
          <div className={styles.impact}>
            <div className={styles["tree-icon"]}>{icons.insight2}</div>
            <p className={styles["insight-text"]}>{data.insight2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
