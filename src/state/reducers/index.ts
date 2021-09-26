import { combineReducers } from "redux";
import bankReducers from "./bankReducers";
import userReducers from "./userReducers";

const reducers = combineReducers({
    bank: bankReducers,
    user: userReducers,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
