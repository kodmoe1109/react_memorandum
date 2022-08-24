import React from "react";

export default function Item({ note, date, time }) {
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ,${time}`}</p>
      </div>
      <button className="remove">X</button>
    </div>
  );
}
