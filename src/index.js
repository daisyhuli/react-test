import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import Routes from "./router";

console.log("process.env ===> ", process.env);

const render = Component =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(Routes);
