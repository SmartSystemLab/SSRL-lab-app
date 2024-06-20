import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DataContext from "./components/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
);
