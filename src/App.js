import TimeirClock  from "./TimeirClock.jsx";
const currentDate = new Date();
function App() {

  return (
      <TimeirClock amPm date={currentDate}/>
  );
}

export default App;
