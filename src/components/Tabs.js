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
    <div>
      {tabs.map((tab) => (
        <button
          className={timeframe === tab.value ? "active" : undefined}
          onClick={onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
