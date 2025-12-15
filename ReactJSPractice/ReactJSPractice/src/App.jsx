import EvenOrOddChecker from "./components/EvenOrOddChecker";
import GuessTheNumber from "./components/GuessTheNumber";
import LeapYear from "./components/LeapYear";
import MortageCalculator from "./components/MortageCalculator";
import { NamedExport } from "./components/ImportExport";
import DefaultExport from "./components/ImportExport";

const App = () => {
  return (
    <>
      <NamedExport />
      <DefaultExport />
    </>
  );
};

export default App;
