import React from "react";

export default class Info extends React.Component {
    render () {
        let {webpack, babel} = this.props;
        return (
            <h2>Includes {webpack} and {babel}</h2>
        );
    }
}
