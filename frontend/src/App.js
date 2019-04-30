import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Table } from "semantic-ui-react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import RoleplayWebsite from "./Components/Projects/RoleplayWebsite";
import DawnOfFruition from "./Components/Projects/DawnOfFruition";
import UserLayout from "./Components/Projects/UserLayout";
import Deep from "./Components/Projects/Deep";
import "./App.scss";

function App()
{
	return (
		<Router>
			<Container style={{ color: "white", maxHeight: "100%" }}>
				<Route path="/" exact component={Home} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/projects/roleplay-website" exact component={RoleplayWebsite} />
				<Route path="/projects/user-layout" exact component={UserLayout} />
				<Route path="/projects/dawn-of-fruition" exact component={DawnOfFruition} />
				<Route path="/projects/deep" exact component={Deep} />
			</Container>
			<div className="navigation-panel">
				<Navigation />
			</div>
		</Router>
	);
}

export default App;
