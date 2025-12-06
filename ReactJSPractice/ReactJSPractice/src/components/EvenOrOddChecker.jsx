import React, { useState } from "react";
// import "./styles.css";

function EvenOrOddChecker() {
  const [numberInput, setNumberInput] = useState("");
  console.log(numberInput);
  console.log(typeof numberInput);
  // let us create a separate function which will basically check the whether the number is even, or odd or invalid
  // let us name that function as the checker

  function isFinite(num) {
    if (!Number.isFinite(num)) {
      return false;
    }
    return true;
  }

  function Checker(numberInput) {
    // first we will convert the string into the number by using the Number constructor
    const isEvenOdd = Number(numberInput);
    // validating if the user has entered some wrong input
    // let us create a separate function to check weather the input number is finite or not
    const isFiniteNum = isFinite(isEvenOdd);
    
  }
  return (
    <div className="even-odd-container w-80 mt-6 flex flex-col justify-center items-center m-auto py-12 border border-amber-900">
      <h1 className="title font-bold text-3xl">Even or Odd Checker</h1>

      <input
        className="number-input mt-10 h-10 w-60 border border-black"
        type="text"
        placeholder="Enter a number"
        onChange={(e) => {
          setNumberInput(e.target.value);
        }}
      />

      <button className="check-button h-10 w-30 mt-6  border border-indigo-600 mx-">
        Check
      </button>

      <div className="result-area h-20 w-40 m-auto">
        <div className="result mt-6">Result appears here</div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
