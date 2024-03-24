import Alert from "./components/Alerts";
import Button from "./components/Button";
import JsonViewer from "./components/JsonViewer";
import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const handleButtonClick = () => {
        alert("Yo yo");
    };

    return (
        <div>
            <Alert>
                Hello <span>World</span>
            </Alert>
            <Button
                text="Press me"
                onClick={handleButtonClick}
                colour="primary"
            />
        </div>
    );

    // return (
    //     <div>
    //         <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    //         <JsonViewer />
    //     </div>
    // );
}

export default App;
