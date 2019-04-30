import React, { Component } from "react";
import { Message, Header, Segment, Button, Image, Card } from "semantic-ui-react";
import dawnOfFruition from "../Images/Ireena.png";
import unityLogo from "../Images/UnityLogo.svg";


class Deep extends Component
{
    render()
    {
        const learnedSkills = ["Geometry Generation"];

        return (
            <Message color="black">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">Deep</Header>
                </Message.Header>
                <Message.Content className="scrolling">
                    <Segment inverted style={{ textAlign: "center" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://unity.com/")} primary>
                                <Image style={{ filter: "invert(100%)" }} src={unityLogo} className="techstack-logo" />
                            </Button>
                        </Button.Group>
                    </Segment>
                    <Image src={dawnOfFruition} className="project-image" style={{ marginBottom: "-100px" }} />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Idea</Header></Message.Header>
                        <Message.Content>
                            Dawn of Fruition is a game made in Unity.
                        </Message.Content>
                    </Message>
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Knowledge Learned</Header></Message.Header>
                        <Message.Content>
                            <Card.Group>
                                {
                                    learnedSkills.map((skill, index) => (
                                        <Card key={index} style={{ width: "auto", padding: "5px" }}>{skill}</Card>
                                    ))
                                }
                            </Card.Group>
                        </Message.Content>
                    </Message>
                </Message.Content>
            </Message>
        );
    }
}

export default Deep;