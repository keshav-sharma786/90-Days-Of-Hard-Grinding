import { createElement } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

// function a() {
//   return <h1>Hello app!</h1>;
// }
// function app() {
//   return <h1>Hello app!</h1>;
// }

//console.log(<a />);
// $$typeof: Symbol(react.transitional.element);
// key: null;
// props: {
// }
// type: "a";
// _owner: null;

//root.render(<a />); // one anchor tag will be formed in a dom.

//console.log(<app />);
// $$typeof: Symbol(react.transitional.element);
// key: null;
// props: {
// }
// type: "app";
// _owner: null;
//root.render(<app />); // ! Error: The tag <app> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.

// Why Adjacent JSX elements must be wrapped in an enclosing tag.

// root.render(createElement("h1", null, "Heading 1"), createElement("h1", null, "heading1"));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
