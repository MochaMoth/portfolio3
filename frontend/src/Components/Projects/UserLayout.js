import React, { Component } from "react";
import { Message, Header, Segment, Button, Icon, Image, Card } from "semantic-ui-react";
import userLayoutImage from "../Images/user-layout.png";
import electronImage from "../Images/Electron.png";

class UserLayout extends Component
{
    onClick = to =>
    {
        window.open(to, "_blank").focus();
    }

    render()
    {
        const learnedSkills = ["NPM Package Building", "Electron", "DOM Manipulation", "Recursion", "Polymorphism", "Inheritance", "Team Environment"];

        return (
            <Message color="black" className="big-content">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">User Layout</Header>
                </Message.Header>
                <Message.Content className="scrolling">
                    <Segment inverted style={{ textAlign: "center", paddingBottom: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://nodejs.org/en/")} primary><Icon name="node js" size="huge" /></Button>
                            <Button icon onClick={event => this.onClick("https://electronjs.org/")} primary><Image src={electronImage} className="techstack-logo" /></Button>
                            <Button icon onClick={event => this.onClick("https://git-scm.com/")} primary><Icon name="git square" size="huge" /></Button>
                        </Button.Group>
                    </Segment>
                    <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://github.com/FedoraGameDev/user-layout")} primary><Icon name="github" size="huge" /></Button>
                        </Button.Group>
                    </Segment>
                    <Image src={userLayoutImage} className="project-image" />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Description</Header></Message.Header>
                        <Message.Content>
                            User Layout is an in-progress NPM package for Electron that will allow easy integration of customizable user layouts.
                            A developer can use this package to create a default layout with panels and tabs that the user can then modify to suit
                            their personal needs. Tabs can be dragged from panel to panel, and each panel can be resized via the draggable bar between them.
                            the user's customized layout can then be saved as json on their disk and loaded at runtime to create a seemless user experience.
                            <br /><br />
                            This project is made up of a base Layout class that contains a Layout instance and a few extra classes that inherit from Layout.
                            The resulting Layout base object will recursively return the instance Layout's html definition to create the full layout.
                            <br /><br />
                            For instance: "Window -> Tabbed Window" would give a single full-screen window with tabs where "Window" is the base Layout.
                            <br /><br />
                            In the image above, the class breakdown would be:<br /><code>
                                Window  <br />
                                &emsp;&#x2BA1;SplitLayout(50%) <br />
                                &emsp;&emsp;&emsp;&#x2BA1;SplitLayout(25%)<br />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&#x2BA1;Tabbed Window<br />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&#x2BA1;Tabbed Window<br />
                                &emsp;&emsp;&emsp;&#x2BA1;Tabbed Window<br />
                            </code><br />
                            Split Layout provides a means to split a window and allow the user to resize the windows. Split Layout contains two instances of
                            Layout which allows even more splits or tabbed windows to be rendered on screen.
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
        )
    }
}

export default UserLayout;