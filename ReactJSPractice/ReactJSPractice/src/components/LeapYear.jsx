import React from "react";
import { useState } from "react";

const LeapYear = () => {
  // Initially no year will be entered by the user
  const [yearInput, setYearInput] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  console.log(errorMessage);
  //   console.log(yearInput);
  //   console.log(typeof yearInput);
  function checkLeapYear(yearInput) {
    if (yearInput === "") {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    console.log(errorMessage);
    // first of all converting the userInput from string into a number by using Number Constructor of javascript
    // before converting a string into a number we have to remove the trailing white spaces.
    const yearTrimmed = yearInput.trim();
    const year = Number(yearTrimmed);
    console.log(year);
    if (!(typeof year === "number" && Number.isFinite(year))) {
      setErrorMessage(true);
    } else {
      //   setResult("Valid year!");
      // year is a valid year
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
        ? setResult(`${year} is a Leap Year`)
        : setResult(`${year} is not a Leap Year`);
    }
  }
  return (
    <div className="container h-52 w-1/2 p-5 bg-amber-200 m-auto flex flex-col items-center">
      <h1 className="font-bold text-xl">Leap Year Checker</h1>
      <label data-testid="label-date" className="mt-5">
        Enter a year:
      </label>
      <input
        type="text"
        className="border border-black mt-2"
        data-testid="year-input"
        onChange={(e) => {
          setYearInput(e.target.value);
        }}
      />

      <button
        data-testid="check-btn"
        className="bg-amber-900 w-20 mt-2.5 text-amber-100"
        onClick={() => {
          checkLeapYear(yearInput);
        }}
      >
        Check
      </button>
      <div>
        {errorMessage ? (
          <div data-testid="error-msg">
            <h1>Please enter a year</h1>
          </div>
        ) : (
          <div data-testid="result">
            <h1>{result}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeapYear;
