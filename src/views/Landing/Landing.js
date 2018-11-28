import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from "lodash";
import axios from 'axios';

class Landing extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  test = () => {
    axios.get('api/test').then((res)=>{console.log('res', res.data)})
  }

  render(){

    return(
      <div className="Landing">
        landing view
        <button onClick={this.test}>Test</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state ;
} 

export default connect(mapStateToProps)(Landing);