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

### [Thorea-timeir-clock-documentation](https://github.com/theoraVilderson/theora-timeir-clock#readme "Thorea-timeir-clock-documentation")

###  Clock React Component Inside :
```JSX
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


```
###  Clock  :
```JSX
import TheoraClock from "theora-react-timeir-clock";

function Clock() {


  return (

      <TheoraClock date={new Date()} amPm options={{title:"my Clock Title"}} />
    )

}


export default Clock;

```



- **the options for sizing uses Scale Algorithm**
- **YourPixlSize * CurrentSurface / defaultSurface**
- **use your imagine size Handler to just work it out! :)**
