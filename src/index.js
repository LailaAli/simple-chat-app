import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider.jsx";
import reducer, { initialState } from "./reducer.jsx";

ReactDOM.render(
   <React.StrictMode>
      {/* Wrap App in StateProvider/data layer
      Pass in initial state
      Pass in reducer
     */}
      <StateProvider initialState={initialState} reducer={reducer}>
         <App />
      </StateProvider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
