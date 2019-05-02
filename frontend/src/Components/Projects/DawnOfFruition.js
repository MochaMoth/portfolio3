import React, { Component } from "react";
import { Message, Header, Image, Button, Segment, Card } from "semantic-ui-react";
import dawnOfFruition from "../Images/Ireena.png";
import unityLogo from "../Images/UnityLogo.svg";
import blenderLogo from "../Images/blender.png";
import visualStudioLogo from "../Images/visual studio.png";
import youtubeLogo from "../Images/youtube.png";

class RoleplayWebsite extends Component
{
    onClick = to =>
    {
        window.open(to, "_blank").focus();
    }

    render()
    {
        const learnedSkills = [
            "Unity", "C#", "Data Structures", "Polymorphism",
            "Inheritance", "Events", "Delegates",
            "Abstraction", "3D Modeling", "Animation", "Weather Maker",
            "Shader Forge"
        ];

        return (
            <Message color="black" className="big-content">
                <Message.Header style={{ textAlign: "center" }}>
                    <Header as="h1" color="blue">Dawn of Fruition</Header>
                </Message.Header>
                <Message.Content>
                    <Segment inverted style={{ textAlign: "center", paddingBottom: "0" }}>
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
                    <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
                        <Button.Group>
                            <Button icon onClick={event => this.onClick("https://www.youtube.com/watch?v=8ft6lPbZnTE")} primary>Devlog #1<br /><Image src={youtubeLogo} className="techstack-logo" /></Button>
                            <Button icon onClick={event => this.onClick("https://www.youtube.com/watch?v=jdrGDRnovoo")} primary>Rainy Day<br /><Image src={youtubeLogo} className="techstack-logo" /></Button>
                        </Button.Group>
                    </Segment>
                    <Image src={dawnOfFruition} className="project-image" style={{ marginBottom: "-100px" }} />
                    <Message>
                        <Message.Header><Header as="h3" style={{ textAlign: "center" }} color="blue">Description</Header></Message.Header>
                        <Message.Content>
                            Dawn of Fruition is a game being developed in Unity's game engine. The game is a farming simulator much like
                            Harvest Moon and Stardew Valley. It implements a custom NPC scheduling system which uses only in-editor GUIs
                            for editing, as opposed to editing xml files. The scheduling system begins scheduling each NPC every 5 in-game
                            minutes, one NPC per frame for efficiency.
                            <br /><br />
                            Equipable items use interfaces to interact with in-world interactables,
                            i.e. holding a watering can and interacting with something that implements ICanBeWatered will cause the object to respond accordingly.
                            Soil, for instance, will set it's state to 'watered' and tell the water can to lose water, and interacting with a well will tell
                            the water can to refill itself.
                            <br /><br />
                            Weather Maker is implemented and modified to achieve a controlled, yet diverse weather system. The system has 3 main states; sunny,
                            rainy, and snowy. It takes the previous, next, and current days' weather and sets the days' weather cycle to blend perfectly between them.
                            The logic to determine whether or not a specific day will rain has some random aspects but takes seasonal progression into account. The
                            middle of Summer has the least amount of rain and Spring/Autumn have the most in the beginning/end respectively. The entire weather system
                            ensures a seemless experience to the player.
                            <br /><br />
                            NPCs utilize a node-based path finding system using an A* algorithm for efficiency. Nodes are manipulated in the editor and will
                            automatically connect to neighboring nodes depending on distance and whether or not there are objects blocking the path. At runtime,
                            NPCs can query the path to find their destination asyncronously.
                            <br /><br />
                            The shader used is a custom cell shader that mixes information such as camera distance and vertex height to achieve a completely original
                            visual style. The shader uses the camera as a light source to eluminate the characters as best as possible for the player. This design
                            decision was made due to the heavy focus on the characters in the game.
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

export default RoleplayWebsite;