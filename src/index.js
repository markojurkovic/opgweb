import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import AppWithRouter from "./components/AppWithRouter";

ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
registerServiceWorker();
