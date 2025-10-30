import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(Object) => while rendering onto the dom it becomes a HTML Element.
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log(heading);
// JSX - is not HTML in javascript. It is HTML/XML like syntax.
// This JSX code is transpiled before it reaches the JS Engine. This transpilation is being done by Parcel.Parcel gives the responsibility of this transpilation to a package called Babel.

// Babel is just a javascript compiler.
// JSX => Babel transpiles it to React.createElement => ReactElement(JS Object) => HTMLElement(render)

// React Element (JS Object)
const jsxHeading = (
  <h1 id="heading" className="jsxHeading" tabIndex="1">
    Namaste React Using JSX 🚀
  </h1>
);

console.log(jsxHeading);

// React Component
// Class Based Components - OLD way
// Functional Components - NEW way

// React Functional Compenent => It is just a normal Javascript function only, which returns some JSX Element.
const number = 10000;
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* This is known as React Composiiton */}
      {/* These 3 things are one and the same things */}
      {Title()}
      <Title></Title>
      <Title />
      {heading}
      {/* here inside these curly braces you can run any piece of javascript expressions */}
      <h2>{number + number}</h2>
      <h1 className="headingFunctionalComponent">
        Namaste React Functional Component 🚀
      </h1>
    </div>
  );
};

// now i want to render this Title Component inside this div id container
const Title = () => {
  return <h1 className="title">Namaste Title 🚀</h1>;
};

console.log(HeadingComponent());

const HeadingComponent2 = () => {
  return React.createElement(
    "div",
    { id: "container" },
    React.createElement(
      "h1",
      { id: "headingFunctionalComponent02" },
      "Namaste React Functional Component02 🚀"
    )
  );
};
console.log(HeadingComponent2());
// HeadingComponent and HeadingComponent02 are one and the same thing.

const elem = <span>React Element03 🚀</span>;

// here what i did, i put a react component inside an react element amazing is'nt it ??
const title = (
  <h1 className="container3">
    {elem}
    Namaste React 03 using JSX 🚀
    <HeadingComponent03 />
  </h1>
);

// Simple functions are being hoisted.
// whereas arrow functions are not hoisted.
function HeadingComponent03() {
  return (
    <div id="container3">
      {title}
      <h1>Namaste React Functional Component 03 🚀</h1>
    </div>
  );
}

// It will be trapped inside an infinite Loop.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// your code is readable because you are using JSX, and JSX is not React.
