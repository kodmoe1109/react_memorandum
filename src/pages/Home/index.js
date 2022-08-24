import React, { useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";

import "./index.css";

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
}
