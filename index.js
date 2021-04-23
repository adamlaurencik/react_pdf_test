const express = require("express");
const app = express();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ReactPDF = require("@react-pdf/renderer");
const Component = require("./app.jsx");

console.log(Component);

ReactPDF.render(React.createElement(Component), `${__dirname}/example.pdf`);
