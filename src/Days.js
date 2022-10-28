import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  size: 50,
  animate: true,
};

export default function Days() {
  return (
    <div className="weather">
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={defaults.size}
        animate={defaults.animate}
      />
      <ReactAnimatedWeather
        icon="SNOW"
        color="gray"
        size={defaults.size}
        animate={defaults.animate}
      />
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="pink"
        size={defaults.size}
        animate={defaults.animate}
      />
      <ReactAnimatedWeather
        icon="SLEET"
        color="blue"
        size={defaults.size}
        animate={defaults.animate}
      />
    </div>
  );
}
