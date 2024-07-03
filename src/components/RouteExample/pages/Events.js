import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    
    (async () => {
      const responce = await fetch("http://localhost:8282/events");
      const jsonData = await responce.json();
      setEventList(jsonData);
    })();

    // fetch("http://localhost:8282/events")
    //   .then((res) => res.json())
    //   .then((jsonData) => {
    //     console.log(jsonData);
    //     setEventList(jsonData);
    //   });
  }, []);

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {eventList.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
