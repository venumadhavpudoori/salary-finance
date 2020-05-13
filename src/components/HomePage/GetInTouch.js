import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import {  Container } from 'react-bootstrap';

class GetInTouch extends Component {
   constructor(props) {
	super(props)
	this.state = {
		hover: false
	}
    this.toggleHover = this.toggleHover.bind(this);

}

toggleHover() {
	this.setState({hover: !this.state.hover})
}

render() {
   var linkStyle;
   if (this.state.hover) {
     linkStyle = {
         backgroundColor: '#ffffff',
         color:'#FE5F5A',
         border:"1px solid #ffffff",
         padding:"14px 30px",
         fontfamily:" 'Qanelas Extra Bold', sans-serif",
         fontSize:"16px",
         fontWeight:"700",
         cursor: 'pointer'}
   } else {
     linkStyle = {
         backgroundColor: '#FE5F5A',
         color:'#ffffff',
         border:"1px solid #ffffff",
         padding:"14px 30px",
         fontfamily:" 'Qanelas Extra Bold', sans-serif",
         fontSize:"16px",
         fontWeight:"700"}
   }
	return(
        <>
        <div style={{backgroundColor:'#FE5F5A', textAlign:"center",height:"350px"}}>
        <br/><br/><br/>
        <h2  style={{
         color:'#002579',
         fontfamily:" 'Qanelas Extra Bold', sans-serif",
         fontSize:"42px",
         fontWeight:"700"}}>READY TO <br/> GET STARTED?</h2><br/>
		<Button 
           style={linkStyle} 
           onMouseEnter={this.toggleHover} 
           onMouseLeave={this.toggleHover}>
           GET IN TOUCH
        </Button>
	    </div>
        </>
    )
}
}

export default GetInTouch;