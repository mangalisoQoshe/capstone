import styles from "./CustomizeChart.module.css";

function CustomizeChart({ updateChart, setUpdateChart, level }) {
  return (
    <div className={styles.form}>
      <div className={styles.options}>
        <label className={styles.label}>Chart Type</label>
        <select
          className={styles["dropdown-selector"]}
          value={updateChart.dropdown}
          onChange={(e) => {
            setUpdateChart({ ...updateChart, dropdown: e.target.value });
          }}
        >
          <option
            disabled={level === "water2" || level === "energy2" ? true : false}
            value="LineChart"
          >
            Line Chart
          </option>
          <option
            disabled={level === "water2" || level === "energy2" ? true : false}
            value="BarChart"
          >
            Bar Chart
          </option>
          <option
            disabled={level === "water1" || level === "energy1" ? true : false}
            value="PieChart"
          >
            Pie Chart
          </option>
          <option
            disabled={level === "water1" || level === "energy1" ? true : false}
            value="DoughnutChart"
          >
            Doughnut Chart
          </option>
        </select>
      </div>
      <div>
        <label htmlFor={`${level}`} className={styles.label}>
          Chart Title
        </label>
        <input
          type="text"
          id={`${level}`}
          value={updateChart.inputTitle}
          onChange={(e) =>
            setUpdateChart({ ...updateChart, inputTitle: e.target.value })
          }
          className={styles["chart-title"]}
        />
      </div>
    </div>
  );
}

export default CustomizeChart;
