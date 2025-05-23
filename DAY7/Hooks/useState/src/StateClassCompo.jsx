import React, { Component } from "react";

class StateClassCompo extends Component {
  constructor() {
    super();
    this.state = {
        count : 0
    }
  }

  changeState = () =>{
      this.setState({
        count: this.state.count+1
      },()=>{
        console.log("State from callback",this.state.count);
      })
      console.log(this.state.count);
  }

  render(){
    return(
        <>
        <h1>Welcome {this.state.count}</h1>
        <button onClick={this.changeState}></button>
        </>
    )
  }
}
export default StateClassCompo;
