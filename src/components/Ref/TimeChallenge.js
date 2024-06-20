import React, { useState } from "react";

let timer;

const TimerChallenge = ({ title, targetTime }) => {
  // 타이터가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟 시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  const startHandler = (e) => {

    timer = setTimeout(() => {
      //   console.log("시간만료");
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(!timerStarted);
  };

  // 전역 변수로 timer 설정시 5초 -> 1초 -> 1초 -> 5초를 연속 클릭해보면
  // 5초짜리 timer가 정상 작동하지 않는 이유는
  // 4개의 TimeChallenge 컴포넌트가 1개의 timer를 공유하여
  // 처음 5초짜리 timer가 1초 짜리에 의해 덮어씌워지기 떄문
  const stopHandler = (e) => {
    clearTimeout(timer);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!!!!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? stopHandler : startHandler}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
