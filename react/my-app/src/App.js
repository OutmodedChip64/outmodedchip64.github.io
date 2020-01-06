import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from './Home';
import Cubicle from './Cubicle';
import PlayerPixel from './PlayerPixel';
import UnknownPage from './UnknownPage';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="headerNav">
        <Navbar.Brand><NavLink to="/" className="navBrand">
          <img
            alt="EFweb Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {'  EFweb'}</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><NavLink to="/cubicle" className="navLink">Cubicle</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/playerpixel" className="navLink">PlayerPixel</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/blog" className="navLink">Blog</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cubicle" component={Cubicle}/>
          <Route path="/playerpixel" component={PlayerPixel}/>
          <Route path='/blog' component={() => {
            window.location.reload();
            return null;
          }}/>
          <Route component={UnknownPage}/>
        </Switch>
      </div>

      <div className="footer text-center">
        <p className="footerText">Copyright © 2020 All rights reserved. <a className="lightBlueLink" href="https://outmodedchip64.github.io">EFweb</a></p>
      </div>
    </div>
  );
}

export default App;
