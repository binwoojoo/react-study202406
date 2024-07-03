import React, { useEffect, useState } from "react";
import EventList from "../components/EventList";
import EventsNavigation from "../layout/EventNavigation";
import { useLoaderData } from "react-router-dom";
// import { Link } from "react-router-dom";

const Events = () => {

    // loader가 리턴한 데이터 받아오기
    const eventList = useLoaderData();

    // fetch("http://localhost:8282/events")
    //   .then((res) => res.json())
    //   .then((jsonData) => {
    //     console.log(jsonData);
    //     setEventList(jsonData);
    //   });

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;
