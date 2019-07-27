import React, { Component } from "react";
import {
  Message,
  Header,
  Image,
  Button,
  Segment,
  Card,
  Icon
} from "semantic-ui-react";
import maidDere from "../Images/MaidDere.png";
import unityLogo from "../Images/UnityLogo.svg";
import visualStudioLogo from "../Images/visual studio.png";
import youtubeLogo from "../Images/youtube.png";

class RoleplayWebsite extends Component {
  onClick = to => {
    window.open(to, "_blank").focus();
  };

  render() {
    const learnedSkills = [
      "Unity",
      "C#",
      "Data Structures",
      "Polymorphism",
      "Inheritance",
      "Events",
      "Delegates",
      "Abstraction",
      "Animation"
    ];

    return (
      <Message color="black" className="big-content">
        <Message.Header style={{ textAlign: "center" }}>
          <Header as="h1" color="blue">
            Yandere Maid Minigame
          </Header>
        </Message.Header>
        <Message.Content>
          <Segment inverted style={{ textAlign: "center", paddingBottom: "0" }}>
            <Button.Group>
              <Button
                icon
                onClick={event => this.onClick("https://unity.com/")}
                primary
              >
                <Image
                  style={{ filter: "invert(100%)" }}
                  src={unityLogo}
                  className="techstack-logo"
                />
              </Button>
              <Button
                icon
                onClick={event =>
                  this.onClick("https://visualstudio.microsoft.com/")
                }
                primary
              >
                <Image
                  style={{ filter: "invert(100%)" }}
                  src={visualStudioLogo}
                  className="techstack-logo"
                />
              </Button>
            </Button.Group>
          </Segment>
          <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
            <Button.Group>
              <Button
                icon
                onClick={event => this.onClick("http://yanderesimulator.com/")}
                primary
              >
                Yandere
                <br />
                <Icon name="at" size="huge" />
              </Button>
            </Button.Group>
          </Segment>
          <Image src={maidDere} className="project-image" />
          <Message>
            <Message.Header>
              <Header as="h3" style={{ textAlign: "center" }} color="blue">
                Description
              </Header>
            </Message.Header>
            <Message.Content>
              Maid-Dere is a minigame commision I received for the popular game
              "Yandere Simulator". You play as Yan-Chan working at a cafe.
              Customers come in and wait for you to take their order, and you
              have to take their order to the kitchen and give it to the chef
              who prepares it for you, and finally you have to return that dish
              to the customer. The difficulty comes from memorizing which
              customers ordered which dishes.
              <br />
              <br />
              If you bring the wrong dish to a customer, or let them sit for too
              long, they will leave, and Yan-Chan will not receive a tip from
              that customer. If too many customers leave angrily, the game will
              fail and Yan-Chan will not receive payment for the day at all.
              <br />
              <br />
              This game was built in its own environment with the goal of
              implementation into the full game after I sent it. Careful
              consideration was put into making this game as easy to modify for
              the developer so they would not need to change any files or
              program anything themselves.
            </Message.Content>
          </Message>
          <Message>
            <Message.Header>
              <Header as="h3" style={{ textAlign: "center" }} color="blue">
                Skills Used
              </Header>
            </Message.Header>
            <Message.Content>
              <Card.Group>
                {learnedSkills.map((skill, index) => (
                  <Card key={index} style={{ width: "auto", padding: "5px" }}>
                    {skill}
                  </Card>
                ))}
              </Card.Group>
            </Message.Content>
          </Message>
        </Message.Content>
      </Message>
    );
  }
}

export default RoleplayWebsite;
