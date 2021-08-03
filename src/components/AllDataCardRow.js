import React from "react";

const AllDataCardRow = () => {
  return (
    <>
      <div className="date-time-wrapper">sat</div>
      <div className="values">{Math.round("temperatura")}&deg;C</div>
      <div className="values">{Math.round("vlaznost")}%</div>
      <div className="values">{Math.round("zagadjenost") / 100}ppb</div>
    </>
  );
};

export default AllDataCardRow;
