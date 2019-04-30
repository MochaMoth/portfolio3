import React, { Component } from "react";
import { Message, Header, Button, Segment, Image } from "semantic-ui-react";
import youtubeLogo from "../Images/youtube.png";
import fedoraLogo from "../Images/FedoraLight.png";

class FedoraDev extends Component
{
    onClick = to =>
    {
        window.open(to, "_blank").focus();
    }

    render()
    {
        return (
            <Message color="black" className="big-content">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">Fedora Dev</Header>
                </Message.Header>
                <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
                    <Button.Group>
                        <Button icon onClick={event => this.onClick("https://www.youtube.com/channel/UCyE9r3wpil_9i7CpSaxmpGQ/videos")} primary><Image src={youtubeLogo} className="techstack-logo" /></Button>
                    </Button.Group>
                </Segment>
                <Image src={fedoraLogo} className="project-image" />
                <Message>
                    <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Description</Header></Message.Header>
                    <Message.Content>
                        Fedora Dev is my personal brand. I upload videos to Youtube showing a few projects I'm working on, as well as tutorials for Unity
                        and programming on subjects I have become familiar with. Some noteable videos include "Persistence", "Scene Wrapper",
                        and "Dawn of Fruition Devlog 1".
                    </Message.Content>
                </Message>
            </Message>
        );
    }
}

export default FedoraDev;