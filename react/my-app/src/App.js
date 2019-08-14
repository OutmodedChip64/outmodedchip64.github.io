import React from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';


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

class SpinningLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {speed: "5"};
  }

  render() {
    return (
      <img
        src={logo}
        className="App-logo logoAnimate"
        alt="logo"
        style={{animation: "App-logo-spin infinite " + this.props.speed + "ms linear, Logo-Animate 2s cubic-bezier(0.4, 0, 0.2, 1)"}}
      />
    );
  }
}

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <br/>
      <Typography id="continuous-slider" gutterBottom>
        Logo Spin Speed
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider ValueLabelComponent={ValueLabelComponent} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
      </Grid>
    </div>
  );
}

const logoSlider = <ContinuousSlider />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpinningLogo speed={logoSlider.value / 6} />
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
        {logoSlider}
      </header>
    </div>
  );
}

export default App;
