import React, { useEffect } from "react";

const AllDataCardRow = ({ response }) => {
  return (
    <>
      <div className="date-time-wrapper">sat</div>
      <div className="values">{Math.round(response.temperature)}&deg;C</div>
      <div className="values">{Math.round(response.humidity)}%</div>
      <div className="values">{Math.round(response.pollution) / 100}ppb</div>
    </>
  );
};

export default AllDataCardRow;
