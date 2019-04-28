import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Message, Card, Header, Image, Button, Icon } from "semantic-ui-react";
import RoleplayWebsiteImage from "./Images/simplyRoleplay.png";

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
        const projects = [
            { image: RoleplayWebsiteImage, title: "Roleplay Website", link: "/projects/roleplay-website", github: "https://github.com/FedoraGameDev/roleplay", liveLink: "http://simply-roleplay.tk" },
            { image: "", title: "Dawn of Fruition", link: "", github: "", liveLink: "" },
            { image: "", title: "", link: "", github: "", liveLink: "" },
            { image: "", title: "", link: "", github: "", liveLink: "" }
        ];

        return (
            <div style={{ textAlign: "center" }}>
                <Message color="black">
                    <Message.Header><Header as="h1" color="blue">Projects</Header></Message.Header>
                    <Card.Group centered>
                        {
                            projects.map((project, index) =>
                                (
                                    <Card key={index} link onClick={() => this.onClickLink(project.link)}>
                                        <Image src={project.image} />
                                        <Card.Content>
                                            <Card.Header>{project.title}</Card.Header>
                                            <Button.Group>
                                                {
                                                    project.github ?
                                                        <Button icon primary onClick={event => this.onClickLinkTab(event, project.github)}>
                                                            <Icon size="large" name="github" />
                                                        </Button>
                                                        :
                                                        null
                                                }
                                                {
                                                    project.liveLink ?
                                                        <Button icon primary onClick={event => this.onClickLinkTab(event, project.liveLink)}>
                                                            <Icon site="large" name="at" />
                                                        </Button>
                                                        :
                                                        null
                                                }
                                            </Button.Group>
                                        </Card.Content>
                                    </Card>
                                ))
                        }
                    </Card.Group>
                </Message>
            </div>
        )
    }
}

export default withRouter(Projects);