import React from "react";

import Track from "./Track";

import { useTimeframe } from "../contexts/timeframeContext";

const data = require("../assets/json/data.json");

const TrackContainer = () => {
  const [timeframe] = useTimeframe();

  return (
    <div>
      {data.map((trackInfo) => (
        <Track data={trackInfo} timeframe={timeframe} />
      ))}
    </div>
  );
};

export default TrackContainer;
