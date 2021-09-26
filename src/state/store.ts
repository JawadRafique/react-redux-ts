import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk as ThunkMiddleware)
);
