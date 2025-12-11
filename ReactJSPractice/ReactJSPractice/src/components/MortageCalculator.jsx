import React from "react";
import { useState } from "react";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(null);
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [result, setResult] = useState(false);
  // function for validating the user input
  function validateUserInput(loanAmount, interestRate, loanTerm) {
    // what if user has entered nothing
    if (loanAmount === "" || interestRate === "" || loanTerm === "") {
      setErrorMessage(true);
      return;
    }
    const loanAmt = Number(loanAmount);
    const interest = Number(interestRate);
    const loanTrm = Number(loanTerm);

    if (
      (typeof loanAmt !== "number" && !Number.isFinite(loanAmt)) ||
      loanAmt <= 0
    ) {
      setErrorMessage(true);
      return;
    }

    if (
      (typeof interest !== "number" && !Number.isFinite(interest)) ||
      interest <= 0
    ) {
      setErrorMessage(true);
      return;
    }

    if (
      (typeof loanTrm !== "number" && !Number.isFinite(loanTrm)) ||
      loanTrm <= 0
    ) {
      setErrorMessage(true);
      return;
    }

    mortageCalculation(loanAmt, interest, loanTrm);
  }

  function mortageCalculation(loanAmt, interest, loanTrm) {
    // just write the formula given in the question
    const n = loanTrm * 12;
    const r = interest / 100 / 12;
    const m = loanAmt * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    setMonthlyPayment(m.toFixed(2));
    setResult(true);
  }
  return (
    <div className="h-64 w-1/2 m-auto bg-pink-500 flex flex-col items-center">
      <h1 className="font-bold text-2xl">Mortage Calculator</h1>
      <label htmlFor="LoanAmount">Loan Amount (INR):</label>
      <input
        type="number"
        className="border border-black"
        id="LoanAmount"
        onChange={(e) => {
          setLoanAmount(e.target.value);
        }}
      />
      <label htmlFor="AnnualInterest">Annual Interest Rate (%)</label>
      <input
        type="number"
        className="border border-black"
        id="AnnualInterest"
        onChange={(e) => {
          setInterestRate(e.target.value);
        }}
      />
      <label htmlFor="LoanTerm">Loan Term (Years)</label>
      <input
        type="number"
        className="border border-black"
        id="LoanTerm"
        onChange={(e) => {
          setLoanTerm(e.target.value);
        }}
      />
      <button
        className="Calculate mt-2.5 bg-indigo-900 text-white w-30"
        onClick={() => {
          validateUserInput(loanAmount, interestRate, loanTerm);
        }}
      >
        Calculate
      </button>
      {errorMessage && <div>Invalid input</div>}
      {result && (
        <div aria-label="result">{`Monthly Payment: ${monthlyPayment}`}</div>
      )}
    </div>
  );
}

export default MortgageCalculator;
