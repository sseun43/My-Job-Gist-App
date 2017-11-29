import React, { Component } from 'react';
import './App.css';

class Jobcards extends Component{

constructor(props){
    super(props)
    this.state={
      clicked:"card"
    }
    this.changeColor=this.changeColor.bind(this)
  }

  changeColor(){
  	this.setState({clicked:"card background-primary"})
  }

	render(){
     const {jobData}=this.props
     const {clicked}=this.state
		return (
				<div className="col sm-4">
					<div className={clicked} >
					  <div className="card-body">
					    <h4 className="card-title">{jobData.heading}</h4>
					    <h5 className="card-subtitle">{jobData.company_name}</h5>
					    <p className="card-text">{(jobData.descr).slice(0,122) + "..."}</p>
					    <a href={"https://duunitori.fi/tyopaikat/tyo/"+jobData.slug} target="_blank" className="paper-btn" onClick={this.changeColor}>Click for more details</a>

					  </div>
					</div>
				</div>
			)
	}
}

export default Jobcards