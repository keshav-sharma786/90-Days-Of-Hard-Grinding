import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    // for giving more than 2 children, you have to convert React.createElement into an array.siblings
    // i wanted to have both h1 and h2 tags as siblings.
    [
      React.createElement("h1", {}, "This is  React 🚀"),
      React.createElement("h2", {}, "I am a h2 tag"),
    ]
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

// JSX.

console.log(parent); // A simple javascript object only.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

// this heading is a react element which is a simple javascript object only.
console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
