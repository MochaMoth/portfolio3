import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Message, Card, Header, Image, Button, Icon } from "semantic-ui-react";
import RoleplayWebsiteImage from "./Images/simplyRoleplay.png";
import IreenaImage from "./Images/Ireena.png";
import ChestImage from "./Images/Chest.png";

class Projects extends Component
{
    onClickLink = to =>
    {
        this.props.history.push(to);
    }

    onClickLinkTab = (event, to) =>
    {
        event.stopPropagation();
        window.open(to, "_blank").focus();
    }

    render()
    {
        return (
            <div style={{ textAlign: "center" }}>
                <Message color="black">
                    <Message.Header><Header as="h1" color="blue">Projects</Header></Message.Header>
                    <Card.Group centered>
                        <Card link onClick={() => this.onClickLink("/projects/roleplay-website")} className="project-card">
                            <Image src={RoleplayWebsiteImage} className="mini-project-image" />
                            <Card.Content>
                                <Card.Header>Simply Roleplay</Card.Header>
                                <Button.Group>
                                    <Button icon primary onClick={event => this.onClickLinkTab(event, "https://github.com/FedoraGameDev/roleplay")}>
                                        <Icon size="large" name="github" />
                                    </Button>
                                    <Button icon primary onClick={event => this.onClickLinkTab(event, "https://simply-roleplay.herokuapp.com")}>
                                        <Icon site="large" name="at" />
                                    </Button>
                                </Button.Group>
                                <p style={{ color: "red" }}>Site may need to wake.</p>
                            </Card.Content>
                        </Card>

                        <Card link onClick={() => this.onClickLink("/projects/user-layout")} className="project-card">
                            <Image src={RoleplayWebsiteImage} className="mini-project-image" />
                            <Card.Content>
                                <Card.Header>User Layout</Card.Header>
                                <Button.Group>
                                    <Button icon primary onClick={event => this.onClickLinkTab(event, "https://github.com/FedoraGameDev/user-layout")}>
                                        <Icon size="large" name="github" />
                                    </Button>
                                </Button.Group>
                            </Card.Content>
                        </Card>

                        <Card link onClick={() => this.onClickLink("/projects/dawn-of-fruition")} className="project-card">
                            <Card.Content>
                                <div style={{ maxHeight: "150px", overflow: "hidden" }}><Image className="mini-project-image" src={IreenaImage} /></div>
                                <Card.Header>Dawn of Fruition</Card.Header>
                            </Card.Content>
                        </Card>

                        <Card link onClick={() => this.onClickLink("/projects/deep")} className="project-card">
                            <Card.Content>
                                <div style={{ maxHeight: "200px", overflow: "hidden" }}><Image className="mini-project-image" src={ChestImage} /></div>
                                <Card.Header>Deep</Card.Header>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Message>
            </div>
        )
    }
}

export default withRouter(Projects);