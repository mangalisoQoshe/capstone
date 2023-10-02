
import { useState, useEffect } from "react";

function TimeAndDate() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const MonthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      {currentDateTime.getDate()} {MonthList[currentDateTime.getMonth()]},{" "}
      {currentDateTime.getHours()}:{currentDateTime.getMinutes()}
    </>
  );
}

export default TimeAndDate;
