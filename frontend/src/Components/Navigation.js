import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const INITIAL_STATE = {
    activeMenu: "home"
}

class Navigation extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentDidMount()
    {
        this.setTarget(this.props.location.pathname);

        this.backListener = this.props.history.listen(location =>
        {
            this.setTarget(location.pathname);
        });
    }

    setTarget = to =>
    {
        if (to.includes("/")) this.setState({ activeMenu: "home" });
        if (to.includes("/projects")) this.setState({ activeMenu: "projects" });
        if (to.includes("/contact")) this.setState({ activeMenu: "contact" });
    }

    render()
    {
        const { activeMenu } = this.state;
        const { history } = this.props;

        return (
            <Menu inverted pointing vertical className="navigation-menu">
                <Menu.Item
                    color="blue"
                    active={activeMenu === "home"}
                    onClick={() => { history.push("/") }}>
                    <Icon name="home" size="large" />
                    Home
                </Menu.Item>
                <Menu.Item
                    color="blue"
                    active={activeMenu === "projects"}
                    onClick={() => { history.push("/projects") }}>
                    <Icon name="briefcase" size="large" />
                    Projects
                </Menu.Item>
                <Menu.Item
                    color="blue"
                    active={activeMenu === "contact"}
                    onClick={() => { history.push("/contact") }}>
                    <Icon name="address card" size="large" />
                    Contact
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(Navigation);