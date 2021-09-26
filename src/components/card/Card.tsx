import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { User } from "../../common/types";
import { actionCreators, State } from "../../state";

export const Card = () => {
    const [userData, setUserData] = useState<User>();
    const dispatch = useDispatch();
    const { getUser } = bindActionCreators(actionCreators, dispatch);
    const user = useSelector((state: State) => state.user);
    useEffect(() => {
        getUser();
    }, []);
    // const userData:User = user;
    console.log("user", user);
    return (
        <div>
            <button onClick={getUser}>Get User</button>
            {user && (
                <ul>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.phone}</li>
                </ul>
            )}
        </div>
    );
};
