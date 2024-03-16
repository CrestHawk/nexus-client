import React from "react";
import { JSONTree } from "react-json-tree";

function JsonViewer() {
    const jsonData = {
        id: 1,
        name: "Product A",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 99.99,
        details: {
            dimensions: {
                width: 10,
                height: 15,
                depth: 5,
            },
            weight: 2.5,
            manufacturer: "Company XYZ",
            availability: {
                inStock: true,
                quantity: 50,
            },
        },
        reviews: [
            {
                id: 101,
                user: "User1",
                rating: 4.5,
                comment: "Great product! Very satisfied.",
                date: "2024-03-16",
            },
            {
                id: 102,
                user: "User2",
                rating: 3.8,
                comment: "Could be better, but still good value.",
                date: "2024-03-15",
            },
        ],
        similarProducts: [
            {
                id: 2,
                name: "Product B",
                price: 149.99,
            },
            {
                id: 3,
                name: "Product C",
                price: 79.99,
            },
        ],
    };

    return (
        <>
            <h1>Product Specification:</h1>
            <JSONTree data={jsonData} />
        </>
    );
}

export default JsonViewer;
