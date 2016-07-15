import React from "react";
import {render} from "react-dom";
import Info from "./components/info";

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>React Quckstart</h1>
                <Info />
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
