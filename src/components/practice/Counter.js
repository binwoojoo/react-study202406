import React, { useState } from "react";

const Counter = () => {
  //   let num = 0;

  const [mNum, setNum] = useState(0);

  const plusHandler = (e) => {
    // useState의 setter는 상태값을 업데이트할 때
    // 렌더링 전까지 이전 상태값을 참조함

    // 해결방법: 함수형 업데이트를 사용
    setNum((prev) => {
      console.log(prev);
      // 변경 이후값을 반환
      return prev + 1;
    });

    setNum((mNum) => mNum + 1);

    // 상태값의 변경은 실시간으로 일어나지 않음.
    // 해결방법: useEffect 훅으로 해결
    console.log("변경 이후 값: ", mNum);
  };

  //   const minusHandler = (e) => {
  //     setNum(mNum - 1);
  //   };

  console.log(mNum);

  return (
    <div>
      <h1>숫자: {mNum}</h1>
      <button onClick={plusHandler}>증가</button>
      <button onClick={(e) => setNum(mNum - 1)}>감소</button>
    </div>
  );
};

export default Counter;
