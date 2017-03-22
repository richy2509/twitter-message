import * as React from "react";
import {Component} from 'react';

class GetTweet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetchedTweets: []
        }
    }

    componentDidMount() {
        this.setState((prevState, props) => ({
            fetchedTweets: props.tweets
        }))
    }

    render() {
        let rows = [];
        this.state.fetchedTweets.slice(0, this.props.maxDisplay).forEach((tweet) => {
            rows.push(
                <li key={""+ new Date().getTime() + tweet.key} className="tweet">
                    <span>{tweet.key}</span>
                    <p>{tweet.label}</p>
                    <img src={tweet.image} alt="" className="tweet-img"/>
                </li>
            )
            ;
        });

        return (
            <ul> {rows} </ul>
        )
    }

}

export default GetTweet;