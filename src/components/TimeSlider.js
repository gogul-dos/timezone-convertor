import React from "react";

function TimeSlider({ time, onChange }) {
  const handleChange = (event) => {
    const newTime = new Date(time);
    newTime.setHours(event.target.value);
    onChange(newTime);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="23"
        value={time.getHours()}
        onChange={handleChange}
      />
      <p>Selected Time: {time.toTimeString().slice(0, 5)}</p>
    </div>
  );
}

export default TimeSlider;
