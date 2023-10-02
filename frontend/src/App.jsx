import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

//component import
import Header from "./components/header/Header";
import sourceService from "./services/Source";

//pages
import Overview from "./pages/overview/Overview";

import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Announcement from "./components/announcements/Announcement";
import { AuthProvider } from "./authprovider";

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [timeToRotate, setTimeToRotate] = useState(30000);
  const [timestamp, setTimestamp] = useState({
    startDate: "2023-01-01T00:00:00+02:00",
    endDate: "2023-10-01T00:00:00+02:00",
    interval: "month"
  });
  const [waterData, setWaterData] = useState(null);
  const [energyData, setEnergyData] = useState(null);



  useEffect(() => {
    const fetchData = (sourceType, setDataCallback) => {
      sourceService
        .getSourceData(sourceType,timestamp)
        .then((data) => {
          setDataCallback(data);
         
        })
        .catch((err) => {
          console.log(`Error: Failed to get ${sourceType} data server`);
        });
    };

    fetchData("water", setWaterData);
    fetchData("solar", setEnergyData);
  }, [timestamp]);

  const updateTime = (time) => {
    setTimeToRotate(time * 60000);
  };

  const updateData = (sourceData, updatedValue) => {
    sourceData.chart1.name = updatedValue.chart1.name;
    sourceData.chart1.chartTitle = updatedValue.chart1.chartTitle;

    sourceData.chart2.name = updatedValue.chart2.name;
    sourceData.chart2.chartTitle = updatedValue.chart2.chartTitle;

    return sourceData;
  };

  const changeChartType = (source, updatedValue) => {
    if (source === "water") {
      const sourceData = { ...waterData };
      setWaterData(updateData(sourceData, updatedValue));
    } else {
      const sourceData = { ...energyData };
      setEnergyData(updateData(sourceData, updatedValue));
    }
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements((prevState) => prevState.filter((t) => t.id != id));
  };

  const addAnnouncement = (task) => {
    setAnnouncements((prevState) => [...prevState, task]);
  };

  const updateTimestamp=(start,end,interval)=>{
    setTimestamp({
      startDate: start,
      endDate: end,
      interval:interval
    })
  }




  return waterData && energyData ? (
    <div className="container">
      <Router>
        <Header announcements={announcements} />
        <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Overview
                waterData={waterData}
                energyData={energyData}
                timeToRotate={timeToRotate}
              />
            }
          />
          
        
          <Route path="/login" element={<Login />} />
          <Route
            path="/announcement"
            element={
              <Announcement
                announcements={announcements}
                deleteAnnouncement={deleteAnnouncement}
                addAnnouncement={addAnnouncement}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                waterData={waterData}
                energyData={energyData}
                changeChartType={changeChartType}
                updateTime={updateTime}
                timeToRotate={timeToRotate}
                updateTimestamp={updateTimestamp}
              />
            }
          />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  ) : (
    <div style={{ textAlign: "center", fontSize: "40px", marginTop: "5rem" }}>
      Loading data...
    </div>
  );
  }

export default App;
