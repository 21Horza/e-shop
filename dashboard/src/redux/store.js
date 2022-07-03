import { configureStore, combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./adminRedux";
import typeReducer from "./typeRedux";
import productReducer from "./productRedux";
import userReducer from "./userRedux";

const rootReducer = combineReducers({ 
  admin: adminReducer, 
  type: typeReducer, 
  product: productReducer, 
  user: userReducer
});

export const store = configureStore({
  reducer: rootReducer 
});
