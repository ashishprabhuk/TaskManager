import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./Apps";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// )