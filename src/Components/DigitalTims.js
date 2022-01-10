import React, { useState } from "react";
import "../App.css";

function DigitalTime() {
  setInterval(updatedTime, 1000);
  const now = new Date().toLocaleString();

  const [time, setTime] = useState(now);

  function updatedTime() {
    const newTime = new Date().toLocaleString();

    setTime(newTime);
  }

  return (
    <div className="container">
        <h1 className="head">Time waits for no man</h1>
      <div className="Time">
        <h1>{time}</h1>
        <button onClick={updatedTime}>Get Time</button>
       
      </div>
    </div>
  );
}

export default DigitalTime;
