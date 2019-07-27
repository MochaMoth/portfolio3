import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Segment, Rail } from "semantic-ui-react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import RoleplayWebsite from "./Components/Projects/RoleplayWebsite";
import DawnOfFruition from "./Components/Projects/DawnOfFruition";
import UserLayout from "./Components/Projects/UserLayout";
import Deep from "./Components/Projects/Deep";
import FedoraDev from "./Components/Projects/FedoraDev";
import Oxeo from "./Components/Projects/Oxeo";
import MaidDere from "./Components/Projects/MaidDere";
import Survey from "./Components/Projects/Survey";
import "./App.scss";

function App() {
  return (
    <Router>
      <Container style={{ color: "white", height: "100%" }}>
        <Segment
          style={{
            height: "100%",
            backgroundColor: "transparent",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Projects} />
          <Route
            path="/projects/roleplay-website"
            exact
            component={RoleplayWebsite}
          />
          <Route path="/projects/user-layout" exact component={UserLayout} />
          <Route
            path="/projects/dawn-of-fruition"
            exact
            component={DawnOfFruition}
          />
          <Route path="/projects/deep" exact component={Deep} />
          <Route path="/projects/fedora-dev" exact component={FedoraDev} />
          <Route path="/projects/oxeo" exact component={Oxeo} />
          <Route path="/projects/maid-dere" exact component={MaidDere} />
          <Route path="/projects/survey" exact component={Survey} />
          <Rail position="left" attached className="desktop-navigation">
            <Navigation />
          </Rail>
          <Rail
            position="left"
            internal
            attached
            className="mobile-navigation"
            style={{ marginTop: "5px" }}
          >
            <Navigation mobile />
          </Rail>
        </Segment>
      </Container>
    </Router>
  );
}

export default App;
