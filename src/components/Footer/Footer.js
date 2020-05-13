import React, { Component } from 'react';
import './Footer.css';

import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

const salFooterImg = require('../../assets/logo-red.png');
const blenheimLogoImg = require('../../assets/blenheim-logo.png');
const legalGeneralImg = require('../../assets/legal_general.png');




class Footer extends Component {
    render() {
        return (
            <>
              <div className="footer">
              <div className="container">
              <div className="row">
              <div className="col-lg-6" style={{ marginTop: '80px' }}>
              <p   className="contact">For inquiries, contact us at <a href="#" style={{ textDecoration:"none"}}>  help@salaryfinance.com</a> <br/> 
              or call us at 800-317-6850</p>
              </div>
              <div className="col-lg-6" style={{ marginTop: '80px',textAlign:"right" }}>
               <a href="#">
                <FaLinkedin id="social-icons" />
               </a>
               <a href="#">
                <FaTwitter id="social-icons" />
               </a>
               <a href="#">
                <FaVimeoV  id="social-icons" />
               </a>
               </div>
              </div>
               <p className="footer-links" style={{marginTop:"50px"}}>
               <a href="#" target="_blank">
               <img src={salFooterImg} alt="footer-salary-img" style={{width:"150px" ,height:"60px"}}/>
               </a>
               <a href="#" target="_blank">
               Privacy Policy 
               </a>
               <a href="#" target="_blank">
               Terms and Conditions
               </a>
               <a href="#" target="_blank">
               Licenses 
               </a>
               <a href="#" target="_blank">
               FAQ 
               </a>
               <a href="#" target="_blank">
               Careers 
               </a>
               <a href="#" target="_blank">
               Press 
               </a>
               </p>
               <div className="footer-bottom">
              <div className="row">
              <div className="col-lg-6" style={{ marginTop: '80px' }}>
              <p>77 Sleeper Street, Boston, MA 02210<br/><br/>
               Salary Finance Inc. is part of Blenheim Chalcot and invested in by Legal & General.<br/>
               Salary Finance branded loan products are offered by Axos Bank®, Member FDIC.<br/>
               All loans offered are subject to eligibility, underwriting and approval. Terms and conditions apply.<br/>
               Salary Finance Inc NMLS #1750487.<a href="#"> NMLS Consumer Access.</a></p>
              </div>
              <div className="col-lg-6" style={{ marginTop: '150px',textAlign:"right" }}>
               <a href="#">
               <img src={blenheimLogoImg} alt="footer-salary-img" />
               </a>
               <a href="#">
               <img src={legalGeneralImg} alt="footer-salary-img" />
               </a>   
               </div>
               </div>
               </div>
              </div>
              </div>
            </>
        );
    }
}

export default Footer;