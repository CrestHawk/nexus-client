import React, { useState } from "react";
import styles from "./ListGroup.module.css";

interface ListGroupProps {
    items: Array<string>;
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    // Use state returns an array.
    // The first element in the returned array is the state value that represents the current state
    // The second element is a reference to the state setter function
    // So here we are using Typescript destructuring to grab the 2 references returned from useState and then assign them to individual
    // variables called selectedIndex and setSelectedIndex
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        // This <> is a Fragment in react. Use this when you need to wrap multiple elements for your component to return
        // without the need of adding an extra element such as an outer div for your component
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className={[styles.listGroup, styles.container].join(" ")}>
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
