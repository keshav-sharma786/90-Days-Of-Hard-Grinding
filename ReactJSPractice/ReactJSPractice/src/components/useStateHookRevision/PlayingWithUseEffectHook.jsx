import { useState, useEffect } from "react";

const PlayingWithUseEffectHook = () => {
  const [number, setNumber] = useState(0);

  console.log("Hello world");

  useEffect(() => {
    console.log("useEffect called");
  }, [number]);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          //~Predict the output
          //~the number will be incremented by 6
          setNumber(number + 5);
          setNumber((n) => {
            return n + 1;
          });
        }}
      >
        Increase the number
      </button>
    </>
  );
};

export default PlayingWithUseEffectHook;
