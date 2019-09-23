import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="mainJumbo">
          <div className="mainJumboContent">
            <h1>Welcome to EFweb</h1>
            <br/>
            <h4>Where would you like to go?</h4>
          </div>
        </Jumbotron>

        <div className="main">
          {/*
          <Jumbotron className="mainJumbos blogBG">
            <div className="mainJumbosCenter">
              <div className="mainJumbosContent">
                <h1>EFweb Blog</h1>
                <br/>
                <h4>Check out my new blog with my tech tutorials</h4>
                <br/>
                <Link to="/blog"><Button href="/blog">Check it out!</Button></Link>
              </div>
            </div>
          </Jumbotron>
          */}
          <Jumbotron className="mainJumbos flynnbotBG">
            <div className="mainJumbosCenter">
              <div className="mainJumbosContent">
                <h1>FlynnBot</h1>
                <br/>
                <h4>Try my work-in-progress virtual assistant, FlynnBot</h4>
                <br/>
                <Link to="/flynnbot"><Button href="/flynnbot">Try it out!</Button></Link>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron className="mainJumbos playerpixelBG">
            <div className="mainJumbosCenter">
              <div className="mainJumbosContent">
                <h1>PlayerPixel Development</h1>
                <br/>
                <h4>Check out the development of a new 2d game by AEI Games here</h4>
                <br/>
                <Link to="/playerpixel"><Button href="/playerpixel">Play now!</Button></Link>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron className="mainJumbos cubicleBG">
            <div className="mainJumbosCenter">
              <div className="mainJumbosContent">
                <h1>Cubicle Trial</h1>
                <br/>
                <h4>Try my 3d platformer Cubicle here</h4>
                <br/>
                <Link to="/cubicle"><Button href="/cubicle">Play now!</Button></Link>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;
