import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Cubicle from './Cubicle';
import PlayerPixel from './PlayerPixel';
import Blog from './Blog';
import FlynnBot from './FlynnBot'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <Switch>
      <div>
        <Navbar bg="light" expand="lg" className="headerNav">
          <Navbar.Brand><Link to="/" className="navBrand">
            <img
              alt="EFweb Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {'  EFweb'}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link><Link to="/cubicle" className="navLink">Cubicle Trial</Link></Nav.Link>
              <Nav.Link><Link to="/playerpixel" className="navLink">PlayerPixel Development</Link></Nav.Link>
              <Nav.Link><Link to="/flynnbot" className="navLink">FlynnBot</Link></Nav.Link>
              <Nav.Link><Link to="/blog" className="navLink">Blog</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/cubicle" component={Cubicle}/>
          <Route path="/playerpixel" component={PlayerPixel}/>
          <Route path="/flynnbot" component={FlynnBot}/>
          <Route path="/blog" component={Blog}/>
        </div>

        <div className="footer text-center">
          <p className="footerText">Copyright © 2019 All rights reserved. <a className="lightBlueLink" href="https://outmodedchip64.github.io">EFweb</a></p>
        </div>
      </div>
    </Switch>
  );
}

export default App;
