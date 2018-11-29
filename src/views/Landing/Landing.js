import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from "lodash";
import axios from 'axios';

class Landing extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedFiles:{}
    }
  }

  test = () => {
    axios.get('api/test').then((res)=>{console.log('res', res.data)})
  }
  openPhotoshop = () => {
    // axios.get('api/photoshop').then((res)=>{console.log('openPhotoshopDone')})
    console.log("log: ", this.state)
  }

  handleSelectedFiles = () => {
    this.setState({selectedFiles: document.getElementById("myFile").files})
  }

  handleProcessFiles = () => {
    console.log("handle process files")
    axios.post("api/processFiles", {files: this.state.selectedFiles}).then((res)=>{
      console.log("res:", res.data)
    })
  }

  render(){

    let list = _.map( this.state.selectedFiles, (x, i) => { 
      console.log(x)
      return (
      <div key={i}>
        file: {x.name}
      </div>
    )})

    return(
      <div className="Landing">
        landing view
        <input type="file" id="myFile" multiple size="50" accept=".png, .svg, .jpeg, .tga" onChange={this.handleSelectedFiles}></input>
        {list}
        <button onClick={this.handleProcessFiles}>Process Files</button>
        <button onClick={this.openPhotoshop}>Open Photoshop</button>
        <button onClick={this.test}>Test</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state ;
} 

export default connect(mapStateToProps)(Landing);