import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
