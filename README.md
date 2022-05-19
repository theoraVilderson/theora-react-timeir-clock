#Site DEMO


## Contact

<theora.vilderson.contact@gmail.com>

### Features

- **use amPM**
- **Change all part color**
- **responsive!**
- **Date Auto sync**
- **can be used with optional Date**
- **Events for Tick and Tock!**

### Default Options :

- **scaleWidth**: ***200***,
- **scaleHeight**: ***200***,
- **fontSize**: ***15***,
- **space**: ***10***,
- **secondPointerSize**: ***2***,
- **minutePointerSize**: ***5***,
- **hourPointerSize**: ***7***,
- **secondPointerStayBack**: ***10***,
- **secondPointerHandsOff**: ***10***,
- **minutePointerHandsOff**: ***20***,
- **hourPointerHandsOff**: ***26***,
- **clockBorderSize**: ***5***,
- **markerDashedWidth**: ***1***,
- **markerMinuteDashedSize**: ***1***,
- **markerHourDashedSize**: ***5***,
- **centralDotSize**: ***5***,
- **textHourSpace**: ***5***,
- **mainBorderColor**: "***grey***",
- **mainBorderCoverColor**: "***white***",
- **centralDotColor**: "***grey***",
- **secondPointerColor**: "***red***",
- **minutePointerColor**: "***black***",
- **hourPointerColor**: "***black***",
- **minDashColor**: "***rgb***(0,0,0)",
- **hourDashColor**: "***rgb***(0,0,0)",
- **hourTextColor**: "***rgb***(0,0,0)",
- **titleColor**: "***rgb***(0,0,0)",
- **title**: "***Theora*** Vilderson",
- **titleFont**: "***sans***-serif",
- **hourFont**: "***monospace***",

### Create Clock :
```
import React, {  useEffect, useRef, useState } from "react";
import Clock from "./timeirClockCore";
function TimeirClock({ date: userDate =null , amPm = false, ...props }) {
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
    });
    clock.startClock();
    return () => {
      clock.stopClock();
      clock = null;
    };
  }, [userDate]);
  return (
    <div {...props} style={{ width: "200px", fontFamily: "sans-serif" }}>
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

```

### Create Clock Object :
```   
	let clock = new Clock({
      element: canvasRef.current, // the element should be canvas
      onTick:(date)=>{ /* do something*/ },
      onTock:(date)=>{ /* do something*/ },
      time: userDate, //you can use optional Date
      options:{}
    });
    // run it once and the element should be valid !
    // otherwise will be Error shown up

```
### Start/Stop Clock :
```
let clock = new Clock({
      element: canvasRef.current, // the element should be canvas
      onTick:(date)=>{ /* do something*/ },
      onTock:(date)=>{ /* do something*/ },
      time: userDate, //you can use optional Date
      options:{}
    });
    clock.startClock(); // start
    clock.stopClock(); // stop

    remember the useEffect 
    return function and stop the Clock!

```

### NOTE ! USE TimerClock.jsx   :
- **for using amPm**
- **or just use timeirClockCore**
- **the options for sizing uses Scale Algorithm**
- **YourPixlSize * CurrentSurface / defaultSurface**
- **use your imagine size Handler to just work it out! :)**
