import React, { Component } from "react";
import { Container, Segment, Message, Header } from "semantic-ui-react";

class Home extends Component
{
    render()
    {
        return (
            <Message color="black" style={{ textAlign: "center", width: "100%" }} className="small">
                <Message.Header>
                    <Header as="h1" color="blue">Jimmy Satterfield</Header>
                    <Header as="h2" inverted>Fedora Dev</Header>
                </Message.Header>
                <Message.Content>
                    <br />
                    <Header as="h3" inverted>I have a passion for puzzles and technology that I channel into my career as a developer.</Header>
                </Message.Content>
            </Message>
        );
    }
}

export default Home;