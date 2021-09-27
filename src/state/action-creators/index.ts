import { ActionTypes } from "../action-types";
import { Dispatch, AnyAction } from "redux";
import { Action } from "../actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Types } from "../../common/types";

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

export const setUser = (userData: Types["user"]) => {
    return (dispatch: Dispatch<Action>) => {
        const user: Types["user"] = userData.map((item, key) => {
            return {
                name: item.name,
                id: item.id,
                username: item.username,
                phone: item.phone,
            };
        });
        dispatch({
            type: ActionTypes.GET_USER,
            payload: user,
        });
    };
};

export const getUser = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    const data = fetch("https://jsonplaceholder.typicode.com/users/")
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
        let user: Types["user"];
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
