import React from "react";
import {render} from "react-dom";
import Container from "./components/container/container";
import AppNavbar from "./components/navbar/appnavbar";
import Info from "./components/info";

export class App extends React.Component {
    render () {
        return (
            <div>
                <AppNavbar brand="React Quick Start" />
                <Container>
                    <h1>React Quick Start</h1>
                    <Info
                        webpack="Webpack"
                        babel="Babel"
                        eslint="ESLint"
                        react="React"
                        reactbootstrap="React Bootstrap"
                        rctg="React CSS Transition Group"
                        redux="Redux"
                        reduxform="Redux Form"
                        reduxthunk="Redux Thunk"
                        axios="Axios" />
                </Container>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
