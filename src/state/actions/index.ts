import { ActionTypes } from "../action-types/index";
import { User } from "../../common/types";

interface DepositAction {
    type: ActionTypes.DEPOSIT;
    payload: number;
}
interface WithdrawAction {
    type: ActionTypes.WITHDRAW;
    payload: number;
}
interface BankruptAction {
    type: ActionTypes.BANKRUPT;
}

interface GetUserAction {
    type: ActionTypes.GET_USER;
    payload: User;
}

export type Action =
    | DepositAction
    | WithdrawAction
    | BankruptAction
    | GetUserAction;
