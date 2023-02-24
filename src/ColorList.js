import React from "react";
import Color from "./Color.js";
import { useColors } from "./color-hooks.js";

export default function ColorList() {
    const { colors } = useColors();

    if (!colors.length) return <div>Brak kolorów. (Dodaj kolor)</div>;
    return (
        <div className="color-list">
            {colors.map((color) => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}
