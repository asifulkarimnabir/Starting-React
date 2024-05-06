import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// function MyApp() {
//   return <h1>My new react project.</h1>;
// }
const add = " & search";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  add
);

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
