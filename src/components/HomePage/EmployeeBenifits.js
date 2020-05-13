import React, { Component } from 'react';
  import { Button } from 'react-bootstrap'

const employeeBenifits1 = require('../../assets/Employee Benefits1.png');
const employeeBenifits2 = require('../../assets/Employee Benefits2.png');
const employeeBenifits3 = require('../../assets/Employee Benefits3.png');
const unitedWay = require('../../assets/unitedway.png');


class EmployeeBenifits extends Component {
    render() {
        return (
            <div className="employeeBenifits-container">
            <div className="employeeBenifits-intro1">
            <div className="row">
            <div className="col-lg-6"> 
            <img src={employeeBenifits1} alt="employeeBenifits1" />
            </div>
            <div className="col-lg-6" id="employeeBenefitsList"> 
             <div>HELPING YOU HELP YOUR PEOPLE</div><br/>
             <p>Salary Finance is a no-cost benefit that employees truly value. Providing low-interest employee loans and other financial wellness products can help improve your employees’ financial wellness, increase their credit scores, and help them move out of debt and into saving</p><br/>
             <Button>Find Out More</Button>
            </div>
            </div>
            </div>
            <div className="employeeBenifits-intro2">
            <div className="row">
            <div className="col-lg-6" id="employeeBenefitsList"> 
            <div>BECAUSE LIFE HAPPENS</div><br/>
             <p>Salary Finance is a smarter way to borrow. Through Salary Finance, you can give employees access to new benefits, such as dramatically lower interest loans with higher acceptance rates than other lenders.</p><br/>
             <Button>Find Out More</Button>
            </div>
            <div className="col-lg-6"> 
            <img src={employeeBenifits2} alt="employeeBenifits2"/>
            </div>
            </div>
            </div>
            <div className="employeeBenifits-intro3">
            <div className="row">
            <div className="col-lg-6"> 
            <img src={employeeBenifits3} alt="employeeBenifits3"/>
            </div>
            <div className="col-lg-6" id="employeeBenefitsList"> 
            <div>OUR PARTNER</div><br/>
             <p>We’ve partnered with United Way on their mission to deliver financial stability and security. Together, we want to get 10 million Americans out of debt and into savings.</p><br/>
             <img src={unitedWay} alt="unitedWayLogo" style={{ width: '130px', height: '50px'}} />
            </div>
            </div>
            </div>   
            </div>
        );
    }
}

export default EmployeeBenifits;