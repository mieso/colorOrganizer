import React, { useState } from "react";
import GitHubUser from "./przydatneFunkcje/ManipulacjaDanymi";
import SearchForm from "./przydatneFunkcje/SearchForm";

export default function UserSearch() {
    const [login, setLogin] = useState("mieso");

    return (
        <>
            <SearchForm value={login} onSearch={setLogin} />
            <GitHubUser value={login} />
        </>
    );
}