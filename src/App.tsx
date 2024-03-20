import JsonViewer from "./components/JsonViewer";
import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
            <JsonViewer />
        </div>
    );
}

export default App;
