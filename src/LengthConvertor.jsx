import React, { useState } from "react";
import { calculateLength } from "./helpers/calaculateLength";

const LengthConverter = () => {
  const [fromLength, setFromLength] = useState("cm");
  const [toLength, setToLength] = useState("m");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  // const calculateLength = (from, to, ipValue) => {
  //   if (from == "cm" && to == "m") {
  //     return ipValue / 100;
  //   }

  //   if (from == "m" && to == "cm") {
  //     return ipValue * 100;
  //   }
  // };

  const handleLengthCalculation = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);

    // TAKE THE INPUT
    const value = e.target.value;

    let outputValue = calculateLength(fromLength, toLength, value);
    console.log(outputValue);

    // CALCULATE THE OUTPUT BASED ON FROM AND TO
    setResult(outputValue);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Length Converter</h2>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="from" className="form-label">
              From:
            </label>
            <select
              className="bg-dark text-white"
              onChange={(e) => {
                // alert(e.target.value);
                setFromLength(e.target.value);
                let outputValue = calculateLength(
                  e.target.value,
                  toLength,
                  inputValue
                );

                // CALCULATE THE OUTPUT BASED ON FROM AND TO
                setResult(outputValue);
              }}
            >
              <option value={"m"}>Meter</option>
              <option value={"cm"} selected>
                Centimeter
              </option>
              <option value={"nm"}>Nanometer</option>
              <option value={"inch"}>inch</option>
              <option value={"km"}>km</option>
            </select>
            <input
              type="number"
              id="from"
              className="form-control"
              placeholder="Enter Value"
              value={inputValue}
              onChange={handleLengthCalculation}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to" className="form-label">
              To:
            </label>
            <select
              onChange={(e) => {
                // alert(e.target.value);
                setToLength(e.target.value);
                let outputValue = calculateLength(
                  fromLength,
                  e.target.value,
                  inputValue
                );

                // CALCULATE THE OUTPUT BASED ON FROM AND TO
                setResult(outputValue);
                // calculateLength(fromLength, toLength, value);
              }}
            >
              <option value={"m"}>Meter</option>
              <option value={"cm"}>Centimeter</option>
              <option value={"nm"}>Nanometer</option>
              <option value={"inch"}>inch</option>
              <option value={"km"}>km</option>
            </select>
            <input
              type="number"
              id="to"
              className="form-control"
              placeholder="Enter value"
              readOnly
              value={result}
            />
          </div>
          <button
            className="btn btn-danger w-100"
            onClick={() => {
              setInputValue("");
              setResult("");
            }}
          >
            <i className="bi bi-x-circle me-2"></i>Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LengthConverter;
