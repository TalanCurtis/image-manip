import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from "lodash";
import axios from 'axios';
// const  fs = require ("fs");
// const fs = require('fs-extra');
// const fsx = require('fs-extra');


class CreateFile extends Component{
  constructor(props){
    super(props);
    this.state={
      input: "",
      directory:"",
      colorId:""
    }
  }

/*
  handleAdd = () => {
    if (this.state.input){
      let list =  this.state.list;
      list.unshift(this.state.input);
      this.setState({list, input:""})
    }
  }

  handleInput = (fieldName) => (event) => {
    this.saveField(fieldName, event.target.value)
  }

  saveField = (fieldName, value) => {
    console.log(fieldName,value)
    this.setState({[fieldName]:value})
  }
  */

   makeDirectory = () => {
    let dir = "./AAA";
    console.log("makeDirectory", dir)
    axios.post("/api/makeDir", {directory: "./BBB"}).then((res)=>console.log("Done"))
  }

  render(){
    return(
      <div className="CreateFile">
        <div className="grid">
          {/* <div>
            <label> FileName </label>
            <input type="text"/>
          </div>
          <div>
            <label> Content </label>
            <input type="textArea" style={{height:"200px"}}/>
          </div> */}
          
          <button onClick={this.makeDirectory}>Select Files</button>
          <button onClick={this.makeDirectory}>Confirm</button>
          <button onClick={this.makeDirectory}>Response Previews and Errors</button>
          <button onClick={this.makeDirectory}>Check Good Ones</button>
          {/* <button onClick={this.makeDirectory}>Make Folder</button> */}
          <a href="C:\Program Files\Adobe\Adobe Photoshop CC 2018\Photoshop.lnk">photoshop</a>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state ;
} 

export default connect(mapStateToProps)(CreateFile);