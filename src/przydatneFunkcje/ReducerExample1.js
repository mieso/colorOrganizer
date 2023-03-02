import React from "react";
import { useReducer } from "react";

export default function ReducerExample1() {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber, 0
    );

    return (
        <>
            <div style={{ "display": "flex", "flexDirection": "row", "height": "30px", "alignItems": "center", "marginTop": "20px" }}>
                <h1 style={{ "marginRight": "30px", "width": "40px" }}>{number}</h1>
                <button onClick={() => setNumber(30)} style={{ "marginRight": "10px" }}>+</button>
                <button onClick={() => setNumber(-30)}>-</button>
            </div>
        </>
    )
}