import React from "react";

/**
 * A semantic wrapper around bootstrap's css container-fluid
 */

export default function Container (props) {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    );
};