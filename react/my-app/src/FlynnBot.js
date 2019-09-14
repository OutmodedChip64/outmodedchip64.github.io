import React from 'react';
import './flynnbot.css';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class FlynnBot extends React.Component {
  constructor(props) {
    super(props);

    this.messages = []
  }

  createTable = () => {
    this.messages.push("Hello")
    this.messages.push("Hey")
    this.messages.push("Hi")

    return this.messages
  }

  render() {
    return (
      <div className="main">
        <div className="flynnbotFrame">
          <div className="flynnbotTitle">
            <h1 className="text-center">FlynnBot</h1>
          </div>
          <div className="flynnbotConversation">
            <Form>
              <Form.Label>FlynnBot: Hello</Form.Label>
              <br/>
              <Form.Label>You: Oh hey</Form.Label>
              {this.createTable()}
            </Form>
          </div>
          <div className="flynnbotMessage">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control className="flynnbotTextBox" type="message" placeholder="Enter message" />
                </Col>
                <Col>
                  <Button className="flynnbotSubmit" variant="primary" onClick={this.createTable()} type="submit">Submit</Button>
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
