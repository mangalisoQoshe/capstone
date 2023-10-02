import { useState } from "react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import { Calendar } from "primereact/calendar";

import styles from "./Filter.module.css";

function Filter({ updateTimestamp }) {
  const [dateRange, setDateRange] = useState(null);
  const [isEnabled, setIsEnabled] = useState({ interval: "filterbytimerange" });

  const handleForm = (e) => {
    e.preventDefault();

    if (dateRange[1] === null) {
      isEnabled.interval === "month" && dateRange[0].setMonth(dateRange[0].getMonth() + 1);
      isEnabled.interval === "day" && dateRange[0].setDate(dateRange[0].getDate() + 1);
      updateTimestamp(
        dateRange[0].toISOString(),
        dateRange[0].toISOString(),
        isEnabled.interval
      );
    } else {
      isEnabled.interval === "month" &&
        (dateRange[0].setMonth(dateRange[0].getMonth() + 1),
        dateRange[1].setMonth(dateRange[1].getMonth() + 1));

      isEnabled.interval === "day" &&
        (dateRange[0].setDate(dateRange[0].getDate() + 1),
        dateRange[1].setDate(dateRange[1].getDate() + 1));
      updateTimestamp(
        dateRange[0].toISOString(),
        dateRange[1].toISOString(),
        isEnabled.interval
      );
    }
  };

  return (
    <form className={styles.filter} onSubmit={handleForm}>
      <select
        name="filter"
        className={styles["dropdown"]}
        value={isEnabled.interval}
        onChange={(e) => {
          setIsEnabled({ interval: e.target.value });
        }}
      >
        <option value="filterbytimerange" disabled>
          Filter By Time Period
        </option>
        <option value="month">Month</option>
        <option value="day">Day</option>
      </select>

      <Calendar
        value={dateRange}
        name="calender"
        onChange={(e) => setDateRange(e.value)}
        dateFormat={isEnabled.interval === "month" ? "mm/yy" : "dd/mm/yy"}
        showIcon
        selectionMode="range"
        inputId="calender"
        required
        disabled={isEnabled.interval === "filterbytimerange" ? true : false}
        view={isEnabled.interval === "month" ? "month" : "date"}
      />
      <button
        disabled={isEnabled.interval === "filterbytimerange" ? true : false}
        className={
          isEnabled.interval === "filterbytimerange"
            ? styles["disabled-btn"]
            : styles.btn
        }
      >
        Filter
      </button>
    </form>
  );
}

export default Filter;
