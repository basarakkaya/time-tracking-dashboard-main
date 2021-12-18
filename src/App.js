import React from "react";

import UserInfoContainer from "./components/UserInfoContainer";
import TrackContainer from "./components/TrackContainer";

import { TimeframeProvider } from "./contexts/timeframeContext";

function App() {
  return (
    <TimeframeProvider>
      <div className="App">
        <UserInfoContainer />
        <TrackContainer />
      </div>
    </TimeframeProvider>
  );
}

export default App;
