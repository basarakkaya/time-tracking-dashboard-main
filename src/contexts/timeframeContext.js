import React from "react";

const timeframeContext = React.createContext();

export function useTimeframe() {
  const context = React.useContext(timeframeContext);

  if (!context)
    throw new Error("useTimeframe must be used within a timeframeProvider");

  return context;
}

export function TimeframeProvider(props) {
  const [timeframe, setTimeframe] = React.useState("daily");

  const value = React.useMemo(() => [timeframe, setTimeframe], [timeframe]);

  return <timeframeContext.Provider value={value} {...props} />;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { TimeframeProvider, useTimeframe };
