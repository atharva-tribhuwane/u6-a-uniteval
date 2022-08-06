import { legacy_createStore as createstore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { compose } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    Login:reducer
})

export const store = createstore(rootReducer, applyMiddleware(thunk));

store.Subscriber = () =>{
    console.log("State:", store.getState());
}
