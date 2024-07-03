import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetail = () => {
    
  const params = useParams();

  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <h1>EventDetail Page</h1>
      <p>Event Id:{params.eventId}</p>
    </>
  );
};

export default EventDetail;
