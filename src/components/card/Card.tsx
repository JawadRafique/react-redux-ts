import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Types } from "../../common/types";
import { actionCreators, State } from "../../state";

export const Card = () => {
    const dispatch = useDispatch();
    const { getUser } = bindActionCreators(actionCreators, dispatch);
    const user: Types["user"] = useSelector((state: State) => state.user);
    useEffect(() => {
        getUser();
    }, []);
    console.log(user);
    return (
        <>
            <div>
                <button onClick={getUser}>Get User</button>
            </div>
            <div>
                {
                    user.length >= 1 && (
                        <>
                            {user.map((item, key) => {
                                return (
                                    <ul key={key}>
                                        <li>name: {item.id}</li>
                                        <li>name: {item.name}</li>
                                        <li>name: {item.phone}</li>
                                        <li>name: {item.username}</li>
                                    </ul>
                                );
                            })}
                        </>
                    )
                    // : (
                    //     <ul>
                    //         <li>name: {userData.id}</li>
                    //         <li>name: {userData.name}</li>
                    //         <li>name: {userData.phone}</li>
                    //         <li>name: {userData.username}</li>
                    //     </ul>
                    // )
                }
            </div>
        </>
    );
};
