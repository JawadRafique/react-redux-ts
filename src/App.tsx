import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators, State } from "./state";

interface IState {
    deposit: number;
    withdraw: number;
}

function App() {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
        actionCreators,
        dispatch
    );
    const amount = useSelector((state: State) => state.bank);

    const [inputAmount, setInputAmount] = useState<IState>({
        deposit: 0,
        withdraw: 0,
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputAmount({
            ...inputAmount,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <h3>{amount}</h3>
            <input
                type="number"
                name="deposit"
                placeholder="0"
                value={inputAmount.deposit}
                onChange={handleInputChange}
            />
            <button
                onClick={() => {
                    depositMoney(Math.floor(inputAmount.deposit));
                    inputAmount.deposit = 0;
                }}
            >
                Deposit
            </button>
            <br></br>
            <input
                type="number"
                name="withdraw"
                value={inputAmount.withdraw}
                onChange={handleInputChange}
            />
            <button
                onClick={() => {
                    withdrawMoney(Math.floor(inputAmount.withdraw));
                    inputAmount.withdraw = 0;
                }}
            >
                Withdraw
            </button>
            <br></br>
            <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
    );
}

export default App;
