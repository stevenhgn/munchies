import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// let express = require("express");
// let app = express();

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "path/to/your/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });
var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
