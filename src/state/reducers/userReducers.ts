import { User } from "../../common/types";
import { ActionTypes } from "../action-types/index";
import { Action } from "../actions/index";

let initialState = {
    id: 0,
    name: "",
    username: "",
    phone: 0,
};

const reducer = (state: User = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_USER:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
