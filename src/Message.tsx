import React from "react";

// PascalCasing - Always use this for React components
function Message() {
    // JSX: Javascript XML

    const name = "Tom";

    if (name) {
        return <h1>Hello {name}</h1>;
    }

    return <h1>Hello World</h1>;
}

export default Message;
