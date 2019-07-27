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
import surveyImage from "../Images/Survey_Detailed.png";
import expressImage from "../Images/express Icon.png";
import firebaseImage from "../Images/firebase.svg";

class RoleplayWebsite extends Component {
  onClick = to => {
    window.open(to, "_blank").focus();
  };

  render() {
    const learnedSkills = [
      "Semantic UI",
      "No-SQL",
      "CRUD",
      "Modular Components",
      "Website Deployment",
      "Firebase Realtime Database",
      "Firebase Deployment"
    ];

    return (
      <Message color="black" className="big-content">
        <Message.Header style={{ textAlign: "center" }}>
          <Header as="h1" color="blue">
            Online Qualitative Survey
          </Header>
        </Message.Header>
        <Message.Content>
          <Segment inverted style={{ textAlign: "center", paddingBottom: "0" }}>
            <Button.Group className="desktop-tech-stack">
              <Button
                icon
                onClick={event => this.onClick("https://nodejs.org/en/")}
                primary
              >
                <Icon name="node js" size="huge" />
              </Button>
              <Button
                icon
                onClick={event => this.onClick("https://reactjs.org/")}
                primary
              >
                <Icon name="react" size="huge" />
              </Button>
              <Button
                icon
                onClick={event => this.onClick("https://www.mongodb.com/")}
                primary
              >
                <Icon name="leaf" size="huge" />
              </Button>
              <Button
                icon
                onClick={event => this.onClick("https://git-scm.com/")}
                primary
              >
                <Icon name="git square" size="huge" />
              </Button>
              <Button
                icon
                onClick={event => this.onClick("https://firebase.google.com/")}
                primary
              >
                <Image
                  style={{ filter: "invert(100%)" }}
                  className="techstack-logo"
                  src={firebaseImage}
                />
              </Button>
              <Button
                icon
                onClick={event => this.onClick("https://expressjs.com/")}
                primary
              >
                <Image src={expressImage} />
              </Button>
            </Button.Group>
          </Segment>
          <Segment inverted style={{ textAlign: "center", paddingTop: "0" }}>
            <Button.Group>
              <Button
                icon
                onClick={event =>
                  this.onClick(
                    "https://projectmacro-1085a.firebaseapp.com/survey/admin/123423453456/interview"
                  )
                }
                primary
              >
                Website
                <br />
                <Icon name="at" size="huge" />
              </Button>
            </Button.Group>
          </Segment>
          <Image src={surveyImage} className="project-image" />
          <Message>
            <Message.Header>
              <Header as="h3" style={{ textAlign: "center" }} color="blue">
                Description
              </Header>
            </Message.Header>
            <Message.Content>
              This concept was built to show off the capabilities of the
              Firebase Realtime Database. in this concept, an interviewer can
              send a link to respondents to connect with them directly. The
              interviewer can then send a batch of questions to all connected
              respondents for them to answer while conducting the survey. Each
              survey had multiple sessions so more than one interview could be
              conducted at a given time. A truly powerful part of this platform
              is to grant the interviewer the ability to create new questions on
              the fly while conducting the survey.
              <br />
              <br />
              This project was built in 7 days along with another developer and
              only contains the bare essentials to show off its capabilities.
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
