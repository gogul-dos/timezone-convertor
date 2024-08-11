import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import TimezoneList from "./components/TimezoneList";
import TimeSlider from "./components/TimeSlider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [timezones, setTimezones] = useState(["UTC", "Asia/Kolkata"]);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const addTimezone = (tz) => {
    setTimezones([...timezones, tz]);
  };

  const removeTimezone = (tz) => {
    setTimezones(timezones.filter((zone) => zone !== tz));
  };

  const updateTime = (newTime) => {
    setTime(newTime);
  };

  const updateDate = (date) => {
    setTime(date);
  };

  return (
    <div className="App">
      <h1>Timezone Converter</h1>
      <DatePicker
        selected={time}
        onChange={updateDate}
        showTimeSelect
        timeFormat="HH:mm"
      />
      <TimeSlider time={time} onChange={updateTime} />
      <TimezoneList
        time={time}
        timezones={timezones}
        addTimezone={addTimezone}
        removeTimezone={removeTimezone}
      />
    </div>
  );
}

export default App;
