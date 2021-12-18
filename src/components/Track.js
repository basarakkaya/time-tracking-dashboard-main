import React from "react";

import ellipsis from "../assets/images/icon-ellipsis.svg";

const labelPrevious = (timeframe) => {
  switch (timeframe) {
    case "daily":
      return "Yesterday";
    case "weekly":
      return "Last Week";
    case "monthly":
      return "Last Month";
    default:
      return "";
  }
};

const Track = ({ data, timeframe }) => {
  const type = data.title.toLowerCase().replace(" ", "-");
  const icon = require(`../assets/images/icon-${type}.svg`);

  return (
    <div className={`track ${type}`}>
      <img className="track-icon" src={icon} alt={`${data.title} icon`} />
      <div className="track-inner">
        <div className="track-title-container">
          <p className="track-title">{data.title}</p>
          <img className="track-ellipsis" src={ellipsis} alt="ellipsis icon" />
        </div>
        <div className="track-value-container">
          <p className="track-value">
            {data.timeframes[timeframe]?.current}hrs
          </p>
          <p className="track-previous-value">
            {labelPrevious(timeframe)} - {data.timeframes[timeframe]?.previous}
            hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track;
