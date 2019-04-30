import React, { Component } from "react";
import { Message, Header, Form, Icon } from "semantic-ui-react";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import { BACKEND, SEND_EMAIL } from "../Constants/Routes";

const INITIAL_STATE = {
    email: "",
    message: "",
    messageValid: true,
    emailValid: true
}

class Contact extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onChange = event =>
    {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = () =>
    {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        const { email, message } = this.state;
        const sanitizedMessage = sanitizeHtml(message);
        const emailValid = emailRegex.test(email);
        const messageValid = sanitizedMessage != "";

        this.setState({ emailValid, messageValid });

        if (emailValid && messageValid)
        {
            axios.post(`${BACKEND}${SEND_EMAIL}`, { email: email, message: sanitizedMessage })
                .then((res) =>
                {
                    if (res.data.status === "success")
                    {
                        alert("Message Sent.");
                        this.setState({ ...INITIAL_STATE });
                    }
                    else if (res.data.status === "error")
                    {
                        console.log(res.data.ERROR);
                        alert("Message failed to send. Please try again later.");
                    }
                })
        }
    }

    render()
    {
        const { email, message, emailValid, messageValid } = this.state;

        return (
            <div style={{ textAlign: "center" }}>
                <Message color="black" style={{ textAlign: "left" }}>
                    <Message.Header><Header as="h1" color="blue">Contact Me</Header></Message.Header>
                    <Message.Content>
                        {
                            emailValid ? null :
                                messageValid ?
                                    <Message warning style={{ display: "flex", alignItems: "center" }}><Icon name="exclamation" />Please enter a valid email address</Message> :
                                    <Message warning attached="top" style={{ display: "flex", alignItems: "center" }}><Icon name="exclamation" />Please enter a valid email address</Message>
                        }
                        {
                            messageValid ? null :
                                emailValid ?
                                    <Message warning style={{ display: "flex", alignItems: "center" }}><Icon name="exclamation" />Please enter a message to send</Message> :
                                    <Message warning attached="bottom" style={{ display: "flex", alignItems: "center" }}><Icon name="exclamation" />Please enter a message to send</Message>
                        }
                        <Form inverted onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Input label="Email" name="email" type="text" placeholder="email" value={email} error={!emailValid} onChange={this.onChange} />
                            </Form.Group>
                            <Form.TextArea label="Message" name="message" placeholder="message" value={message} error={!messageValid} onChange={this.onChange} />
                            <Form.Button primary type="submit">Submit</Form.Button>
                        </Form>
                    </Message.Content>
                </Message>
            </div>
        )
    }
}

export default Contact;