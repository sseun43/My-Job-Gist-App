import React, { Component } from 'react';
import './App.css';
import Jobcards from "./Jobcards.js"

class Row extends Component{

constructor(props){
    super(props)
  }

	render(){
     const {displayJob}=this.props
		return (
			<div className ="row">
				{displayJob.map((v,i)=>{return <Jobcards key={i} jobData={v}/>})}


			</div>
			)
	}
}

export default Row