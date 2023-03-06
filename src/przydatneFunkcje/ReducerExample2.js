import React from "react";
import { useReducer } from "react";
import { v4 } from "uuid";

const firstUser = {
    id: v4(),
    firstName: "Jan",
    lastName: "Nowak",
    city: "Kraków",
    state: "Małopolskie",
    email: "jannowak@gmail.com",
    admin: false
}



export default function ReducerExample2() {
    const [user, setUser] = useReducer(
        (user, newDetails) => ({ ...user, ...newDetails }),
        firstUser
    );

    return (
        <div style={{ "marginBottom": "50px" }}>
            <h1>
                {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
            </h1>
            <p>Adres e-mail: {user.email}</p>
            <p>
                Lokalizacja: {user.city}, {user.state}
            </p>
            <button onClick={() => {
                setUser({ admin: true });
            }}>Nadaj uprawnienia administratora</button>
        </div>
    )
}