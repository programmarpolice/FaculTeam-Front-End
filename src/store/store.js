import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import api from "./api";
import authReducer from "../features/account/authSlice";
=======

import api from "./api";
//import authReducer from "../features/account/authSlice";
>>>>>>> 364a9f2ff1b3fb936ec913b2f3f2888f5246f020

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
<<<<<<< HEAD
    auth: authReducer,
=======
    //auth: authReducer,
>>>>>>> 364a9f2ff1b3fb936ec913b2f3f2888f5246f020
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
