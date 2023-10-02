import { useState } from "react";
import styles from "./Settings.module.css";
import Filter from "./filter/Filter";
import ChartSettings from "./chart-settings/ChartSettings";
import { useContext } from "react";
import AuthContext from "../../AuthContext";
import { useNavigate } from "react-router-dom";

//import AuthContext from "../../AuthContext";

function Settings({
  changeChartType,
  waterData,
  energyData,
  updateTime,
  timeToRotate,
  updateTimestamp,
}) {
  const [waterSlideSelected, setWaterSlideSelected] = useState(true);
  const [selectedData, setSelectedData] = useState({ ...waterData });
  const [inputNumber, setInputNumber] = useState(timeToRotate / 60000);

  const handleCustomizationBtn = () => {
    setSelectedData(waterSlideSelected ? { ...energyData } : { ...waterData });
    setWaterSlideSelected(!waterSlideSelected);
  };

  const handleForm = (e) => {
    e.preventDefault();
    updateTime(inputNumber);
  };
  const navigete = useNavigate();
  const handleButton=()=>{
     navigete("/announcement");

  }

  // Only Admin Can Access Settings Page
  const { user } = useContext(AuthContext);
  if (user == null) {
    window.location.href = "/login";
  } else {
    return (
      <div className={styles.settings}>
        <div className={styles["settings-input"]}>
          <Filter updateTimestamp={updateTimestamp} />

          <form onSubmit={handleForm}>
            <label
              htmlFor="timeToRotate"
              style={{ fontWeight: "bold", marginRight: "1rem" }}
            >
              Change Time for Rotation (minutes)
            </label>
            <input
              type="number"
              required
              id="timeToRotate"
              value={inputNumber}
              min={1}
              onChange={(e) => setInputNumber(e.target.value)}
              style={{ height: "30px", paddingLeft: "0.3rem" }}
            />
            <button className={styles.btn}>Update</button>
          </form>
          <div>
            <button className={styles.btn} style={{marginTop:"1rem"}} onClick={handleButton}>
              Make an anouncement
            </button>
          </div>
        </div>
        <div className={styles["charts-container"]}>
          <div className={styles["btn-container"]}>
            <button
              onClick={handleCustomizationBtn}
              disabled={waterSlideSelected}
              className={
                waterSlideSelected ? styles["disabled-btn"] : styles.btn
              }
            >
              Water
            </button>
            <button
              onClick={handleCustomizationBtn}
              disabled={!waterSlideSelected}
              className={
                !waterSlideSelected ? styles["disabled-btn"] : styles.btn
              }
            >
              Energy
            </button>
          </div>

          {waterSlideSelected ? (
            <div className={styles["chart-settings"]}>
              <h3>Water Slide Customizations</h3>
              <ChartSettings
                key="water"
                sourceData={selectedData}
                changeChartType={changeChartType}
              />
            </div>
          ) : (
            <div className={styles["chart-settings"]}>
              <h3>Energy Slide Customizations</h3>
              <ChartSettings
                key="energy"
                sourceData={selectedData}
                changeChartType={changeChartType}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Settings;
