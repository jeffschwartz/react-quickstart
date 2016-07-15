import React from "react";
import {render} from "react-dom";

export default class Info extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let {webpack, babel} = this.props;
        return (
            <h2>Includes {webpack} and {babel}</h2>
        );
    }
}
