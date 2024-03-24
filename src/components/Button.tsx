import React from "react";

interface ButtonProps {
    text: string;
    colour?: string;
    onClick: () => void;
}

function Button({ text, onClick, colour = "primary" }: ButtonProps) {
    return (
        <button type="button" className={"btn btn-" + colour} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
