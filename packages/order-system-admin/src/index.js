// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
// import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";

import render from "@mugglecloud/web-runtime";
import routes from "./config/routes";

render({ routes });

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
