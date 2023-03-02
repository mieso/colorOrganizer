import React from "react";
import { useReducer } from "react";

export default function Checkbox() {
    const [checked, toggle] = useReducer(checked => !checked, false);

    return (
        <div style={{ "marginTop": "50px" }}>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked ? "checked" : "not checked"}
        </div>
    )
}
