import { useContext } from "react";
import { myStoreContext } from "./ContextProvider";

function ContextChildren02() {
  //!step3 => Consume a context using useContext Hook, it accepts a context object (value returned from createContext).
  let data = useContext(myStoreContext);
  console.log(data);
  let { data1, data2 } = data;
  return (
    <div>
      <h1>
        Child 2 Component: {data1} {data2}
      </h1>
    </div>
  );
}

export default ContextChildren02;
