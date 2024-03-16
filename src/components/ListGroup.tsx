import React, { MouseEvent } from "react";

function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    // Event handler
    const handleClick = (event: MouseEvent) => console.log(event)

    return (
        // This <> is a Fragment in react. Use this when you need to wrap multiple elements for your component to return
        // without the need of adding an extra element such as an outer div for your component
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
