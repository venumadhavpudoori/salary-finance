import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
const imgone = require('../../assets/usflag.png');
const salary = require('../../assets/sal-fin.png');


class BootstrapNavbar extends React.Component{
     constructor(props) {
    super(props);
    this.state = {
    };
  }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar className="color-nav"  expand="lg" sticky="top">
                                <Navbar.Brand href="#">
                                <img src={imgone} alt="logo" data-tip="Change Location" className="logo" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" id="nav-links">
                                    <Nav.Link href="#"       id="basic-nav-dropdown" >Home</Nav.Link>
                                    <NavDropdown title="Financial wellness"  id="basic-nav-dropdown">
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >How we help employers</Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >How salary-linked loans work</Nav.Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="For employees"       id="basic-nav-dropdown">
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >About employee loans</Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >Apply now</Nav.Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Resources"           id="basic-nav-dropdown">
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >The 2020 Salary Finance Report : Inside the Wallets of Working Americans</Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >How to Implement a Financial Wellness Program</Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >Harvard Kennedy School study</Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >Blog</Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >Press</Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Item><Nav.Link href="#" id="basic-nav-dropdown-link" >FAQs</Nav.Link></NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <img src={salary} alt="logo" style={{marginRight:"200px"}} />
                                    <Button className="button button1">Get In Touch</Button>
                                    <Button className="button button2">Apply Now</Button>
                               </Navbar.Collapse>
                            </Navbar>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;