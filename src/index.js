import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // During development it will render components twice and will check if we use outdated API's
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
