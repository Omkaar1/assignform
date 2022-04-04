import "./App.css";
import { Forms } from "./components/form";
import React, { useState } from "react";
import axios from "axios";
import { ShowData } from "./components/ShowData";

function App() {
  const [data, setdata] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3001/data").then((res) => {
      setdata(res.data);
    });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Forms getData={getData}></Forms>
      <ShowData data={data}></ShowData>
    </div>
  );
}

export default App;
