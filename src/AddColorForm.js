import React from "react";
import { useInput } from "./hooks.js";
import { useColors } from "./color-hooks.js";

export default function AddColorForm() {
    const [titleProps, resteTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = (e) => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resteTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="Nazwa koloru..."
                required
            />
            <input {...colorProps} type="color" required />
            <button>DODAJ</button>
        </form>
    );
}
