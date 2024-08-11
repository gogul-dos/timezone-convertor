import React from "react";
import moment from "moment-timezone";

function TimezoneList({ time, timezones, addTimezone, removeTimezone }) {
  const handleAdd = () => {
    const tz = prompt("Enter a timezone (e.g., America/New_York):");
    if (tz) addTimezone(tz);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Timezone</button>
      <ul>
        {timezones.map((tz, index) => (
          <li key={index}>
            {tz}: {moment.tz(time, tz).format("YYYY-MM-DD HH:mm:ss")}
            <button onClick={() => removeTimezone(tz)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimezoneList;
