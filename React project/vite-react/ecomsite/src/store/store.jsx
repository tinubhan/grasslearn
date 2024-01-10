import rootReducer from "./reducer/CombinedReducer";
import { configureStore } from "@reduxjs/toolkit"

export const store=configureStore({reducer:rootReducer,devTools:true})