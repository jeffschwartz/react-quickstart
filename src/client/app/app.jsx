import React from "react";
import {render} from "react-dom";
import Info from "./components/info";

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>React Quick Start</h1>
                <Info webpack="Webpack" babel="Babel" eslint="ESLint" />
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
