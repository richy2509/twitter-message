import * as React from "react";
import {Component} from "react";
import "./App.css";
import TitleBar from "./title/TitleBar";
import HeaderBar from "./header/HeaderBar";
import Tweet from "./tweet/Tweet";
import {Col, Grid, Row} from "react-bootstrap";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        {/*<Grid>
         <Row className="show-grid">
         <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
         </Row>

         <Row className="show-grid">
         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
         <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
         </Row>

         <Row className="show-grid">
         <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
         </Row>

         <Row className="show-grid">
         <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
         <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
         </Row>
         </Grid>*/}
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
