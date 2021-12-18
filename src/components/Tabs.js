import React from "react";

import { useTimeframe } from "../contexts/timeframeContext";

const tabs = [
  {
    value: "daily",
    label: "Daily",
  },
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "monthly",
    label: "Monthly",
  },
];

const Tabs = () => {
  const [timeframe, setTimeframe] = useTimeframe();

  const onTabChange = (newTimeframe) => () => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <div
          className={timeframe === tab.value ? "tab active" : "tab"}
          onClick={onTabChange(tab.value)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
