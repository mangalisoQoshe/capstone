
import IntroInformation from "./IntroInformation";

import { useEffect, useState, useRef } from "react";

import ViewSource from "./ViewSource";

export default function Overview({ waterData, energyData, timeToRotate }) {

  const [display, setDisplay] = useState(<IntroInformation />);

  const displayRef = useRef(1);


  useEffect(() => {
    const interval = setInterval(() => {
    
       
      if (displayRef.current === 1) {
        displayRef.current = 2;
        setDisplay(<IntroInformation />);
      } else if (displayRef.current === 2) {
        displayRef.current = 3;
        setDisplay(<ViewSource data={waterData} />);
      } else if (displayRef.current === 3) {
        displayRef.current = 1;
        setDisplay(<ViewSource data={energyData} />);
      } else {
        console.log("Error: View Source",displayRef.current);
      }
    }, timeToRotate);

    return () => clearInterval(interval);
  }, [timeToRotate]);

  return display;
}
