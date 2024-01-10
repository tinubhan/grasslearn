import { combineReducers } from "redux";
import { CounterReducer } from "./counterReducer";
import { UserReducer } from "./userReducer";

const rootReducer=combineReducers({
    counts: CounterReducer,
    user: UserReducer
})

export default rootReducer