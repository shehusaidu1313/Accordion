import React, { useState } from "react";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* if Show info is true show minus icon else show plus icon */}
          {showInfo ? <span>-</span> : <span>+</span>}
        </button>
      </header>
      {/* if show information is true then display the paraghraph */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
