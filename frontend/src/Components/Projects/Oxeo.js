import React, { Component } from "react";
import { Message, Header, Image, Icon, Button, Segment, Card } from "semantic-ui-react";
import oxeosImage from "../Images/oxeos.png";

class Oxeo extends Component
{
    onClick = to =>
    {
        window.open(to, "_blank").focus();
    }

    render()
    {
        const learnedSkills = ["npx", "npm publish", "node"];

        return (
            <Message color="black" className="big-content">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">OXEO</Header>
                </Message.Header>
                <Message.Content>
                    <Segment inverted style={{ textAlign: "center", paddingBottom: "0" }}>
                        <Button.Group className="desktop-tech-stack">
                            <Button icon onClick={event => this.onClick("https://nodejs.org/en/")} primary><Icon name="node js" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://npmjs.com")} primary><Icon name="npm" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://git-scm.com/")} primary><Icon name="git square" size="huge" /></Button>
                        </Button.Group>
                    </Segment>
                    <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://github.com/FedoraGameDev/oxeo")} primary>Github<br /><Icon name="github" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://www.npmjs.com/package/oxeo")} primary>npm<br /><Icon name="at" size="huge" /></Button>
                        </Button.Group>
                    </Segment>
                    <Image src={oxeosImage} className="project-image" />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Description</Header></Message.Header>
                        <Message.Content>
                            OXEO is a single-command CLI tool that generates a full MERN project. The tool can be globally installed, or run with npx.
                            After creating the project with OXEO, a bare-bones example utilizing the full stack is ready to go, making modification for beginners
                            extremely easy.
                        </Message.Content>
                    </Message>
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Skills Used</Header></Message.Header>
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

export default Oxeo;