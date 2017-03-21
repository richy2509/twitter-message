import * as React from "react";
import {Component} from "react";
import './headerBar.css'

class HeaderBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: require('../../resources/image/devoxx.png')
        }
    }

    render() {
        return (
            <div className="App-header">
                <img src={this.state.logo} className="App-logo" alt="logo"/>
                <h2>Bienvenue au Devoxx 2017</h2>
            </div>
        )
    }

}

export default HeaderBar;