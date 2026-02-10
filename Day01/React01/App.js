// My First React Code.
// How can we create a h1 tag inside the React.
// this empty object is basically the place where you will give attributes to your tags.
// third argument is basically the childern of that tag/react element that we are basically creating with the help of the React.createElement
// Nested Elements.
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    // for giving more than 2 children, you have to convert React.createElement into an array.siblings
    // i wanted to have both h1 and h2 tags as siblings.
    [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am a h2 tag"),
    ],
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

function h1() {
  return React.createElement("h1", null, "hello world");
}

function parent1() {
  console.log(React.createElement(h1));
  return React.createElement(h1);
}

// JSX.

console.log(parent); // A simple javascript object only.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React",
);

// this heading is a react element which is a simple javascript object only.
console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

console.log(React.createElement(parent1));
root.render(React.createElement(parent1));
