import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
=======

import "./index.css";
>>>>>>> 364a9f2ff1b3fb936ec913b2f3f2888f5246f020

import { Provider } from "react-redux";
import store from "./store/store";

import { RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import router from "./router";
=======
import router from "./store/router";
>>>>>>> 364a9f2ff1b3fb936ec913b2f3f2888f5246f020

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
