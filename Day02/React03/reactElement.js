import { createElement } from "react";
import ReactDOM from "react-dom/client";

const simpleReactElement = createElement(
  "h1",
  { className: "heading" },
  "I am simple React Element",
  // creating a second children of this simpleReactElementHeading
  createElement("h2", { className: "headingH2" }, "I am h2 Children"),
);

console.log(simpleReactElement);

function Greeting(props) {
  console.log(props);
  const { name } = props;
  console.log(
    createElement(
      "h1",
      { className: "greeting" },
      "Hello",
      createElement("i", null, name),
      ". Welcome",
    ),
  );
  return createElement(
    "h1",
    { className: "greeting" },
    "Hello",
    createElement("i", null, name),
    ". Welcome",
  );
}

function App() {
  console.log(createElement(Greeting, { name: "Keshav" }));
  return createElement(Greeting, { name: "Keshav" });
}

console.log(<Greeting name="Keshav" />);
console.log(<App />);
// Above Line is same as that of below line
console.log(createElement(App));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
// Above line is as same as the below line
root.render(createElement(App));
