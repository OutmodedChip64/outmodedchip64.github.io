import React from 'react';
import './flynnbot.css';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class FlynnBot extends React.Component {
  constructor(props) {
    super(props);

    this.messages = []
    this.state = {
        messageBox: ""
    }
  }

  handleMessage() {
    alert("Handling message")
    //let { previousMessages } = []
    //if (this.state.messages != null) {
    //  previousMessages = this.state.messages
    //}
    //this.setState({ messages: [previousMessages, <Form.Label>{this.messageBox}</Form.Label>, <br/>] })
    this.messages.push(<Form.Label>{this.messageBox}</Form.Label>)
    this.messages.push(<br/>)
  }

  render() {
    return (
      <div className="main">
        <div className="flynnbotFrame">
          <div className="flynnbotTitle">
            <h1 className="text-center">FlynnBot</h1>
          </div>
          <div className="flynnbotConversation">
            <Form onSubmit={this.createTable}>
              <Form.Label>FlynnBot: Hello</Form.Label>
              <br/>
              <Form.Label>You: Oh hey</Form.Label>
              {this.messages}
            </Form>
          </div>
          <div className="flynnbotMessage">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control value={this.messageBox} className="flynnbotTextBox" type="message" placeholder="Enter message" />
                </Col>
                <Col>
                  <Button className="flynnbotSubmit" variant="primary" onClick={this.handleMessage}>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default FlynnBot;
