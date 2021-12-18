import React from "react";

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
  const icon = require(`../assets/images/icon-${data.title
    .toLowerCase()
    .replace(" ", "-")}.svg`);

  return (
    <div>
      <img src={icon} alt={`${data.title} icon`} />
      <p>{data.title}</p>
      <p>{data.timeframes[timeframe]?.current}hrs</p>
      <p>
        {labelPrevious(timeframe)} - {data.timeframes[timeframe]?.previous}hrs
      </p>
    </div>
  );
};

export default Track;
