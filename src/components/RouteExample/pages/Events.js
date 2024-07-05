import { useEffect, useState } from "react";
import EventList from "../components/EventList";
import { useLoaderData, json } from "react-router-dom";
import EventSkeleton from "../components/EventSkeleton";

// npm install lodash
import { debounce, throttle } from "lodash";

const Events = () => {
  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();

  console.log("event page rendering$$$$$");

  // 서버에서 가져온 이벤트 목록
  const [events, setEvents] = useState([]);

  // 로딩 상태 체크
  const [loading, setLoading] = useState(false);

  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1);

  // 서버로 목록 조회 요청보내기
  const loadEvents = async () => {
    console.log("start loading...");
    setLoading(true);

    const response = await fetch(
      `http://localhost:8282/events/page/${currentPage}?sort=date`
    );
    const events = await response.json();

    setEvents(events);
    setLoading(false);
    console.log("end loading");
  };

  // 초기 이벤트 1페이지 목록 가져오기
  useEffect(() => {
    loadEvents();
  }, []);

  // 스크롤 핸들러
  const scrollHandler = throttle(() => {
    if (
      loading ||
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
    ) {
      return;
    }
    loadEvents();
  }, 1000);
  
  // 스크롤 이벤트 바인딩
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      scrollHandler.cancel(); // 스로틀 취소
    };
  }, [currentPage, loading]);

  return (
    <>
      <EventList eventList={events} />
      {loading && <EventSkeleton />}
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱

// export const loader = async () => {
//   console.log("loader call@@@@@");

//   // 이 페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
//   // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있습니다.

//   const response = await fetch("http://localhost:8282/events/page/1?sort=date");

//   if (response.status !== 200) {
//     const errorText = await response.text();

//     throw json(
//       { message: errorText },
//       {
//         status: response.status,
//       }
//     );
//   }

//   // const jsonData = await response.json();

//   // loader가 리턴한 데이터는 loader를 선언한 컴포넌트와
//   // 그 하위 컴포넌트에서 언제든 불러 사용할 수 있다.

//   // loader에서 fetch의 결과를 바로 리턴하면 알아서 json을 추출해줌.

//   return response; // ok일 경우
// };
