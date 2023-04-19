import React from 'react';
import { FixedSizeList } from "react-window";

const { faker } = require('@faker-js/faker');
const bigList = [...Array(5000)].map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}));

// Lista
// export default function List({ data = [], renderItem, renderEmpty }) {
//     return !data.length ? (
//         renderEmpty
//     ) : (
//         <ul>
//             {data.map((item, i) => (
//                 <li key={i}>{renderItem(item)}</li>
//             ))}
//         </ul>
//     );
// }



// Lista wirtualizowana
export default function List() {
    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{ display: "flex" } }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width={50}
            />
            <p>
                {bigList[index].name} - {bigList[index].email}
            </p>
        </div>
    );

    return (
        <FixedSizeList
            height={400}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}
            style={{ marginTop: 100 }}
        >
            {renderRow}
        </FixedSizeList>
    );
}