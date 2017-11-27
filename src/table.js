import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Thetable extends Component{

	constructor(props){
		super(props)
	}

	render(){
			return (
				
	<table className="table">
  <tr>
    <th>Name</th>
    <th>Samuelito</th>
    
  </tr>

  <tr>
    <td>Energy Saved</td>
    <td>15%</td>
    
  </tr>

  <tr>
    <td>Energy currency</td>
    <td>2500</td>
    
  </tr>

  <tr>
    <td>Level</td>
    <td>5</td>
    
  </tr>

  <tr>
    <td>Pet mood</td>
    <td>Happy</td>
    
  </tr>
</table>

)
	}
}

export default Thetable