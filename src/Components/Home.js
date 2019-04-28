import React, { Component } from "react";
import { Container, Segment, Message, Header } from "semantic-ui-react";

class Home extends Component
{
    render()
    {
        return (
            <div style={{ textAlign: "center" }}>
                <Message color="black">
                    <Message.Header>
                        <Header as="h1" color="blue">Jimmy Satterfield</Header>
                        <Header as="h2" inverted>Fedora Dev</Header>
                    </Message.Header>
                    <Message.Content>
                        <br />
                        <Header as="h3" inverted>I have a passion for puzzles and technology and I channel those passions into my career as a developer.</Header>
                    </Message.Content>
                </Message>
            </div>
        )
    }
}

export default Home;