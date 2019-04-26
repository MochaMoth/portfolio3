import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Table } from "semantic-ui-react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import "./App.scss";

function App()
{
	return (
		<Router>
			<div style={{ position: "fixed", top: "45%", left: "5px" }}>
				<Navigation />
			</div>
			<Container style={{ color: "white" }}>
				<Route path="/" exact component={Home} />
				<Route path="/contact" component={Contact} />
				<Route path="/projects" component={Projects} />
			</Container>
		</Router>
	);
}

export default App;
