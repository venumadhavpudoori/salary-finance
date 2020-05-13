import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {  Container } from 'react-bootstrap';
import './Home.css';
import FinanceWork from './FinanceWork';
import EmployeeBenifits from './EmployeeBenifits';
import Industries from './Industries';
import GetInTouch from './GetInTouch'

class Home extends Component {
    render() {
        return (
            <>
            <div className="banner">
            <br/><br/>
            <Container>
            <h1 className="heading heading1">EMPLOYEE FINANCIAL STRESS</h1>
            <h1 className="heading heading2">IS COSTING YOUR COMPANY</h1><br/> 
            <p className="para">Over 40% of working Americans struggle with financial stress, leading to decreased productivity, absenteeism, and higher turnover, totaling 13-18% of total salary costs.</p> <br/> 
            <p className="para">Salary Finance partners with forward-thinking companies to improve their employees' financial wellness, through smarter financial products like low-interest employee loans.</p>
            </Container>
            </div>
            <FinanceWork />
            <EmployeeBenifits />
            <Industries />
            <GetInTouch />
            </>
        );
    }
}

export default Home;