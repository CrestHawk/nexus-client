import React from "react";

function ListGroup() {
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    return (
        // This <> is a Fragment in react. Use this when you need to wrap multiple elements for your component to return
        // without the need of adding an extra element such as an outer div for your component
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map(item => (
                    <li className="list-group-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
