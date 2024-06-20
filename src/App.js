import React from "react";
import Player from "./components/Ref/Player";
import TimerChallenge from "./components/Ref/TimeChallenge";

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Not Easy" targetTime={5} />
      <TimerChallenge title="Getting tough" targetTime={10} />
      <TimerChallenge title="Pros Only" targetTime={15} />
    </>
  );
};

export default App;
