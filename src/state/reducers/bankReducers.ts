import { ActionTypes } from "../action-types/index";
import { Action } from "../actions/index";

const initialState = 99;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.DEPOSIT:
            return state + action.payload;
        case ActionTypes.WITHDRAW:
            return state - action.payload;
        case ActionTypes.BANKRUPT:
            return 0;
        default:
            return state;
    }
};

export default reducer;
