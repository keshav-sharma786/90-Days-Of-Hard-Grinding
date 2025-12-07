import React, { useState } from "react";
// import "./styles.css";

function EvenOrOddChecker() {
  const [numberInput, setNumberInput] = useState("");
  const [result, setResult] = useState(null);
  console.log(numberInput);
  // writing a separate state for the useState hook
  const [loading, setLoading] = useState(false);
  console.log(typeof numberInput);
  // let us create a separate function which will basically check the whether the number is even, or odd or invalid
  // let us name that function as the checker

  function isFiniteN(num) {
    if (!Number.isFinite(num)) {
      return false;
    }
    return true;
  }

  function Checker(numberInput) {
    // first we will convert the string into the number by using the Number constructor
    // what if the user types a empty string or nothing inside the input box
    if (numberInput === "") {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      console.log(numberInput);
      const isEvenOdd = Number(numberInput);
      console.log(numberInput);
      // validating if the user has entered some wrong input
      // let us create a separate function to check weather the input number is finite or not
      const isFiniteNum = isFiniteN(isEvenOdd);
      // if the input of the user is not valid then in the results we basically have to show "Please enter a valid number"
      // if(!isFiniteNum) {
      //   setResult("Please enter a valid number");
      // } else {
      //   setResult("You entered a correct number");
      // }
      !isFiniteNum
        ? setResult("Please enter a valid number")
        : isEvenOdd % 2 === 0
        ? setResult(`The number ${isEvenOdd} is even`)
        : setResult(`The number ${isEvenOdd} is odd`);
      setLoading(false);
    }, 1000);
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

      <button
        className="check-button h-10 w-30 mt-6  border border-indigo-600 mx-"
        onClick={() => {
          // putting a loading delay of 1 second also
          // setTimeout(() => {
          //   setResult("Checking ...");
          // }, 1000);
          // setResult("checking");
          Checker(numberInput);
        }}
      >
        Check
      </button>

      <div className="result-area h-20 w-40 m-auto">
        <div className="result mt-6">{loading ? "checking..." : result}</div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
