import * as React from "react";
import {Component} from "react";
import "./App.css";
import TitleBar from "./title/TitleBar";
import HeaderBar from "./header/HeaderBar";
import Tweet from "./tweet/Tweet";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <HeaderBar />
                <TitleBar/>
                <Tweet/>
            </div>
        );
    }
}

export default App;
