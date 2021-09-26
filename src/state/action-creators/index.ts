import { ActionTypes } from "../action-types";
import { Dispatch, AnyAction } from "redux";
import { Action } from "../actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { User } from "../../common/types";

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.DEPOSIT,
            payload: amount,
        });
    };
};

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.WITHDRAW,
            payload: amount,
        });
    };
};

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.BANKRUPT,
        });
    };
};

export const setUser = (userData: User) => {
    return (dispatch: Dispatch<Action>) => {
        // console.log("user function", user);
        const user: User = {
            name: userData.name,
            id: userData.id,
            username: userData.username,
            phone: userData.phone,
        };
        dispatch({
            type: ActionTypes.GET_USER,
            payload: user,
        });
    };
};

export const getUser = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    const data = fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(
            (res) => {
                return res.json();
            },
            (err) => console.log(err)
        )
        .then((data) => {
            // console.log("fetch data ", data);
            return data;
        });
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let user: User;
        return new Promise<void>(async (resolve) => {
            await data
                .then((result) => {
                    user = result;
                })
                .then(
                    () => dispatch(setUser(user))
                    // dispatch({
                    //     type: ActionTypes.GET_USER,
                    //     payload: user,
                    // })
                );
            // dispatch(setUser(user));
            // dispatch({
            //     type: ActionTypes.GET_USER,
            //     payload: user,
            // });
            // console.log("Login in progress");
            // console.log("data ", user);
        });
    };
};
// return fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(
//         (res) => {
//             const data = res.json();
//             return data;
//         },
//         (err) => console.log(err)
//     )
//     .then((data) =>
//         dispatch({
//             type: ActionTypes.GET_USER,
//             payload: { ...data },
//         })
//     );
