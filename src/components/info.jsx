import React from "react";

export default class Info extends React.Component {
    render () {
        let {webpack, babel, eslint} = this.props;
        return (
            <div>
                <h2>Includes:</h2>
                <ul>
                    <li>{webpack}</li>
                    <li>{babel}</li>
                    <li>{eslint}</li>
                </ul>
            </div>
        );
    }
}
