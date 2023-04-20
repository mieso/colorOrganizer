import React, { useState } from "react";

export default function SearchForm(props) {
    const [value, setValue] = useState(props.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button type="submit">Szukaj</button>
        </form>
    );
}