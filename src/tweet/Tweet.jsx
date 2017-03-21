import * as React from "react";
import {Component} from 'react';
import './tweet.css';
import AddTweet from "./AddTweet";
import GetTweet from "./GetTweet";

class Tweet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: "./images/devoxx.png",
            tweets: [],
            count: 0,
            maxDisplay: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            tweets: this.fetchTweets()
        })
    }

    fetchTweets() {
        return [
            {key: "#1", label: "Message 1", image: this.state.logo},
            {key: "#2", label: "Message 2", image: this.state.logo},
            {key: "#3", label: "Message 3", image: this.state.logo},
            {key: "#4", label: "Message 4", image: this.state.logo},
            {key: "#5", label: "Message 5", image: this.state.logo},
            {key: "#6", label: "Message 6", image: this.state.logo},
            {key: "#7", label: "Message 7", image: this.state.logo},
            {key: "#8", label: "Message 8", image: this.state.logo},
            {key: "#9", label: "Message 9", image: this.state.logo},
            {key: "#10", label: "Message 10", image: this.state.logo}
        ]
    }

    handleClick() {
        this.setState(prevState =>
            (prevState.tweets
                .unshift(
                    {key: new Date().getTime() + "r", label: "New", image: this.state.logo}
                )
            )
        );
        this.setState(prevState => ({
            count: (prevState.count + 1)
        }))
    }

    render() {

        return (
            <div className="tweet-container">
                <div className="tweet-add">
                    <button onClick={this.handleClick}>
                        {this.state.count}
                    </button>
                </div>
                <div className="tweet-list">
                    <p>Liste des tweets : {this.state.tweets.length}</p>
                    <GetTweet tweets={this.state.tweets} maxDisplay={this.state.maxDisplay}/>
                </div>
            </div>
        )
    }

}

export default Tweet;