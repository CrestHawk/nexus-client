import React, { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    closeAlertButton: () => void;
}

const Alert = ({ children, closeAlertButton }: AlertProps) => {
    return (
        <div className="alert alert-primary alert-dismissible fade show">
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={closeAlertButton}
            ></button>
        </div>
    );
};

export default Alert;
