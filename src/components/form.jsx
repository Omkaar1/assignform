import React, { useState } from "react";
import axios from "axios";

export const Forms = ({ getData }) => {
  const initState = {
    Name: "",
    Age: "",
    Address: "",
    Department: "",
    Salary: "",
    Status: "false",
  };

  const [userData, setUserData] = useState(initState);

  const { Name, Age, Address, Department, Salary, Status } = userData;

  const handlechange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      value = checked;
    }

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/data", userData);

    setUserData(initState);
    getData();
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter Your name"
            name="Name"
            value={Name}
            onChange={handlechange}
          />
        </label>
        <br></br>
        <label>
          Age
          <input
            type="Number"
            placeholder="Enter Your age"
            name="Age"
            value={Age}
            onChange={handlechange}
          />
        </label>
        <br></br>
        <label>
          Address
          <input
            type="text"
            placeholder="Enter Your address"
            name="Address"
            value={Address}
            onChange={handlechange}
          />
        </label>
        <br></br>
        <label>
          Department
          <select
            type="text"
            name="Department"
            value={Department}
            onChange={handlechange}
          >
            <option></option>
            <option>Civil</option>
            <option>Mechanical</option>
            <option>Intrumentation</option>
          </select>
        </label>
        <br></br>
        <label>
          Salary
          <input
            type="text"
            placeholder="enter Your salary"
            name="Salary"
            value={Salary}
            onChange={handlechange}
          />
        </label>
        <br></br>
        <label>
          marital status
          <input
            type="checkbox"
            placeholder="enter Your status"
            name="Status"
            value={Status}
            onChange={handlechange}
          />
        </label>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
