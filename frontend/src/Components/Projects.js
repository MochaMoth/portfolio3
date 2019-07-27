import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Message,
  Card,
  Header,
  Image,
  Button,
  Icon,
  Segment,
  IconGroup
} from "semantic-ui-react";
import SurveyImage from "./Images/Survey.png";
import MaidDereImage from "./Images/MaidDere.png";
import RoleplayWebsiteImage from "./Images/Book.png";
import IreenaImage from "./Images/Ireena.png";
import ChestImage from "./Images/Chest.png";
import userLayoutImage from "./Images/UserLayout.png";
import fedoraLogo from "./Images/fedora.png";
import youtubeLogo from "./Images/youtube.png";
import oxeosImage from "./Images/oxeos.png";

class Projects extends Component {
  onClickLink = to => {
    this.props.history.push(to);
  };

  onClickLinkTab = (event, to) => {
    event.stopPropagation();
    window.open(to, "_blank").focus();
  };

  render() {
    return (
      <Message
        color="black"
        style={{ textAlign: "center" }}
        className="big-content"
      >
        <Message.Header>
          <Header as="h1" color="blue">
            Projects
          </Header>
        </Message.Header>
        <Message.Content>
          <IconGroup>
            <Icon name="circle" color="green" />
            Completed
          </IconGroup>
          <br />
          <IconGroup>
            <Icon name="circle" color="blue" />
            Beta
          </IconGroup>
          <br />
          <IconGroup>
            <Icon name="circle" color="yellow" />
            Alpha
          </IconGroup>
          <br />
          <Card.Group centered>
            <Card
              link
              className="new-project-card"
              onClick={() => this.onClickLink("/projects/survey")}
            >
              <Card.Header>
                <Icon name="circle" color="yellow" />
                <Header as="h2">Qual Survey</Header>
              </Card.Header>
              <Card.Content
                style={{
                  backgroundImage: `url(${SurveyImage})`
                }}
                className="new-project-card-content"
              >
                <Button.Group>
                  <Button
                    icon
                    primary
                    onClick={event =>
                      this.onClickLinkTab(
                        event,
                        "https://projectmacro-1085a.firebaseapp.com/survey/admin/123423453456/interview"
                      )
                    }
                  >
                    <Icon site="large" name="at" />
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>
            <Card
              link
              onClick={() => this.onClickLink("/projects/maid-dere")}
              className="new-project-card"
            >
              <Card.Header>
                <Icon name="circle" color="green" />
                <Header as="h2">Maid-Dere</Header>
              </Card.Header>
              <Card.Content
                style={{
                  backgroundImage: `url(${MaidDereImage})`,
                  backgroundSize: "auto 95%"
                }}
                className="new-project-card-content"
              />
            </Card>
            <Card
              link
              onClick={() => this.onClickLink("/projects/roleplay-website")}
              className="new-project-card"
            >
              <Card.Header>
                <Icon name="circle" color="blue" />
                <Header as="h2">Simply Roleplay</Header>
              </Card.Header>
              <Card.Content
                style={{ backgroundImage: `url(${RoleplayWebsiteImage})` }}
                className="new-project-card-content"
              >
                <Button.Group>
                  <Button
                    icon
                    primary
                    onClick={event =>
                      this.onClickLinkTab(
                        event,
                        "https://github.com/FedoraGameDev/roleplay"
                      )
                    }
                  >
                    <Icon size="large" name="github" />
                  </Button>
                  <Button
                    icon
                    primary
                    onClick={event =>
                      this.onClickLinkTab(
                        event,
                        "https://simply-roleplay.herokuapp.com"
                      )
                    }
                  >
                    <Icon site="large" name="at" />
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>

            <Card
              link
              onClick={() => this.onClickLink("/projects/user-layout")}
              className="new-project-card"
            >
              <Card.Header>
                <Icon name="circle" color="yellow" />
                <Header as="h2">User Layout</Header>
              </Card.Header>
              <Card.Content
                style={{ backgroundImage: `url(${userLayoutImage})` }}
                className="new-project-card-content"
              >
                <Button.Group>
                  <Button
                    icon
                    primary
                    onClick={event =>
                      this.onClickLinkTab(
                        event,
                        "https://github.com/FedoraGameDev/user-layout"
                      )
                    }
                  >
                    <Icon size="large" name="github" />
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>

            <Card
              link
              onClick={() => this.onClickLink("/projects/oxeo")}
              className="new-project-card"
            >
              <Card.Header>
                <Icon name="circle" color="green" />
                <Header as="h2">OXEO</Header>
              </Card.Header>
              <Card.Content
                style={{ backgroundImage: `url(${oxeosImage})` }}
                className="new-project-card-content"
              >
                <Button.Group>
                  <Button
                    icon
                    primary
                    onClick={event =>
                      this.onClickLinkTab(
                        event,
                        "https://github.com/FedoraGameDev/oxeo"
                      )
                    }
                  >
                    <Icon size="large" name="github" />
                  </Button>
                  <Button
                    icon
                    primary
                    onClick={event =>
                      this.onClickLinkTab(
                        event,
                        "https://www.npmjs.com/package/oxeo"
                      )
                    }
                  >
                    <Icon site="large" name="at" />
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>

            <Card
              link
              onClick={() => this.onClickLink("/projects/dawn-of-fruition")}
              className="new-project-card"
            >
              <Card.Header>
                <Icon name="circle" color="yellow" />
                <Header as="h2">Dawn of Fruition</Header>
              </Card.Header>
              <Card.Content
                style={{
                  backgroundImage: `url(${IreenaImage})`,
                  backgroundSize: "auto 100%"
                }}
                className="new-project-card-content"
              />
            </Card>

            <Card
              link
              onClick={() => this.onClickLink("/projects/deep")}
              className="new-project-card"
            >
              <Card.Header>
                <Icon name="circle" color="yellow" />
                <Header as="h2">Deep</Header>
              </Card.Header>
              <Card.Content
                style={{
                  backgroundImage: `url(${ChestImage})`,
                  backgroundSize: "auto 100%"
                }}
                className="new-project-card-content"
              />
            </Card>

            <Card
              link
              onClick={() => this.onClickLink("/projects/fedora-dev")}
              className="new-project-card"
            >
              <Card.Header>
                <Icon name="circle" color="green" />
                <Header as="h2">Fedora Dev</Header>
              </Card.Header>
              <Card.Content
                style={{ backgroundImage: `url(${fedoraLogo})` }}
                className="new-project-card-content"
              >
                <Button.Group>
                  <Button
                    icon
                    primary
                    onClick={event =>
                      this.onClickLinkTab(
                        event,
                        "https://www.youtube.com/channel/UCyE9r3wpil_9i7CpSaxmpGQ/videos"
                      )
                    }
                  >
                    <Image src={youtubeLogo} style={{ height: "2rem" }} />
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>
          </Card.Group>
        </Message.Content>
      </Message>
    );
  }
}

export default withRouter(Projects);
