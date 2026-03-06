import { useState } from "react";

const UpdatingStateHavingMultipleCallBacks = () => {
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
          setAge((age) => {
            return age + 1;
          });
          setAge((age) => {
            return age + 1;
          });
        }}
      >
        Increment Age
      </button>
    </>
  );
};

export default UpdatingStateHavingMultipleCallBacks;
