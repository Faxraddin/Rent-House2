import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    user:userReducer,
    profile:profileReducer,
});
  
export const store = configureStore({
    reducer: rootReducer,
});
  