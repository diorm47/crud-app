import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./App";
import "./index.css";
import { customerReducer } from "./redux/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider
      store={createStore(customerReducer, composeEnhancers(applyMiddleware()))}
    >
      <App />
    </Provider>
  </React.StrictMode>
);
