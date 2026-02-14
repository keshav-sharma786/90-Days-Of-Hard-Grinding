import { createElement } from "react";
import ReactDOM from "react-dom/client";

// We can also give the className attribute in this way also.
// const heading1 = "heading1";

// const heading01 = createElement(
//   "h1",
//   { className: heading1 },
//   "React Element Revision 🚀",
// );

// const heading01 = createElement(
//   h1,
//   { className: "heading1" },
//   "React Element Revision 🚀",
// ); // ! Uncaught ReferenceError: h1 is not defined. it will look for the h1 variable but will not find h1 variable and it will throw this error.

// const heading01 = createElement(
//   "h1",
//   { class: "heading1" },
//   "React Element Revision 01 🚀",
// );

// ! Warning will come but code will work fine ==> listenToRuntimeErrors.js:137 Invalid DOM property `class`. Did you mean `className`

// console.log(heading01);
// root.render(heading01);

// Below is the correct way.
const heading01 = createElement(
  "h1",
  { className: "heading1" },
  "React Element Revision 01 🚀",
);

console.log(heading01);

// JSX: javascript XML: Look like HTML

// JSX --> React.createElement() ==> It is basically the work of babel. Babel basically converts your JSX into React.createElement.

// JSX --> React.createElement() --> ReactElement (JS Object) --> Real DOM (HTML ELEMENT)

// const heading02 = <h1 class="heading02">React Element Revision 02 🚀</h1>;

// console.log(heading02);
// ! Warning will come but code will work fine ==> listenToRuntimeErrors.js:137 Invalid DOM property `class`. Did you mean `className`

const heading02 = <h1 className="heading02">React Element Revision 02 🚀</h1>;

console.log(heading02);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading01 heading02); // ! Error =>  Expected ',', got 'heading02'

//root.render(heading01, heading02); // ! Error: You passed a second argument to root.render(...) but it only accepts one argument. But still it will render the heading01 but not heading02 ==> Always wrap your elements inside a parent container.


// ! React Component is just a function which returns us a JSX.

function App() {
    
}



root.render(heading02);

