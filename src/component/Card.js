import React from "react";

function Card(data) {
  console.log(data);
  return (
    <React.Fragment>
      <div className="p-3 shadow-sm shadow-warm-gray">
        <div className="header">Header</div>
        <div className="header">Body</div>
        <div className="header">Score</div>
        <div className="header">Share</div>
      </div>
      ;
    </React.Fragment>
  );
}

export default Card;
