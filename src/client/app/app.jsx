import {render} from "react-dom";
import Container from "./components/container/container";
import AppNavbar from "./components/navbar/appnavbar";
import PageHeader from "react-bootstrap/lib/PageHeader";
import Info from "./components/info";

const App = () => (
    <div>
        <AppNavbar brand="React Quick Start" />
        <Container>
            <PageHeader>React Quick Start</PageHeader>
            <p>A ReactJS Quick Start project that supports JavaScript ES7 transpilation to ES5 through Babel, linting with ESLint, and bundling via Webpack.</p>
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

render(<App />, document.getElementById("app"));
