import React, { Component } from "react";
import { Message, Header, Image, Icon, Button, Segment, Card } from "semantic-ui-react";
import simplyRoleplayImage from "../Images/simplyRoleplay.png";
import expressImage from "../Images/express Icon.png";

class RoleplayWebsite extends Component
{
    onClick = to =>
    {
        window.open(to, "_blank").focus();
    }

    render()
    {
        const learnedSkills = ["Infinite Scroll", "Semantic UI", "Mongodb"];
        return (
            <Message color="black">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">Roleplay Website</Header>
                </Message.Header>
                <Message.Content className="scrolling">
                    <Segment inverted style={{ textAlign: "center" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://nodejs.org/en/")} primary><Icon name="node js" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://reactjs.org/")} primary><Icon name="react" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://www.mongodb.com/")} primary><Icon name="leaf" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://git-scm.com/")} primary><Icon name="git square" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://expressjs.com/")} primary><Image src={expressImage} /></Button>
                        </Button.Group>
                    </Segment>
                    <Image src={simplyRoleplayImage} className="project-image" />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Idea</Header></Message.Header>
                        <Message.Content>
                            The large community of roleplayers have adopted Discord as their main roleplay system.
                            This website is geared as a replacement for that system and provides a platform with features focused around roleplay.
                            In this site, you can create characters with their own backstories and etc. You can then apply that character to many stories
                            to start roleplaying as that character in them. Alternatively, you can create a story yourself that other people can apply their characters
                            to start roleplaying.
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
                <Segment inverted style={{ textAlign: "center" }}>
                    <Button.Group>
                        <Button icon onClick={event => this.onClick("https://github.com/FedoraGameDev/roleplay")} primary><Icon name="github" size="huge" /></Button>
                        <Button icon onClick={event => this.onClick("http://simply-roleplay.tk")} primary><Icon name="at" size="huge" /></Button>
                    </Button.Group>
                </Segment>
            </Message>
        );
    }
}

export default RoleplayWebsite;