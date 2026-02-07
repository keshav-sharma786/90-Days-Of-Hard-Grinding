const heading1 = React.createElement("h1", null, "Namaste React 🚀");

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
// ! Another way 
root.render(React.createElement("h1", null, "Namaste React2 🚀"));


