import { useState } from "react";

const PlayingWithSetState01 = () => {
  const [number, setNumber] = useState(0);

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

export default PlayingWithSetState01;
