import React, { Component } from 'react';
const Awards_WSB = require('../../assets/WSB.jpg');
const BITC_award = require('../../assets/BITC.jpg');
const Lending_Awards = require('../../assets/Lending.png');
const Money_age = require('../../assets/Money.png');

class Industries extends Component {
    render() {
        return (
            <>
            <div id="industries-container">
            <h2 style={{color:"#002579"}}>RECOGNIZED BY THE INDUSTRY</h2>
            <h2 style={{ color:"#fe5f5a",marginTop:"-15px" }}>FOR OUR IMPACT AND SOCIAL PURPOSE</h2><br/><br/>
            <div className="row">
            <div className="col-lg-3"> 
            <img src={BITC_award} alt="BITC-award" />
            </div>
            <div className="col-lg-3"> 
            <img src={Awards_WSB} alt="Awards_WSB" />
            </div>
            <div className="col-lg-3"> 
            <img src={Lending_Awards} alt="Lending-Awards" />
            </div>
            <div className="col-lg-3"> 
            <img src={Money_age} alt="Money-age" />
            </div>
            </div>
            </div>
            </> 
        );
    }
}

export default Industries;