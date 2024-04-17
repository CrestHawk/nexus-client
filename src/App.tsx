import Alert from "./components/Alerts";
import Button from "./components/Button";
import JsonViewer from "./components/JsonViewer";
import ListGroup from "./components/ListGroup/ListGroup";
import React, { useState } from "react";

function App() {
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const [alertVisible, setAlertVisibility] = useState(false);

    const handleButtonClick = () => {
        setAlertVisibility(true);
    };

    const handleCloseAlert = () => {
        setAlertVisibility(false);
    };

    // return (
    //     <div>
    //         {alertVisible && (
    //             <Alert closeAlertButton={handleCloseAlert}>My alert</Alert>
    //         )}
    //         <Button
    //             text="Press me"
    //             onClick={handleButtonClick}
    //             colour="primary"
    //         />
    //     </div>
    // );

    return (
        <>
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
        </>
    );
}

export default App;
