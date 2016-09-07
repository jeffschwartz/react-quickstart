import React from "react";

export default class Info extends React.Component {
    render () {
        let {webpack, babel, eslint, react, reactbootstrap, rctg, redux, reduxform, reduxthunk} = this.props;
        return (
            <div>
                <h2>Includes:</h2>
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
                </ul>
            </div>
        );
    }
}
