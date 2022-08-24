import React from "react";
import Item from "./Item";

export default function List({ listData }) {
  console.log(listData);
  return (
    <div className="List">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return <Item key={id} note={note} date={date} time={time} />;
      })}
    </div>
  );
}
