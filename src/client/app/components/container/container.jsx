import React from "react";

/**
 * A semantic wrapper around bootstrap's css container
 */

export default function Container (props) {
    return (
        <div className="container">
            {props.children}
        </div>
    );
};