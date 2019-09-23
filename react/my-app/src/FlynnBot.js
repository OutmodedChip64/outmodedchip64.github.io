import React from 'react';
import './flynnbot.css';
import './App.css';
import DisqusFrame from './DisqusFrame';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class FlynnBotApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', response: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({value: '', response: 'Loading...'});
    var url = "https://cors-anywhere.herokuapp.com/http://75.139.196.30:5000/response/" + this.state.value;
    var newResponse = "";

    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log('success', request.responseText);
        //this.setState({response: request.responseText});
        newResponse = request.responseText;
        newResponse = newResponse.substring(1, newResponse.length-2);
        newResponse = newResponse.replace(/(?:\\n)/g, '\n').replace(/(?:\\")/g, '"');
        newResponse = newResponse.replace(/\\u[\dA-F]{4}/gi,
          function (match) {
               return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
          });
        //newResponse = newResponse.replace(/(?:\\")/g, '"');
        this.setState({response: newResponse});
      } else {
        console.warn('error');
        this.setState({response: 'An error has occurred'});
      }
    };

    request.open('GET', url);
    request.send();

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flynnbotFrame">
        <h1 className="text-center">FlynnBot</h1>
        <div className="flynnbotInput">
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type message..." />
          </label>
        </div>
        <div className="flynnbotButtonDiv">
          <input className="flynnbotButton" type="submit" value="Submit" />
        </div>
        <div className="flynnbotResponseDiv">
          <h4 className="text-center flynnbotResponse">{this.state.response}</h4>
        </div>
      </form>
    );
  }
}

class FlynnBotRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', response: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({value: '', response: 'Sending...'});

    fetch('https://cors-anywhere.herokuapp.com/http://75.139.196.30:5000/response/' + this.state.value, {
      method: 'POST',
    })
    .then(response => {
      if (response.status === 201) {
        this.setState({response: 'Successfully requested!'});
        console.info("Server responded with: " + response.status)
      } else {
        this.setState({response: 'Question already has an answer or has already been requested.'});
        console.warn("Server responded with: " + response.status)
      }
    }).catch(error => {
      this.setState({response: 'An error has occurred: ' + error});
    });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="requestFrame">
        <h1 className="text-center">Requests</h1>
        <p className="text-center">Here you can send anonymous requests for questions, messages, etc.</p>
        <div className="flynnbotInput">
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type request..." />
          </label>
        </div>
        <div className="flynnbotButtonDiv">
          <input className="flynnbotButton" type="submit" value="Submit" />
        </div>
        <div className="flynnbotResponseDiv">
          <h4 className="text-center flynnbotResponse">{this.state.response}</h4>
        </div>
      </form>
    )
  }
}

function FlynnBot() {
  return (
    <div className="main">
      <div className="flynnbotApp">
        <FlynnBotApp />
        <FlynnBotRequest />
      </div>
    </div>
  )
}

export default FlynnBot;
