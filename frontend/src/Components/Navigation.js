import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Icon, Dropdown } from "semantic-ui-react";

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
        const { history, mobile } = this.props;

        return (
            <Menu inverted={!mobile} pointing={!mobile} vertical={!mobile} className="navigation-menu" icon={mobile}>
                <Dropdown className="mobile-navigation-dropdown" icon="bars" item>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { history.push("/") }}><Icon name="home" size="large" />Home</Dropdown.Item>
                        <Dropdown.Item onClick={() => { history.push("/projects") }}><Icon name="briefcase" size="large" />Projects</Dropdown.Item>
                        <Dropdown.Item onClick={() => { history.push("/contact") }}><Icon name="address card" size="large" />Contact</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    className="mobile-navigation-item"
                    color="blue"
                    active={activeMenu === "home"}
                    onClick={() => { history.push("/") }}>
                    <Icon name="home" size="large" />
                    <span className="title-text">{!mobile ? "Home" : null}</span>
                </Menu.Item>
                <Menu.Item
                    className="mobile-navigation-item"
                    color="blue"
                    active={activeMenu === "projects"}
                    onClick={() => { history.push("/projects") }}>
                    <Icon name="briefcase" size="large" />
                    <span className="title-text">{!mobile ? "Projects" : null}</span>
                </Menu.Item>
                <Menu.Item
                    className="mobile-navigation-item"
                    color="blue"
                    active={activeMenu === "contact"}
                    onClick={() => { history.push("/contact") }}>
                    <Icon name="address card" size="large" />
                    <span className="title-text">{!mobile ? "Contact" : null}</span>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(Navigation);