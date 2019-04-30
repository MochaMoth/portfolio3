import React, { Component } from "react";
import { Message, Header, Segment, Button, Image, Card } from "semantic-ui-react";
import ChestImage from "../Images/Chest.png";
import unityLogo from "../Images/UnityLogo.svg";
import blenderLogo from "../Images/blender.png";
import visualStudioLogo from "../Images/visual studio.png";


class Deep extends Component
{
    onClick = to =>
    {
        window.open(to, "_blank").focus();
    }

    render()
    {
        const learnedSkills = ["Geometry Generation", "Scriptable Objects", "Animator", "3D Modeling"];

        return (
            <Message color="black" className="big-content">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">Deep</Header>
                </Message.Header>
                <Message.Content className="scrolling">
                    <Segment inverted style={{ textAlign: "center" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://unity.com/")} primary>
                                <Image style={{ filter: "invert(100%)" }} src={unityLogo} className="techstack-logo" />
                            </Button>
                            <Button icon onClick={event => this.onClick("https://blender.org")} primary>
                                <Image src={blenderLogo} className="techstack-logo" />
                            </Button>
                            <Button icon onClick={event => this.onClick("https://visualstudio.microsoft.com/")} primary>
                                <Image style={{ filter: "invert(100%)" }} src={visualStudioLogo} className="techstack-logo" />
                            </Button>
                        </Button.Group>
                    </Segment>
                    <Image src={ChestImage} className="project-image" style={{ marginBottom: "-100px" }} />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Description</Header></Message.Header>
                        <Message.Content>
                            Deep is an experimental project in Unity's game engine. The idea is to have an infinite-floor dungeon crawler. Each floor
                            is randomly generated with parameters controlled in scriptable objects. The generator takes pathing into account and
                            ensures a valid way to get from the starting position to the stairs. Each chest and enemy is also placed in an area the
                            player can reach.
                            <br /><br />
                            The generator is grid-based and uses small images to place a few floors randomly within the boundries based on pixel colors.
                            Red pixels will place walls, white pixels will place floors, and yellow pixels signify room entrances.
                            After the rooms are created, the generator starts at each room entrance and builds halls randomly from them. This links
                            the rooms together for the player to explore.
                            <br /><br />
                            You can also create specific scenes for certain floors that have no randomization at all. This allows the developer to get
                            creative with story telling or rewarding the player for certain journey milestones.
                            <br /><br />
                            The combat system utilizes Unity's animation system. If the developer wants to make a certain attack faster or interact with
                            other animations a specific way, they only need to change some settings in the animator. This saves developers time trying
                            to couple programmatic variables with visual animations and keeps things coupled automatically.
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

export default Deep;