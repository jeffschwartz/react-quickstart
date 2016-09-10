import React from "react";

const Info = ({webpack, babel, eslint, react, reactbootstrap, rctg, redux, reduxform, reduxthunk, axios}) => (
    <div>
        <h2>Includes: </h2>
        <ul>
            <li>{react}</li>
            <li>{reactbootstrap}</li>
            <li>{rctg}</li>
            <li>{redux}</li>
            <li>{reduxform}</li>
            <li>{reduxthunk}</li>
            <li>{webpack}</li>
            <li>{babel}</li>
            <li>{eslint}</li>
            <li>{axios}</li>
        </ul>
    </div>
);

export default Info;
