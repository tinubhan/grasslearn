import { productReducer } from "./ProductReducer";
import { userReducer } from "./userReducer";
import {combineReducers} from "redux"


const rootReducer=combineReducers({
    cart:productReducer,
    user:userReducer
})

export default rootReducer