import React, {  useEffect, useRef, useState } from "react";
import Clock from "theora-timeir-clock";
function TimeirClock({ date: userDate =null , options={}, amPm = false, ...props }) {
  const canvasRef = useRef(null);
  const canvas = <canvas ref={canvasRef} width={200} height={200} />;

  const [date, setDate] = useState(userDate??new Date());
  const [realSec, realMin, realHour] = [
    date.getSeconds(),
    date.getMinutes(),
    date.getHours(),
  ];
  const [sec, min, hour] = [
    ("0" + realSec).slice(-2),
    ("0" + realMin).slice(-2),
    ("0" + (realHour % (amPm ? 12 : 24))).slice(-2),
  ];
  useEffect(() => {
    function onTick(date) {
      setDate(date);
    }


    let clock = new Clock({
      element: canvasRef.current,
      onTick,
      time: userDate, //you can use optional Date
      options,
    });
    clock.startClock();
    return () => {
      clock.stopClock();
      clock = null;
    };
  }, [userDate,options]);
  return (
    <div  style={{ width: "200px", fontFamily: "sans-serif" }} {...props}>
      {canvas}
      <div>
        <h2 style={{ textAlign: "center" }}>
          {hour}:{min}:{sec} {amPm && (realHour >= 12 ? "PM" : "AM")}
        </h2>
      </div>
    </div>
  );
}

export default TimeirClock;
