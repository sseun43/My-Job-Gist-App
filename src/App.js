import React, { Component } from 'react';
import './App.css';
import Rows from "./row.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loading :false,
      jobArr:[],
    }
    this.fetchDuunitoriData=this.fetchDuunitoriData.bind(this)
  }


  fetchDuunitoriData(todayDate,weekDate){
    const {jobInput,locationInput} =this.refs

      let millisecondNow=Date.now()
      let d = new Date();
      weekDate ? d=new Date((millisecondNow - 604800000)): d // To get date one week ago
      let n;
    todayDate||weekDate ? n = d.getUTCFullYear()+"-"+(d.getUTCMonth()+1)+"-"+d.getUTCDate()+"T00:00" : n="1970-1-1T00:00";

    const API=`https://duunitori.fi/api/v1/46bbefab2ddb434b4e572a2d8818fd96bcbe5ed0/jobentries?search=${jobInput.value}&area=${locationInput.value}&tag=&date_created_after=${n}&format=json`
    
    this.setState({loading:true})

    
    fetch(API)
  .then(
    response=>{
      return response.json()
    }
    )
  .then((theJobs)=>{
      let initial=[]

        var reformedArr=theJobs.results.reduce((accm,v,i,a)=>{ // reduce the result array to a nested array e.g [[a,b,c]...]
          if((i+1)%3===0||i===a.length-1){
            initial.push(v)
             let store= [...accm,initial]
             initial=[];
             return store;
             }
          initial.push(v)
            return accm
        },[])

    
    this.setState({
      loading:false,
      jobArr:reformedArr,
    })

    
  })

}

  componentDidUpdate(){
    window.scrollTo(0,500)
  }


  render() {
    const {jobArr}=this.state

    return (
<div>
  
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <title>Job Gist</title>
  


    <div className="paper container">
      <h1>Your Job Gist</h1>
      <p>Happy to show you the summary of recent Job openings</p>
    </div>


    <div className="row">
      <div className="col sm-4"></div>
      <div className="col sm-2">
          <button className="btn-block" onClick={(v)=>{this.fetchDuunitoriData(true,false)}}>Today's Job </button>
      </div>
      <div className="col sm-2">
          <button className="btn-block" onClick={(v)=>{this.fetchDuunitoriData(false,true)}}>This week's Job</button>
      </div>
      <div className="col sm-4"></div>
  </div>

    <div className="row">
      <div className="col sm-2"></div>

      <div className="col sm-4">
        <div className="form-group">
            <label htmlFor="paperInputs2">Search Job</label>
            <input className="input-block" type="text" id="paperInputs2" ref="jobInput"/>
        </div>
    </div>
      <div className="col sm-4">
        <div className="form-group">
            <label htmlFor="paperInputs3">Location</label>
            <input className="input-block" type="text" id="paperInputs3" ref="locationInput"/>
        </div>
      </div>
   </div>

   <div className="row">
    <div className="col sm-5"></div>
    <div className="col sm-2">
         <button className="btn-block" onClick={(v)=>{this.fetchDuunitoriData(false,false)}}>Search </button>
    </div>
    <div className="col sm-5"></div>
  </div>

  {jobArr.map((v,i)=><Rows key={i} displayJob={v}/>)}
  
</div>
 
      
  
    );
  }
}

export default App;
