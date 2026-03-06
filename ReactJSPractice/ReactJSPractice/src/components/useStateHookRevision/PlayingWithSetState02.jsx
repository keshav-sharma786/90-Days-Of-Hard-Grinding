import { useState } from "react";

const PlayingWithSetState02 = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => {
            return n + 1;
          });
          setNumber(42);
        }}
      >
        Increase the number
      </button>
    </>
  );
};

export default PlayingWithSetState02;
