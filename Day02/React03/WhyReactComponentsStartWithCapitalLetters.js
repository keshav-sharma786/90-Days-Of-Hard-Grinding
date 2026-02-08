import ReactDOM from "react-dom/client";
import { createElement } from "react";

// Why the first Letter of the React Components Should be capital => Well this is to differentiate your custom components from in-built HTML elements

// When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <h1> and results in a string 'div' or 'h1'passed to React.createElement's first argument.

// Types that start with a capital letter correspond to a component defined or imported in your JS file

// If you donot start your component name with a capital letter, then React will render a corresponding HTML tag instead.This remains the same for component names that do'nt correspond to valid HTML element names.

// function h1() {
//   console.log(<h1>Hello World</h1>);
//   return <h1>Hello World</h1>;
// }

// function App() {
//   console.log(<h1 />);
//   return <h1 />;
// }

// function heading() {
//   console.log(<h1>Hello World</h1>);
//   return <h1>Hello World</h1>;
// }

// function App() {
//   console.log(<heading />);
//   return <heading />;
// }

// When you use JSX, you must start a tag with a capital letter to render your own custom component. In other words, <Something /> is equivalent to createElement(Something), but <something /> (lowercase) is equivalent to createElement('something') (note it’s a string, so it will be treated as a built-in HTML tag).

function Heading() {
  console.log(<h1>Hello World</h1>);
  return <h1>Hello World</h1>;
}

function App() {
  console.log(<Heading />);
  return <Heading />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
