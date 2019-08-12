import React from 'react';
import logo from './logo.svg';
import './App.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      this.state.isToggleOn ? (
        <button className="toggleButton onOffButton" onClick={this.handleClick} style={{backgroundColor: "#4CAF50"}}>
          ON
        </button>
      ) : (
        <button className="toggleButton onOffButton" onClick={this.handleClick} style={{backgroundColor: "#0C5F10"}}>
          OFF
        </button>
      )
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo logoAnimate" alt="logo" />
        <p className="editSrcAnimate">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link learnReactAnimate"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <Toggle />
      </header>
    </div>
  );
}

export default App;
