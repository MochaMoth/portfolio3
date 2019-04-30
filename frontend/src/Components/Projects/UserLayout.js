import React, { Component } from "react";
import { Message, Header, Segment, Button, Icon, Image, Card } from "semantic-ui-react";
import simplyRoleplayImage from "../Images/simplyRoleplay.png";
import expressImage from "../Images/express Icon.png";

class UserLayout extends Component
{
    render()
    {
        const learnedSkills = ["NPM Package Building"];

        return (
            <Message color="black">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">User Layout</Header>
                </Message.Header>
                <Message.Content className="scrolling">
                    <Segment inverted style={{ textAlign: "center", paddingBottom: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://nodejs.org/en/")} primary><Icon name="node js" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://expressjs.com/")} primary><Image src={expressImage} /></Button>
                            <Button icon onClick={event => this.onClick("https://git-scm.com/")} primary><Icon name="git square" size="huge" /></Button>
                        </Button.Group>
                    </Segment>
                    <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://github.com/FedoraGameDev/user-layout")} primary><Icon name="github" size="huge" /></Button>
                        </Button.Group>
                    </Segment>
                    <Image src={simplyRoleplayImage} className="project-image" />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Description</Header></Message.Header>
                        <Message.Content>
                        //
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
        )
    }
}

export default UserLayout;