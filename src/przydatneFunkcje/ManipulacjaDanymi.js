import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks.js";

export default function GitHubUser({ login }) {
    const { loading, data, error } = useFetch(
        `https://api.github.com/users/${login}`
    )

    if (loading) return <h1>Wczytywanie...</h1>;
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <div className="githubUser" style={{ marginTop: "100px" }}>
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}



// POBIERANIE DANYCH UŻYTKOWNIKA I WYKORZYSTANIE LOCAL SOTARGE
// const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
// const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// export default function GitHubUser({ login }) {
//     const [data, setData] = useState(
//         loadJSON(`user:${login}`)
//     );

//     useEffect(() => {
//         if (!data) return;
//         if (!data.login === login) return;
//         const { name, avatar_url, location } = data;
//         saveJSON(`user:${login}`, {
//             name,
//             login,
//             avatar_url,
//             location
//         });
//     }, [data]);

//     useEffect(() => {
//         if (!login) return;
//         if (data && data.login === login) return;
//         fetch(`https://api.github.com/users/${login}`)
//             .then(response => response.json())
//             .then(setData)
//             .catch(console.error);
//     }, [login])

//     if (data)
//         return <pre>{JSON.stringify(data, null, 2)}</pre>

//     return null;
// }



// ASYNC I AWAIT
// async function userInfo(githubLogin) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${githubLogin}`);
//         const userData = await response.json();

//         console.log(userData);

//     } catch (error) {
//         console.log(error);
//     }
// }



// WYSYLANIE FORMULARZY
// const formData = new FormData();
// formData.append("nazwaKoloru", titleProps.value);
// formData.append("kolor", colorProps.value);

// fetch("/create/users", {
//     method: "POST",
//     body: formData
// });