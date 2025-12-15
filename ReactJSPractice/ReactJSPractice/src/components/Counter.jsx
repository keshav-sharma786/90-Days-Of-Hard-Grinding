import { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <div>
      <h1 className="font-bold text-3xl p-5">React Counter App</h1>
      <h2 className="font-bold text-2xl p-5">Counter: {counterValue}</h2>
      <button
        className="border border-black bg-gray-400 mx-6 w-30 font-bold"
        onClick={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        Increment
      </button>
      <button
        className="border border-black bg-gray-400 mx-6 w-30 font-bold"
        onClick={() => {
          setCounterValue(counterValue - 1);
        }}
      >
        Decrement
      </button>
      <button
        className="border border-black bg-gray-400 mx-6 w-30 font-bold"
        onClick={() => {
          setCounterValue(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
