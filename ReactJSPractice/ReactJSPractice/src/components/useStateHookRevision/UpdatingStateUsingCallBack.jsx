//?Revising useState Hook in React with the help of react docs
import { useState } from "react";

//~ # If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state.

function UpdatingStateUsingCallBack() {
  const [name, setName] = useState("Keshav");
  const [age, setAge] = useState(21);
  return (
    <>
      <h1 className="font-bold">Name: {name}</h1>
      <h1 className="font-bold">Age: {age}</h1>
      <button
        onClick={() => {
          setName("Namaste React 🚀");
          console.log(name);
        }}
      >
        Change Name
      </button>
      <br />
      <button
        onClick={() => {
          setAge((age) => {
            return age + 1;
          });
          //~what if i do something like this
          // setAge((age) => {
          //   return age + 1;
          // });
          // setAge((age) => {
          //   return age + 1;
          // });
        }}
      >
        Increment Age
      </button>
    </>
  );
}

export default UpdatingStateUsingCallBack;
