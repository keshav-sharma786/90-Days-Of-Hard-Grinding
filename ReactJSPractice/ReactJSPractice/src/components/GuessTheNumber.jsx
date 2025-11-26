import { useEffect, useState } from "react";

// let us try to conquer this problem now
function GuessTheNumber() {
  const [numberInput, setNumberInput] = useState("");
  // const [isGuessTrue, setIsGuessTrue] = useState(true);
  const [message, setMessage] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [attempts, setAttempts] = useState(0);
  // console.log(numberInput);
  // Function to handle guess checking
  const handleGuess = (numberInput, randomNumber) => {
    // validating the number being input by the user
    // if (!Number.isFinite(numberInput)) {
    //   return false;
    // } else {
    //   return true;
    // }
    console.log(numberInput);
    console.log(randomNumber);
    const numInput = Number(numberInput);
    if (!Number.isFinite(numInput) || numInput > 100 || numInput < 1) {
      setMessage("Please enter a number between 1 and 100");
      return;
    } else if (numInput > randomNumber) {
      setMessage("Too high! Try again");
    } else if (numInput < randomNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage(
        `Congratulations! You guessed the number in ${attempts + 1} attempts.`
      );
      return;
    }
    setAttempts(attempts + 1);
  };

  // Function to reset the game
  const resetGame = () => {
    setNumberInput("");
    setMessage("");
    
    setAttempts(0);
    getRandom(1, 100);
  };
  // let us first of all basically create a function which will generate a rendom number between 1 to 100 inclusive
  const getRandom = (min, max) => {
    const floatRandom = Math.random();
    const difference = max - min;
    const random = Math.round(difference * floatRandom);
    const randomWithinRange = random + min;
    setRandomNumber(randomWithinRange);
  };
  useEffect(() => {
    // Impure functions must be called inside useEffect Hook
    getRandom(1, 100);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        value={numberInput}
        onChange={
          // console.log(typeof(e.target.value))
          (e) => {
            // const num = Number(e.target.value);
            // console.log(typeof(num));
            setNumberInput(e.target.value);
          }
        }
      />
      <br />
      <div className="flex gap-4">
        <button
          className="bg-gray-400 h-10 w-40"
          onClick={() => {
            handleGuess(numberInput, randomNumber);
          }}
        >
          Check Guess
        </button>
        <button
          className="bg-gray-400 h-10 w-40"
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
      </div>
      {/* {!isGuessTrue ? (
        <p>Please enter a number between 1 and 100</p>
      ) : (
        <p>good try</p>
      )} */}
      <p>{message}</p>
    </div>
  );
}

export default GuessTheNumber;
