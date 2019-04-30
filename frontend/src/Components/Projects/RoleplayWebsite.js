import React, { Component } from "react";
import { Message, Header, Image, Icon, Button, Segment, Card } from "semantic-ui-react";
import simplyRoleplayImage from "../Images/simplyRoleplay.png";
import expressImage from "../Images/express Icon.png";
import firebaseImage from "../Images/firebase.svg";

class RoleplayWebsite extends Component
{
    onClick = to =>
    {
        window.open(to, "_blank").focus();
    }

    render()
    {
        const learnedSkills = ["Infinite Scroll", "Semantic UI", "No-SQL", "CRUD", "Modular Components", "Website Deployment"];

        return (
            <Message color="black">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">Simply Roleplay</Header>
                </Message.Header>
                <Message.Content className="scrolling">
                    <Segment inverted style={{ textAlign: "center", paddingBottom: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://nodejs.org/en/")} primary><Icon name="node js" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://reactjs.org/")} primary><Icon name="react" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://www.mongodb.com/")} primary><Icon name="leaf" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://git-scm.com/")} primary><Icon name="git square" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://firebase.google.com/")} primary><Image style={{ filter: "invert(100%)" }} className="techstack-logo" src={firebaseImage} /></Button>
                            <Button icon onClick={event => this.onClick("https://expressjs.com/")} primary><Image src={expressImage} /></Button>
                        </Button.Group>
                    </Segment>
                    <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://github.com/FedoraGameDev/roleplay")} primary><Icon name="github" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://simply-roleplay.herokuapp.com")} primary><Icon name="at" size="huge" /></Button>
                        </Button.Group>
                    </Segment>
                    <Image src={simplyRoleplayImage} className="project-image" />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Description</Header></Message.Header>
                        <Message.Content>
                            The large community of roleplayers have adopted Discord as their main roleplay system.
                            This website is geared as a replacement for that system and provides a platform with features focused around roleplay.
                            In this site, you can create characters with their own backstories and etc. You can then apply that character to many stories
                            to start roleplaying as that character in them. Alternatively, you can create a story yourself that other people can apply their characters
                            to start roleplaying.
                            <br /><br />
                            Simply Roleplay is a full-stack website. It was build from the ground up using Express for routing, Mongo and Mongoose
                            as the database, Firebase for authentication, and React as a frontend. When the MVP was complete, the website was hosted on Heroku.
                            <br /><br />
                            The stories page is build with an infinite-scroll component, so stories will only be loaded 10 at a time. Colors in character Description
                            and on story covers are sent to thecolorapi.com to get the closest color name and contrasting color for fonts. This allows users to choose
                            any color for that information without having a negative impact on the website visuals.
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

export default RoleplayWebsite;